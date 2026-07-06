function normalizeSlashes(value) {
    return String(value ?? "")
        .replace(/\\/g, "/")
        .replace(/\/+/g, "/")
        .trim();
}

function splitSegments(path) {
    return normalizeSlashes(path)
        .split("/")
        .filter(Boolean);
}

export function normalizeTerminalPath(inputPath, currentPath = "/") {
    const rawInput = String(inputPath ?? "").trim();
    const withoutDrive = normalizeSlashes(rawInput).replace(/^[a-z]:/i, "");
    const isAbsolute = withoutDrive.startsWith("/");
    const stack = isAbsolute ? [] : splitSegments(currentPath);

    for (const segment of withoutDrive.split("/")) {
        if (!segment || segment === ".") {
            continue;
        }

        if (segment === "..") {
            stack.pop();
            continue;
        }

        stack.push(segment);
    }

    return `/${stack.join("/")}`.replace(/\/+/g, "/") || "/";
}

function getParentPath(path) {
    const segments = splitSegments(path);

    if (segments.length <= 1) {
        return "/";
    }

    return `/${segments.slice(0, -1).join("/")}`;
}

function getBaseName(path) {
    const segments = splitSegments(path);
    return segments[segments.length - 1] || "";
}

function cloneEntry(entry) {
    return {
        path: entry.path,
        type: entry.type,
        content: typeof entry.content === "string" ? entry.content : "",
    };
}

function createEntriesMap(entries = []) {
    const map = new Map();
    map.set("/", {
        path: "/",
        type: "dir",
        content: "",
    });

    for (const sourceEntry of entries) {
        const normalizedPath = normalizeTerminalPath(sourceEntry.path);
        const entry = cloneEntry({
            ...sourceEntry,
            path: normalizedPath,
        });

        map.set(normalizedPath, entry);

        const parents = [];
        let currentParent = getParentPath(normalizedPath);

        while (currentParent && !map.has(currentParent)) {
            parents.push(currentParent);

            if (currentParent === "/") {
                break;
            }

            currentParent = getParentPath(currentParent);
        }

        for (const parentPath of parents.reverse()) {
            map.set(parentPath, {
                path: parentPath,
                type: "dir",
                content: "",
            });
        }
    }

    return map;
}

function listChildren(entries, currentPath) {
    const prefix = currentPath === "/" ? "/" : `${currentPath}/`;
    const children = [];

    for (const [path, entry] of entries.entries()) {
        if (path === currentPath || !path.startsWith(prefix)) {
            continue;
        }

        const remainder = path.slice(prefix.length);

        if (remainder && !remainder.includes("/")) {
            children.push({
                name: remainder,
                type: entry.type,
            });
        }
    }

    return children.sort((left, right) => left.name.localeCompare(right.name));
}

