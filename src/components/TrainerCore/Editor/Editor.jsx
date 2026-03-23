import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ language, value, onChange, label }) => {
    const safeValue =
        typeof value === "string" ? value : JSON.stringify(value, null, 2);

    return (
        <div className="editor-pane">
            <div className="editor-label">{label || language.toUpperCase()}</div>
            <div className="editor-wrapper">
                <MonacoEditor
                    height="100%"
                    language={language}
                    value={safeValue}
                    onChange={(nextValue) => onChange(nextValue || "")}
                    theme="vs-dark"
                    options={{
                        automaticLayout: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        wordWrap: "on",
                        padding: { top: 10 },
                        tabSize: 2,
                    }}
                />
            </div>
        </div>
    );
};

export default Editor;
