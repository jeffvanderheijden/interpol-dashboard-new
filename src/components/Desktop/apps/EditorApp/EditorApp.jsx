import { useEffect, useRef, useState, useContext, useCallback } from "react";
import Editor from "@monaco-editor/react";
import "./EditorApp.scss";
import { GameContext } from "./../../_context/GameContext";
import {
    loadFiles,
    saveFilesToStorage,
    makeClueFile,
} from "./../../_helpers/editorHelpers";

const DEFAULT_FILES = {
    "HACKER_NOTE.md": `Volgende stap? Open het bestand **clue.txt.enc** en vind hoe je dit kunt **decoderen**.\n\nEen handig startpunt:\n< base 64 decode >`,
    "clue.txt.enc": makeClueFile(),
};

const STORAGE_KEY = "editorApp.files.v1";
const ACTIVE_FILE_KEY = "editorApp.active.v1";

const normalizeFileContents = (value) =>
    String(value ?? "")
        .replace(/^\uFEFF/, "")
        .replace(/\r\n?/g, "\n")
        .trim();

const findFirstDifference = (left, right) => {
    const sharedLength = Math.min(left.length, right.length);

    for (let index = 0; index < sharedLength; index += 1) {
        if (left[index] !== right[index]) return index;
    }

    return left.length === right.length ? -1 : sharedLength;
};

const EditorApp = () => {
    const { unlockMail } = useContext(GameContext);

    const [files, setFiles] = useState(() => loadFiles(DEFAULT_FILES, STORAGE_KEY));
    const [active, setActive] = useState(
        () => localStorage.getItem(ACTIVE_FILE_KEY) || Object.keys(loadFiles(DEFAULT_FILES, STORAGE_KEY))[0]
    );
    const [status, setStatus] = useState("idle"); // "idle" | "saved" | "match"
    const saveTimer = useRef(null);
    const saveHandler = useRef(null);

    const showStatus = useCallback((state) => {
        setStatus(state);
        clearTimeout(saveTimer.current);
        if (state !== "idle") {
            saveTimer.current = setTimeout(() => setStatus("idle"), 1400);
        }
    }, []);

    const createNewFile = () => {
        const name = `virus.txt`;
        const next = { ...files, [name]: "" };
        setFiles(next);
        setActive(name);
    };

    const handleSave = useCallback(async () => {
        saveFilesToStorage(files, STORAGE_KEY);
        showStatus("saved");

        try {
            const res = await fetch("/downloads/virus.txt");
            if (!res.ok) return console.error("Kon virus.txt niet ophalen:", res.status);

            const rawOfficialText = await res.text();
            const rawStudentText = files[active] ?? "";
            const officialText = normalizeFileContents(rawOfficialText);
            const studentText = normalizeFileContents(rawStudentText);

            if (studentText === officialText) {
                unlockMail?.("virusAnalyzed");
                showStatus("match");
            } else {
                const firstDifference = findFirstDifference(
                    studentText,
                    officialText
                );
                const excerptStart = Math.max(0, firstDifference - 20);
                const excerptEnd = Math.max(40, firstDifference + 20);

                console.warn("[virus.txt] Inhoud komt niet overeen.", {
                    activeFile: active,
                    firstDifference,
                    studentLength: studentText.length,
                    officialLength: officialText.length,
                    studentExcerpt: studentText.slice(excerptStart, excerptEnd),
                    officialExcerpt: officialText.slice(excerptStart, excerptEnd),
                });
            }
        } catch (err) {
            console.error("Fout bij vergelijken virus.txt:", err);
        }
    }, [files, active, showStatus, unlockMail]);

    useEffect(() => {
        saveHandler.current = handleSave;
    }, [handleSave]);

    // persist files whenever they change
    useEffect(() => {
        saveFilesToStorage(files, STORAGE_KEY);
    }, [files]);

    useEffect(() => {
        localStorage.setItem(ACTIVE_FILE_KEY, active);
    }, [active]);

    const handleEditorMount = useCallback((editor, monaco) => {
        editor.addCommand(
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
            () => saveHandler.current?.()
        );
    }, []);

    const value = files[active] ?? "";

    const updateActiveFile = (nextValue) => {
        setFiles((prev) => ({ ...prev, [active]: nextValue }));
    };

    return (
        <div className="editor-app">
            <aside className="editor-app__sidebar">
                <div className="editor-app__sidebar-header">
                    Bestanden
                    <button
                        className="win95-button small-new-btn"
                        title="Nieuw bestand"
                        onClick={createNewFile}
                    >
                        + New
                    </button>
                </div>
                <ul className="editor-app__filelist">
                    {Object.keys(files).map((name) => (
                        <li
                            key={name}
                            className={`editor-app__file ${name === active ? "is-active" : ""}`}
                            role="button"
                            tabIndex={0}
                            onClick={() => setActive(name)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") setActive(name);
                            }}
                            title={name}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </aside>

            <section className="editor-app__main">
                <div className="editor-app__toolbar">
                    <span className="editor-app__filename">{active}</span>
                    {status === "saved" && <span className="status saved">Saved ✓</span>}
                    {status === "match" && <span className="status match">Match gevonden ✓</span>}
                    <span className="editor-app__tip">Tip: Cmd/Ctrl + S om op te slaan</span>
                </div>

                <div className="editor-app__editor">
                    <Editor
                        path={active}
                        value={value}
                        onChange={(v) => updateActiveFile(v ?? "")}
                        onMount={handleEditorMount}
                        language="plaintext"
                        theme="vs-dark"
                        options={{
                            fontSize: 14,
                            minimap: { enabled: true },
                            wordWrap: "on",
                            automaticLayout: true,
                            scrollBeyondLastLine: false,
                            tabSize: 2,
                            fontLigatures: true,
                        }}
                        keepCurrentModel
                        loading={<div className="editor-app__loading">Editor aan het laden…</div>}
                    />
                </div>
            </section>
        </div>
    );
};

export default EditorApp;
