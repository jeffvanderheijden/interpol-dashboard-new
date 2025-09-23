/**
 * Virtual filesystem
 */
export const fs = {
    "/": ["home"],
    "/home": ["agent"],
    "/home/agent": ["training"],
    "/home/agent/training": ["readme.txt", "instructions.sh"],
};

export const fileContents = {
    "/home/agent/training/readme.txt": `Goed bezig, agent.\n\nGebruik het commando in instructions.sh om de verdachtenlijst te downloaden.`,
    "/home/agent/training/instructions.sh": `#!/bin/bash\n# Gebruik dit commando:\ncurl -o suspects.txt https://interpol.sd-lab.nl/api/suspects`,
};

/**
 * Utilities
 */
export function pushLogEntry(setLog, entry) {
    if (entry === "__CLEAR__") {
        setLog([]);
    } else {
        setLog((prev) => [...prev, entry]);
    }
}

/**
 * Simuleer een download
 */
export function simulateDownload(setLog, onStepComplete) {
    const steps = [10, 30, 55, 80, 100];
    let i = 0;
    const tick = () => {
        if (i >= steps.length) {
            pushLogEntry(setLog, "Download voltooid. Verdachtenlijst opgeslagen.");
            onStepComplete("terminalDone");
            return;
        }
        pushLogEntry(setLog, `Downloading... ${steps[i]}%`);
        i++;
        setTimeout(tick, 450);
    };
    tick();
}

/**
 * Simuleer virus analyse
 */
export function simulateVirusExecution(setLog, onStepComplete) {
    const stages = [
        { text: "Initializing analysis sandbox...", delay: 600 },
        { text: "Mounting read-only filesystem...", delay: 700 },
        { text: "Scanning file for indicators (static-only)...", delay: 900 },
        { text: "Extracting strings & metadata...", delay: 900 },
        { text: "Running signature heuristics (no execution)...", delay: 1000 },
    ];

    pushLogEntry(setLog, "");
    pushLogEntry(setLog, "*** SYSTEM NOTICE: executing analysis sandbox ***");
    pushLogEntry(setLog, "Loading /downloads/virus.txt into isolated VM...");

    let idx = 0;
    const runStage = () => {
        if (idx >= stages.length) {
            pushLogEntry(setLog, "--- STATIC ANALYSIS SUMMARY ---");
            pushLogEntry(setLog, "File: /downloads/virus.txt");
            pushLogEntry(setLog, "Verdict: suspicious (contains obfuscated fragments).");
            pushLogEntry(setLog, "Action: quarantined in analysis VM; no execution performed.");
            pushLogEntry(setLog, "Recommendation: continue manual forensic analysis in Notepad/Editor.");
            pushLogEntry(setLog, "*** ANALYSIS COMPLETE ***");
            onStepComplete("virusExecutionSimulated");
            return;
        }
        pushLogEntry(setLog, stages[idx].text);
        setTimeout(runStage, stages[idx].delay);
        idx++;
    };
    setTimeout(runStage, 200);
}

/**
 * Command map
 */
export function makeCommands({ setLog, path, setPath, onStepComplete }) {
    return {
        ls: () => {
            const contents = fs[path] || [];
            pushLogEntry(setLog, contents.join("  "));
        },
        cd: (target) => {
            if (!target) return pushLogEntry(setLog, "Gebruik: cd <map>");
            let newPath;
            if (target === "..") {
                newPath = path.substring(0, path.lastIndexOf("/")) || "/";
            } else {
                newPath = path === "/" ? `/${target}` : `${path}/${target}`;
            }
            if (fs[newPath]) setPath(newPath);
            else pushLogEntry(setLog, `cd: map '${target}' bestaat niet`);
        },
        cat: (file) => {
            if (!file) return pushLogEntry(setLog, "Gebruik: cat <bestand>");
            const filePath = path === "/" ? `/${file}` : `${path}/${file}`;
            if (fileContents[filePath]) pushLogEntry(setLog, fileContents[filePath]);
            else pushLogEntry(setLog, `cat: ${file}: Bestand niet gevonden`);
        },
        curl: (...args) => {
            const full = ["curl", ...args].join(" ").trim();
            const correct = "curl -o suspects.txt https://interpol.sd-lab.nl/api/suspects";
            if (full === correct) {
                pushLogEntry(setLog, "Download gestart...");
                simulateDownload(setLog, onStepComplete);
            } else pushLogEntry(setLog, "curl: onbekend of incorrect commando");
        },
        help: () => {
            pushLogEntry(setLog, "Beschikbare commando’s: ls, cd, cat, curl, help, clear");
        },
        clear: () => pushLogEntry(setLog, "__CLEAR__"),
    };
}
