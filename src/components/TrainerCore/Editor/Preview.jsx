import React, { useState, useRef } from "react";

/**
 * Preview.jsx
 * ------------
 * Toont een live preview van studentcode, maar herlaadt het iframe
 * alleen bij "Run tests" om race conditions met console.log te voorkomen.
 */

const Preview = ({ code, lesson, iframeRef, runTests }) => {
  const [notification, setNotification] = useState(null);
  const [animClass, setAnimClass] = useState("desktop-notification--enter");
  const [srcDoc, setSrcDoc] = useState("");
  const loadingRef = useRef(false);

  /** Bouw veilig srcDoc voor HTML/CSS of JS lessen */
  const generateSrcDoc = (code, lesson) => {
    const safeHtml = lesson.language === "htmlcss" ? String(code?.html || "") : "";
    const safeCss = lesson.language === "htmlcss" ? String(code?.css || "") : "";
    const safeJs = lesson.language === "javascript" ? String(code || "") : "";

    if (lesson.language === "javascript") {
      return `
<!doctype html>
<html>
  <body>
    <script>
      // intercept console output
      (function() {
        window.loggedMessages = [];
        const originalLog = console.log;
        console.log = function(...args) {
          const msg = args.map(a => String(a)).join(" ");
          window.loggedMessages.push(msg);
          if (originalLog) originalLog.apply(console, args);
        };
        window.__getLogs = () => window.loggedMessages;
      })();
    </script>
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
  <head><style>${safeCss}</style></head>
  <body>${safeHtml}</body>
</html>`;
    }

    return "";
  };

  /** Toont notificatie zoals in Windows 95 */
  const showNotification = (title, message) => {
    setNotification({ title, message });
    setAnimClass("desktop-notification--enter");
  };

  /** Run tests — bouwt iframe opnieuw en test na laden */
  const handleRunTests = async () => {
    if (loadingRef.current) return; // voorkom dubbele klik
    loadingRef.current = true;

    // 1️⃣ Bouw nieuw document
    const newSrc = generateSrcDoc(code, lesson);
    setSrcDoc(newSrc);

    // 2️⃣ Wacht tot iframe geladen is
    setTimeout(async () => {
      try {
        const result = await runTests();
        if (Array.isArray(result) && result.every(t => t.pass)) {
          showNotification("Interpol Training", "✅ Alle tests geslaagd! Goed gedaan, agent.");
        } else if (Array.isArray(result)) {
          const failed = result.filter(t => !t.pass).map(t => t.label);
          showNotification(
            "Interpol Code Training",
            failed.map(f => `❌ ${f}`).join("\n")
          );
        } else {
          showNotification("Systeem", "⚠️ Onverwacht testresultaat.");
        }
      } catch {
        showNotification("Systeemfout", "⚠️ Er ging iets mis bij het uitvoeren van de tests.");
      } finally {
        loadingRef.current = false;
      }
    }, 250);
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
        <button onClick={handleRunTests}>
          {loadingRef.current ? "Even geduld..." : "Run tests"}
        </button>
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
