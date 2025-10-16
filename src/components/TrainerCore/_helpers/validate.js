/**
 * validate.js
 * ------------
 * Centrale validator voor HTML/CSS en JavaScript lessen.
 * Compatibel met TrainerCore + nieuwe Preview (iframe alleen op 'Run tests').
 */

export async function runAllTests({ lesson, step, code, iframeRef }) {
    const iframe = iframeRef?.current;
    const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
    const win = iframe?.contentWindow;

    // als iframe nog niet beschikbaar is
    if (!doc || !win) {
        return (step.tests || []).map(t => ({ label: t.label || t.type, pass: false }));
    }

    // kleine helper
    const norm = s => String(s ?? "").replace(/\s+/g, " ").trim().toLowerCase();

    // korte pauze om zeker te zijn dat iframe geladen is
    await new Promise(res => setTimeout(res, 150));

    const tests = Array.isArray(step.tests) ? step.tests : [];
    const results = [];

    // ----------------------------- JAVASCRIPT -----------------------------
    if (lesson.language === "javascript") {
        try {
            // probeer code uit te voeren, zodat functies en variabelen beschikbaar zijn
            try {
                win.eval(code);
            } catch (e) {
                console.error("Runtime error in student code:", e);
                results.push({ label: "Runtime error", pass: false });
            }

            for (const t of tests) {
                let pass = false;

                try {
                    switch (t.type) {
                        case "variableEquals": {
                            const v = win.eval(`(function(){ try { return ${t.name}; } catch(e){ return undefined; } })()`);
                            pass = v === t.equals;
                            break;
                        }

                        case "functionReturnEquals": {
                            const fn = win.eval(`(function(){ try { return ${t.name}; } catch(e){ return undefined; } })()`);
                            pass = typeof fn === "function" && fn(...(t.args || [])) === t.equals;
                            break;
                        }

                        case "expressionTrue": {
                            pass = !!win.eval(`(function(){ try { return !!(${t.expr}); } catch(e){ return false; } })()`);
                            break;
                        }

                        case "consoleOutputContains": {
                            // wacht even zodat logs kunnen worden toegevoegd
                            await new Promise(res => setTimeout(res, 150));

                            let logs = [];
                            try {
                                if (typeof win.__getLogs === "function") {
                                    logs = win.__getLogs() || [];
                                }
                            } catch {
                                logs = [];
                            }

                            console.debug("🔎 Captured console logs:", logs);

                            pass = logs.some(line =>
                                String(line).toLowerCase().includes(String(t.includes).toLowerCase())
                            );
                            break;
                        }

                        default:
                            console.warn("Onbekend JS testtype:", t.type);
                            break;
                    }
                } catch (e) {
                    console.warn("JS testfout:", e);
                    pass = false;
                }

                results.push({ label: t.label || t.type, pass });
            }

            return results;
        } catch (e) {
            console.error("Top-level JS validation error:", e);
            return tests.map(t => ({ label: t.label || t.type, pass: false }));
        }
    }

    // ----------------------------- HTML & CSS -----------------------------
    try {
        for (const t of tests) {
            let pass = false;

            try {
                switch (t.type) {
                    case "selectorExists": {
                        pass = !!doc.querySelector(t.selector);
                        break;
                    }

                    case "hasCount": {
                        const els = Array.from(doc.querySelectorAll(t.selector));
                        pass = els.length === Number(t.count);
                        break;
                    }

                    case "textContains": {
                        const el = doc.querySelector(t.selector);
                        pass = !!el && norm(el.textContent).includes(norm(t.includes));
                        break;
                    }

                    case "attrEquals": {
                        const el = doc.querySelector(t.selector);
                        pass = !!el && norm(el.getAttribute(t.attr)) === norm(t.equals);
                        break;
                    }

                    case "computedStyleEquals": {
                        const el = doc.querySelector(t.selector);
                        if (el) {
                            const got = doc.defaultView
                                .getComputedStyle(el)
                                .getPropertyValue(t.prop)
                                .trim()
                                .toLowerCase();

                            // expected normaliseren via tijdelijk element
                            const tmp = doc.createElement("div");
                            tmp.style.setProperty(t.prop, String(t.equals));
                            tmp.style.position = "absolute";
                            tmp.style.visibility = "hidden";
                            doc.body.appendChild(tmp);
                            const want = doc.defaultView
                                .getComputedStyle(tmp)
                                .getPropertyValue(t.prop)
                                .trim()
                                .toLowerCase();
                            tmp.remove();

                            pass = got === want;
                        }
                        break;
                    }

                    case "cssRuleExists": {
                        let found = false;
                        try {
                            for (const sheet of Array.from(doc.styleSheets)) {
                                for (const rule of Array.from(sheet.cssRules || [])) {
                                    if (rule.selectorText && rule.selectorText.trim() === t.selector.trim()) {
                                        if (t.prop && typeof t.equals !== "undefined") {
                                            const got = (rule.style.getPropertyValue(t.prop) || "").trim().toLowerCase();

                                            const tmp = doc.createElement("div");
                                            tmp.style.setProperty(t.prop, String(t.equals));
                                            tmp.style.position = "absolute";
                                            tmp.style.visibility = "hidden";
                                            doc.body.appendChild(tmp);
                                            const want = doc.defaultView
                                                .getComputedStyle(tmp)
                                                .getPropertyValue(t.prop)
                                                .trim()
                                                .toLowerCase();
                                            tmp.remove();

                                            found = got === want;
                                        } else {
                                            found = true;
                                        }
                                    }
                                }
                            }
                        } catch {
                            found = false;
                        }
                        pass = found;
                        break;
                    }

                    default:
                        console.warn("Onbekend HTML/CSS testtype:", t.type);
                        pass = false;
                }
            } catch (e) {
                console.warn("HTML/CSS testfout:", e);
                pass = false;
            }

            results.push({ label: t.label || t.type, pass });
        }

        return results;
    } catch (e) {
        console.error("Top-level HTML/CSS validation error:", e);
        return tests.map(t => ({ label: t.label || t.type, pass: false }));
    }
}
