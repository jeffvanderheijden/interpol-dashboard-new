export async function runAllTests({ lesson, step, code, iframeRef }) {
    const results = [];

    if (lesson.language === "htmlcss") {
        const doc = iframeRef.current.contentDocument;

        step.tests.forEach((t) => {
            let pass = false;
            try {
                if (t.type === "selectorExists") {
                    pass = !!doc.querySelector(t.selector);
                } else if (t.type === "textContains") {
                    const el = doc.querySelector(t.selector);
                    pass = el && el.textContent.includes(t.includes);
                }
            } catch {
                pass = false;
            }
            results.push({ label: t.label, pass });
        });
    }

    if (lesson.language === "javascript") {
        const win = iframeRef.current.contentWindow;
        win.console._log = [];
        win.console.log = (...args) => win.console._log.push(args.join(" "));
        try {
            win.eval(code);
            step.tests.forEach((t) => {
                let pass = false;
                if (t.type === "variableEquals") {
                    pass = win[t.name] === t.equals;
                } else if (t.type === "consoleOutputContains") {
                    pass = win.console._log.some((line) => line.includes(t.includes));
                }
                results.push({ label: t.label, pass });
            });
        } catch (e) {
            results.push({ label: "Runtime error", pass: false });
        }
    }

    return results;
}
