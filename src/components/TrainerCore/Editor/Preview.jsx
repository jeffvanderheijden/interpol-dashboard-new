import React, { useMemo, useState } from "react";

const Preview = ({ code, lesson, iframeRef, runTests }) => {
    const [notification, setNotification] = useState(null);
    const [animClass, setAnimClass] = useState("desktop-notification--enter");

    const srcDoc = useMemo(() => {
        // Altijd veilige strings genereren
        const safeHtml = lesson.language === "htmlcss"
            ? String(code?.html || "")
            : "";
        const safeCss = lesson.language === "htmlcss"
            ? String(code?.css || "")
            : "";
        const safeJs = lesson.language === "javascript"
            ? String(code || "")
            : "";

        if (lesson.language === "javascript") {
            // Wrap de JS in try/catch zodat syntaxfouten netjes gelogd worden
            return `
<!doctype html>
<html>
  <body>
    <script>
      try {
        ${safeJs}
      } catch (err) {
        console.error(err);
        document.body.innerHTML =
          '<pre style="color:red;font-family:monospace;">' +
          err.toString().replace(/</g, '&lt;') +
          '</pre>';
      }
    </script>
  </body>
</html>`;
        }

        if (lesson.language === "htmlcss") {
            return `
<!doctype html>
<html>
  <head>
    <style>${safeCss}</style>
  </head>
  <body>
    ${safeHtml}
  </body>
</html>`;
        }

        return String(code || "");
    }, [code, lesson.language]);

    const showNotification = (title, message) => {
        setNotification({ title, message });
        setAnimClass("desktop-notification--enter");
    };

    const handleRunTests = async () => {
        try {
            const result = await runTests();
            if (Array.isArray(result) && result.every(t => t.pass)) {
                showNotification("Interpol Training", "✅ Alle tests geslaagd! Goed gedaan, agent.");
            } else if (Array.isArray(result)) {
                const failed = result.filter(t => !t.pass).map(t => t.label);
                showNotification("Interpol Code Training", `${failed.map(f => `❌ ${f}`).join("\n")}`);
            } else {
                showNotification("Systeem", "⚠️ Onverwacht testresultaat.");
            }
        } catch (e) {
            showNotification("Systeemfout", "⚠️ Er ging iets mis bij het uitvoeren van de tests.");
        }
    };

    return (
        <div className="preview">
            <div className="preview-label">LIVE PREVIEW</div>

            <iframe
                ref={iframeRef}
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-same-origin"
                title="trainer-preview"
            />

            <div className="preview-actions">
                <button onClick={handleRunTests}>Run tests</button>
            </div>

            {notification && (
                <div
                    className={`desktop-notification ${animClass}`}
                    onClick={() => setNotification(null)}
                >
                    <span>{notification.title}</span>
                    <div className="desktop-notification__body">
                        {notification.message}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Preview;
