import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ language, value, onChange }) => {
    return (
        <div className="editor-pane">
            <div className="editor-label">{language.toUpperCase()} EDITOR</div>
            <MonacoEditor
                height="100"
                language={language}
                value={value}
                onChange={onChange}
                theme="vs-dark"
                options={{
                    automaticLayout: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    wordWrap: "on",
                }}
            />
        </div>
    );
};

export default Editor;
