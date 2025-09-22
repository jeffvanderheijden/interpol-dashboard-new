import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import "./EditorApp.scss";

const DEFAULT_FILES = {
    "HACKER_NOTE.md": `Ik heb je *Notepad* ge-upgrade naar een echte **code editor**.\n\n> Volgende stap? Open het bestand **clue.txt.enc** en vind hoe je dit kunt **decoderen**.\n> Tip: probeer eerst te herkennen *welk soort versleuteling* dit is.\n\n— H.\n`,
    "clue.txt.enc": `U29tZSBiYXNlNjQgc3R1ZmY6IFJvdHRlcmRhbS1WZXJib3JnZW4gY29vcmRpbmF0ZW4gKGJpaiBkZSBicnVnKSB6aWpuIHplIHB1enp1c3RlcjogZ29vZCBuaWd0IGtsZXVyLi4u\n`,
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

function saveFiles(fs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fs));
}

const EditorApp = () => {
    const [files, setFiles] = useState(() => loadFiles());
    const [active, setActive] = useState(() => localStorage.getItem(ACTIVE_FILE_KEY) || Object.keys(loadFiles())[0]);

    useEffect(() => {
        saveFiles(files);
    }, [files]);

    useEffect(() => {
        localStorage.setItem(ACTIVE_FILE_KEY, active);
    }, [active]);

    const value = files[active] ?? "";

    const updateActiveFile = (nextValue) => {
        setFiles((prev) => ({ ...prev, [active]: nextValue }));
    };

    return (
        <div className="editor-app styled">
            <aside className="editor-app__sidebar">
                <div className="editor-app__sidebar-header">📂 Bestanden</div>
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
                <div className="editor-app__editor">
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
