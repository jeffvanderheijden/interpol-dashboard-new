import React, { useMemo } from "react";

const Preview = ({ code, lesson, step, iframeRef, testResults, runTests }) => {
    const srcDoc = useMemo(() => {
        if (lesson.language === "javascript") {
            return `
<!doctype html>
<html>
  <body>
    <script>
    ${code}
    </script>
  </body>
</html>`;
        }

        if (lesson.language === "htmlcss") {
            return `
<!doctype html>
<html>
<head><style>${code.css || ""}</style></head>
<body>${code.html || ""}</body>
</html>`;
        }

        return code;
    }, [code, lesson.language]);

    return (
        <div className="preview">
            <div className="preview-label">LIVE PREVIEW</div>
            <iframe ref={iframeRef} srcDoc={srcDoc} sandbox="allow-scripts" />
            <button onClick={runTests}>Run tests</button>
            <ul>
                {testResults.map((t, i) => (
                    <li key={i} style={{ color: t.pass ? "green" : "red" }}>
                        {t.label} {t.pass ? "✅" : "❌"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Preview;
