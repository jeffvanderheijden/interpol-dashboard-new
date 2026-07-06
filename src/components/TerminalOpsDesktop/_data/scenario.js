export const TERMINAL_OPS_SCENARIO = {
    startPath: "/home/agent/operations",
    helpText: [
        "Beschikbare commando's:",
        "pwd, cd, ls, dir, cat, type, mkdir, md, cp, copy, mv, move, help, clear",
    ].join("\n"),
    resolveFileContent({ targetPath, entry }) {
        if (
            targetPath === "/home/agent/operations/briefing/signals/clue.txt"
        ) {
            return [
                "SIGNAAL BEVESTIGD",
                "Codewoord: terminal-mastery",
                "Missie afgerond. Je hebt het bestand vanuit de juiste map heropend.",
            ].join("\n");
        }

        return entry?.content || "";
    },
    entries: [
        { path: "/home", type: "dir" },
        { path: "/home/agent", type: "dir" },
        { path: "/home/agent/operations", type: "dir" },
        { path: "/home/agent/operations/archive", type: "dir" },
        { path: "/home/agent/operations/briefing", type: "dir" },
        { path: "/home/agent/operations/evidence", type: "dir" },
        {
            path: "/home/agent/operations/briefing/mission.txt",
            type: "file",
            content: [
                "INTERPOL OPS BRIEFING",
                "",
                "1. Ga naar de briefing-map.",
                "2. Lees clue.txt.",
                "3. Maak een map met de naam signals.",
                "4. Kopieer clue.txt naar signals.",
                "5. Open daarna het gekopieerde bestand opnieuw vanuit signals.",
            ].join("\n"),
        },
        {
            path: "/home/agent/operations/briefing/clue.txt",
            type: "file",
            content: [
                "SIGNAL FRAGMENT",
                "Dit bestand moet opnieuw gelezen worden vanuit de signals-map.",
                "Pas dan is het bewijs geldig.",
            ].join("\n"),
        },
        {
            path: "/home/agent/operations/archive/old-case.txt",
            type: "file",
            content: "Verouderd dossier. Niet relevant voor deze missie.",
        },
        {
            path: "/home/agent/operations/evidence/notes.txt",
            type: "file",
            content: "Gebruik de briefing-map als startpunt van je onderzoek.",
        },
    ],
};

export const TERMINAL_OPS_INITIAL_LINES = [
    "INTERPOL SECURE TERMINAL v2.4",
    "Operation loaded: Signal Hunt",
    "Open zo nodig eerst de Briefing-app voor Mac/Windows uitleg en tutorials.",
    "Gebruik 'help' als je vastloopt.",
];

export function isTerminalOpsComplete(execution) {
    return (
        execution.currentPath === "/home/agent/operations/briefing/signals" &&
        execution.output.some((line) =>
            String(line).includes("Codewoord: terminal-mastery")
        )
    );
}
