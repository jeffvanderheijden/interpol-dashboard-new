import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ language, value, onChange, label }) => {
    // Zorg dat value altijd een string is
    const safeValue = typeof value === "string" ? value : JSON.stringify(value, null, 2);

    return (
        <div className="editor-pane">
            <div className="editor-label">{label || language.toUpperCase()} EDITOR</div>
            <MonacoEditor
                height="300px"
                language={language}
                value={safeValue}
                onChange={(val) => onChange(val || "")}
                theme="vs-dark"
                options={{
                    automaticLayout: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    wordWrap: "on",
                    padding: { top: 8 },
                }}
            />
        </div>
    );
};

export default Editor;
