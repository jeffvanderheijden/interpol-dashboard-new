import { useEffect, useRef, useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import "./EditorApp.scss";
import { GameContext } from "./../../_context/GameContext";

const DEFAULT_FILES = {
    "HACKER_NOTE.md": `Volgende stap? Open het bestand **clue.txt.enc** en vind hoe je dit kunt **decoderen**.\n\nEen handig startpunt:\n< base 64 decode >`,
    "clue.txt.enc": makeClueFile(),
};

const STORAGE_KEY = "editorApp.files.v1";
const ACTIVE_FILE_KEY = "editorApp.active.v1";

function loadFiles() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch { }
    return { ...DEFAULT_FILES };
}

function saveFilesToStorage(fs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fs));
}

function makeClueFile() {
    try {
        const url = `${window.location.origin}/training?download-file=true`;
        return btoa(url); // base64 encode
    } catch {
        return ""; // fallback als window niet bestaat
    }
}

const EditorApp = () => {
    const { unlockMail } = useContext(GameContext);

    const [files, setFiles] = useState(() => loadFiles());
    const [active, setActive] = useState(() => localStorage.getItem(ACTIVE_FILE_KEY) || Object.keys(loadFiles())[0]);
    const [status, setStatus] = useState("");
    const saveTimer = useRef(null);

    useEffect(() => {
        // persist files whenever they change
        saveFilesToStorage(files);
    }, [files]);

    useEffect(() => {
        localStorage.setItem(ACTIVE_FILE_KEY, active);
    }, [active]);

    // Keyboard shortcuts: Ctrl/Cmd+S
    useEffect(() => {
        const onKey = (e) => {
            const key = e.key?.toLowerCase?.() || "";
            if ((e.ctrlKey || e.metaKey) && key === "s") {
                e.preventDefault();
                handleSave(); // eslint-disable-line no-use-before-define
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files, active]); // rebind if active/files change (keeps closure updated)

    const value = files[active] ?? "";

    const updateActiveFile = (nextValue) => {
        setFiles((prev) => ({ ...prev, [active]: nextValue }));
    };

    const showSaved = (txt = "Saved ✓") => {
        setStatus(txt);
        clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => setStatus(""), 1400);
    };

    const createNewFile = () => {
        let name = `virus.txt`;
        const next = { ...files, [name]: "" };
        setFiles(next);
        setActive(name);
    };

    const handleSave = async () => {
        // persist is handled by useEffect, but we keep an explicit save flow
        saveFilesToStorage(files);
        showSaved();

        // Fetch official virus.txt and compare content
        try {
            const res = await fetch("/downloads/virus.txt");
            if (!res.ok) {
                console.error("Kon virus.txt niet ophalen:", res.status);
                return;
            }
            const officialText = await res.text();

            const studentText = (files[active] ?? "").trim();
            const officialTrimmed = officialText.trim();

            // Compare exact text (trimmed). Could be adjusted for looser matching if desired.
            if (studentText === officialTrimmed) {
                // Trigger next puzzle step. Use the trigger name you want in questMails.js
                if (typeof unlockMail === "function") {
                    unlockMail("virusAnalyzed");
                }
                showSaved("Match gevonden ✓");
            }
        } catch (err) {
            console.error("Fout bij vergelijken virus.txt:", err);
        }
    };

    return (
        <div className="editor-app styled">
            <aside className="editor-app__sidebar">
                <div className="editor-app__sidebar-header">
                    Bestanden
                    <button
                        className="small-new-btn"
                        title="Nieuw bestand"
                        onClick={createNewFile}
                        style={{
                            float: "right",
                            background: "transparent",
                            border: "none",
                            color: "#9fd",
                            cursor: "pointer",
                        }}
                    >
                        + New
                    </button>
                </div>
                <ul className="editor-app__filelist">
                    {Object.keys(files).map((name) => (
                        <li
                            key={name}
                            className={`editor-app__file ${name === active ? "is-active" : ""}`}
                            onClick={() => setActive(name)}
                            title={name}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </aside>

            <section className="editor-app__main">
                <div className="editor-app__toolbar">
                    <span style={{ marginRight: 12, opacity: 0.9 }}>{active}</span>
                    <span style={{ color: "#6f6" }}>{status}</span>
                    <span style={{ float: "right", color: "#888", fontSize: 12 }}>Tip: Cmd/Ctrl + S om op te slaan</span>
                </div>

                <div className="editor-app__editor" style={{ flex: 1 }}>
                    <Editor
                        path={active}
                        value={value}
                        onChange={(v) => updateActiveFile(v ?? "")}
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