function tokenizeCommand(line) {
    return (line.match(/"[^"]*"|'[^']*'|\S+/g) || []).map((token) =>
        token.replace(/^["']|["']$/g, "")
    );
}

function normalizeCommandName(commandName) {
    const command = String(commandName ?? "").trim().toLowerCase();
    const aliases = {
        cat: "cat",
        cd: "cd",
        chdir: "cd",
        copy: "copy",
        "copy-item": "copy",
        cp: "copy",
        dir: "ls",
        gc: "cat",
        "get-content": "cat",
        help: "help",
        ls: "ls",
        md: "mkdir",
        mkdir: "mkdir",
        move: "move",
        "move-item": "move",
        mv: "move",
        pwd: "pwd",
        type: "cat",
    };

    return aliases[command] || command;
}

function isCommentLine(line) {
    const trimmed = String(line ?? "").trim();

    if (!trimmed) {
        return false;
    }

    return (
        trimmed.startsWith("#") ||
        trimmed.startsWith("//") ||
        /^rem\s/i.test(trimmed)
    );
}

function buildPrompt(currentPath) {
    return `agent:${currentPath}$`;
}

function pushMultiline(lines, kind, text) {
    const source = String(text ?? "");
    const split = source.split("\n");

    for (const line of split) {
        lines.push({
            kind,
            text: line,
        });
    }
}

export function runTerminalProgram({ code, scenario = {} }) {
    const entries = createEntriesMap(scenario.entries || []);
    const currentPath = normalizeTerminalPath(scenario.startPath || "/");

    const state = {
        commands: [],
        currentPath,
        entries,
        errors: [],
        lines: [],
        output: [],
    };

    const pushOutput = (text) => {
        const value = String(text ?? "");
        state.output.push(value);
        pushMultiline(state.lines, "output", value);
    };

    const pushError = (text) => {
        const value = String(text ?? "");
        state.errors.push(value);
        pushMultiline(state.lines, "error", value);
    };

    const commandLines = String(code ?? "").split("\n");

    for (const rawLine of commandLines) {
        const line = rawLine.trim();

        if (!line || isCommentLine(line)) {
            continue;
        }

        state.lines.push({
            kind: "command",
            text: `${buildPrompt(state.currentPath)} ${line}`,
        });

        const tokens = tokenizeCommand(line);
        const [rawCommand, ...args] = tokens;
        const command = normalizeCommandName(rawCommand);

        state.commands.push(command);

        switch (command) {
            case "pwd": {
                pushOutput(state.currentPath);
                break;
            }

            case "cd": {
                if (args.length === 0) {
                    pushOutput(state.currentPath);
                    break;
                }

                const nextPath = normalizeTerminalPath(args[0], state.currentPath);
                const targetEntry = state.entries.get(nextPath);

                if (!targetEntry || targetEntry.type !== "dir") {
                    pushError(`Map niet gevonden: ${args[0]}`);
                    break;
                }

                state.currentPath = nextPath;
                break;
            }

            case "ls": {
                const targetPath = args[0]
                    ? normalizeTerminalPath(args[0], state.currentPath)
                    : state.currentPath;
                const targetEntry = state.entries.get(targetPath);

                if (!targetEntry || targetEntry.type !== "dir") {
                    pushError(`Map niet gevonden: ${args[0] || targetPath}`);
                    break;
                }

                const children = listChildren(state.entries, targetPath);

                pushOutput(
                    children.length > 0
                        ? children.map((child) => child.name).join("\n")
                        : "(leeg)"
                );
                break;
            }

            case "cat": {
                if (args.length === 0) {
                    pushError("Geef een bestandsnaam op.");
                    break;
                }

                const targetPath = normalizeTerminalPath(args[0], state.currentPath);
                const targetEntry = state.entries.get(targetPath);

                if (!targetEntry || targetEntry.type !== "file") {
                    pushError(`Bestand niet gevonden: ${args[0]}`);
                    break;
                }

                pushOutput(targetEntry.content || "");
                break;
            }

            case "mkdir": {
                if (args.length === 0) {
                    pushError("Geef een mapnaam op.");
                    break;
                }

                const targetPath = normalizeTerminalPath(args[0], state.currentPath);
                const parentPath = getParentPath(targetPath);
                const parentEntry = state.entries.get(parentPath);

                if (!parentEntry || parentEntry.type !== "dir") {
                    pushError(`Bovenliggende map bestaat niet: ${parentPath}`);
                    break;
                }

                state.entries.set(targetPath, {
                    path: targetPath,
                    type: "dir",
                    content: "",
                });
                break;
            }

            case "copy":
            case "move": {
                if (args.length < 2) {
                    pushError("Geef een bron en bestemming op.");
                    break;
                }

                const sourcePath = normalizeTerminalPath(args[0], state.currentPath);
                const sourceEntry = state.entries.get(sourcePath);

                if (!sourceEntry || sourceEntry.type !== "file") {
                    pushError(`Bronbestand niet gevonden: ${args[0]}`);
                    break;
                }

                let destinationPath = normalizeTerminalPath(
                    args[1],
                    state.currentPath
                );
                const destinationEntry = state.entries.get(destinationPath);

                if (destinationEntry?.type === "dir") {
                    destinationPath = normalizeTerminalPath(
                        `${destinationPath}/${getBaseName(sourcePath)}`
                    );
                }

                const destinationParent = getParentPath(destinationPath);
                const destinationParentEntry = state.entries.get(destinationParent);

                if (!destinationParentEntry || destinationParentEntry.type !== "dir") {
                    pushError(`Bestemmingsmap niet gevonden: ${destinationParent}`);
                    break;
                }

                state.entries.set(destinationPath, {
                    path: destinationPath,
                    type: "file",
                    content: sourceEntry.content,
                });

                if (command === "move") {
                    state.entries.delete(sourcePath);
                }

                pushOutput(
                    `${command === "copy" ? "Gekopieerd" : "Verplaatst"} naar ${destinationPath}`
                );
                break;
            }

            case "help": {
                pushOutput(
                    scenario.helpText ||
                        [
                            "Beschikbare commando's:",
                            "pwd, cd, ls, dir, cat, type, mkdir, cp, copy, mv, move",
                        ].join("\n")
                );
                break;
            }

            case "clear": {
                state.lines = [];
                state.output = [];
                state.errors = [];
                break;
            }

            default: {
                pushError(`Onbekend commando: ${rawCommand}`);
                break;
            }
        }
    }

    return {
        commands: [...state.commands],
        currentPath: state.currentPath,
        entries: Object.fromEntries(state.entries.entries()),
        errors: [...state.errors],
        lines: [...state.lines],
        output: [...state.output],
        outputText: state.output.join("\n"),
    };
}
