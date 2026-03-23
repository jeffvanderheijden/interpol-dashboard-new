import React, { useEffect, useRef, useState } from "react";

function buildJavascriptDocument() {
    return `<!doctype html>
<html lang="nl">
    <head>
        <meta charset="UTF-8" />
        <style>
            body {
                margin: 0;
                padding: 16px;
                background: #09131c;
                color: #d7f4ff;
                font-family: "Courier New", monospace;
                min-height: 100vh;
            }

            .console-shell {
                border: 1px solid #2e4a60;
                background: linear-gradient(180deg, #071019 0%, #0c1b28 100%);
                border-radius: 10px;
                overflow: hidden;
                box-shadow: inset 0 0 0 1px rgba(126, 247, 207, 0.12);
            }

            .console-titlebar {
                padding: 10px 14px;
                background: #102231;
                border-bottom: 1px solid #2e4a60;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: #7ef7cf;
            }

            #console-output {
                margin: 0;
                padding: 16px;
                min-height: 220px;
                white-space: pre-wrap;
                line-height: 1.6;
            }

            .placeholder {
                color: #86a5bc;
            }

            .error {
                color: #ff8080;
            }
        </style>
    </head>
    <body>
        <div class="console-shell">
            <div class="console-titlebar">Interpol JS Console</div>
            <pre id="console-output"><span class="placeholder">Klik op "Valideer missie" om de console-uitvoer te genereren.</span></pre>
        </div>

        <script>
            (function initializeTrainerConsole() {
                const output = document.getElementById("console-output");
                const logs = [];
                const errors = [];

                function renderLine(message, className) {
                    const line = document.createElement("div");
                    if (className) {
                        line.className = className;
                    }
                    line.textContent = message;
                    output.appendChild(line);
                }

                function clearOutput() {
                    output.textContent = "";
                }

                function format(args) {
                    return args
                        .map((value) => {
                            if (typeof value === "string") {
                                return value;
                            }

                            try {
                                return JSON.stringify(value);
                            } catch {
                                return String(value);
                            }
                        })
                        .join(" ");
                }

                const originalLog = console.log.bind(console);
                const originalError = console.error.bind(console);

                console.log = (...args) => {
                    const message = format(args);
                    logs.push(message);
                    renderLine(message);
                    originalLog(...args);
                };

                console.error = (...args) => {
                    const message = format(args);
                    errors.push(message);
                    renderLine(message, "error");
                    originalError(...args);
                };

                window.__trainerResetConsole = () => {
                    logs.length = 0;
                    errors.length = 0;
                    clearOutput();
                };

                window.__trainerPushError = (message) => {
                    errors.push(String(message));
                    renderLine(String(message), "error");
                };

                window.__trainerGetLogs = () => [...logs];
                window.__trainerGetErrors = () => [...errors];
            })();
        </script>
    </body>
</html>`;
}

function buildHtmlCssDocument(code) {
    const html = String(code?.html ?? "");
    const css = String(code?.css ?? "");

    return `<!doctype html>
<html lang="nl">
    <head>
        <meta charset="UTF-8" />
        <style>
            html, body {
                margin: 0;
                min-height: 100%;
            }

            body {
                background: #ffffff;
            }

            ${css}
        </style>
    </head>
    <body>${html}</body>
</html>`;
}

function buildPreviewDocument(lesson, code, revision) {
    const documentSource =
        lesson.language === "javascript"
            ? buildJavascriptDocument()
            : buildHtmlCssDocument(code);

    return `${documentSource}\n<!-- revision:${revision} -->`;
}

function buildNotificationMessage(results) {
    if (!Array.isArray(results) || results.length === 0) {
        return {
            title: "Trainer",
            body: "Geen testresultaten ontvangen.",
            tone: "warning",
        };
    }

    if (results.every((result) => result.pass)) {
        return {
            title: "Mission accomplished",
            body: "Alle controles zijn geslaagd. Deze stap is vrijgegeven.",
            tone: "success",
        };
    }

    const failed = results
        .filter((result) => !result.pass)
        .map((result) => `- ${result.label}`)
        .join("\n");

    return {
        title: "Nog niet compleet",
        body: `Deze controles missen nog:\n${failed}`,
        tone: "danger",
    };
}

const Preview = ({ code, lesson, iframeRef, runTests, results = [] }) => {
    const [srcDoc, setSrcDoc] = useState(() =>
        buildPreviewDocument(lesson, code, 0)
    );
    const [isRunning, setIsRunning] = useState(false);
    const [notification, setNotification] = useState(null);
    const [revision, setRevision] = useState(0);

    const pendingRunRef = useRef(false);

    useEffect(() => {
        setSrcDoc(buildPreviewDocument(lesson, code, revision));
    }, [lesson, code, revision]);

    useEffect(() => {
        setNotification(null);
    }, [lesson.id]);

    const handleRunClick = () => {
        if (isRunning) {
            return;
        }

        pendingRunRef.current = true;
        setIsRunning(true);
        setNotification(null);
        setRevision((current) => current + 1);
    };

    const handleFrameLoad = async () => {
        if (!pendingRunRef.current) {
            return;
        }

        pendingRunRef.current = false;

        try {
            const nextResults = await runTests();
            setNotification(buildNotificationMessage(nextResults));
        } catch (error) {
            setNotification({
                title: "Systeemfout",
                body: error instanceof Error ? error.message : "Valideren mislukt.",
                tone: "danger",
            });
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <section className="preview" aria-label="Preview en testresultaten">
            <div className="preview__header">
                <div>
                    <p className="preview__eyebrow">Field Monitor</p>
                    <h3>
                        {lesson.language === "javascript"
                            ? "Console output"
                            : "Live preview"}
                    </h3>
                </div>

                <button
                    type="button"
                    className="preview__run-button"
                    onClick={handleRunClick}
                    disabled={isRunning}
                >
                    {isRunning ? "Valideren..." : "Valideer missie"}
                </button>
            </div>

            <iframe
                ref={iframeRef}
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-same-origin"
                title="trainer-preview"
                onLoad={handleFrameLoad}
            />

            <div className="preview__results">
                <div className="preview__results-header">
                    <h4>Controles</h4>
                    <span>{results.filter((result) => result.pass).length}/{results.length || 0}</span>
                </div>

                {results.length === 0 ? (
                    <p className="preview__placeholder">
                        Nog geen controles uitgevoerd voor deze stap.
                    </p>
                ) : (
                    <ul className="preview__result-list">
                        {results.map((result) => (
                            <li
                                key={result.label}
                                className={
                                    result.pass
                                        ? "preview__result is-pass"
                                        : "preview__result is-fail"
                                }
                            >
                                <span className="preview__result-indicator">
                                    {result.pass ? "PASS" : "MISS"}
                                </span>
                                <span>{result.label}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {notification ? (
                <div
                    className={`trainer-notification is-${notification.tone}`}
                    role="status"
                    aria-live="polite"
                >
                    <strong>{notification.title}</strong>
                    <pre>{notification.body}</pre>
                </div>
            ) : null}
        </section>
    );
};

export default Preview;
