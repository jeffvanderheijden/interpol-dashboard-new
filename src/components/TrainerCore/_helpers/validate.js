// src/components/HtmlCssTrainer/_helpers/validate.js
//
// Ondersteunde testtypes (voor step.tests):
// HTML/CSS:
// - { type: "selectorExists", selector }
// - { type: "hasCount", selector, count }
// - { type: "textContains", selector, includes }     // case/whitespace-insensitive
// - { type: "attrEquals", selector, attr, equals }   // case-insensitive
// - { type: "classContains", selector, className }
// - { type: "inlineStyleEquals", selector, prop, equals }   // element.style[prop]
// - { type: "computedStyleEquals", selector, prop, equals } // getComputedStyle(el).getPropertyValue(prop)
// - { type: "cssRuleExists", selector, prop?, equals? }     // zoekt in <style> regels (srcDoc same-origin)
//
// JavaScript (lesson.language === "javascript"):
// - { type: "variableEquals", name, equals }          // zoekt via eval + window fallback
// - { type: "functionReturnEquals", name, args, equals } // roept functie aan met args []
// - { type: "consoleOutputContains", includes }       // opgevangen via stub
// - { type: "expressionTrue", expr }                  // evalueert boolean-expressie
//
// Tip: `prop` in CSS-tests: gebruik CSS-property naam met streepje (bv. "font-size", "color").
// `equals` mag zijn: "red", "#f00", "rgb(255,0,0)", "20px", etc. We normaliseren naar computed string.

function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

function normalizeText(s) {
    if (s == null) return "";
    return String(s).replace(/\s+/g, " ").trim().toLowerCase();
}

function normalizeSimple(s) {
    if (s == null) return "";
    return String(s).trim().toLowerCase();
}

function getDocAndWin(iframeRef) {
    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
    const win = iframe?.contentWindow;
    return { doc, win };
}

async function ensureIframeReady(iframeRef) {
    const { doc } = getDocAndWin(iframeRef);
    if (!doc) return;
    // Als al geladen is, kort wachten zodat CSS/DOM klaar is
    if (doc.readyState === "complete" || doc.readyState === "interactive") {
        await sleep(30);
        return;
    }
    await new Promise((resolve) => {
        const onReady = () => resolve();
        doc.addEventListener("DOMContentLoaded", onReady, { once: true });
    });
    await sleep(30);
}

function cssValueToComputed(doc, prop, value) {
    if (value == null) return "";
    try {
        // We normaliseren de expected value naar een computed string
        const tmp = doc.createElement("div");
        // prop in CSS syntax: 'font-size', 'color'
        tmp.style.setProperty(prop, String(value));
        // Zorg dat hij in layout komt zodat computed werkt
        tmp.style.position = "absolute";
        tmp.style.visibility = "hidden";
        doc.body.appendChild(tmp);
        const computed = doc.defaultView.getComputedStyle(tmp).getPropertyValue(prop);
        tmp.remove();
        return normalizeSimple(computed || String(value));
    } catch {
        return normalizeSimple(value);
    }
}

function getComputedStyleValue(doc, el, prop) {
    try {
        const v = doc.defaultView.getComputedStyle(el).getPropertyValue(prop);
        return normalizeSimple(v);
    } catch {
        return "";
    }
}

function findCssRule(doc, selector) {
    // Zoekt exacte selectorText match in stylesheets van het srcDoc
    try {
        const sheets = Array.from(doc.styleSheets || []);
        for (const sheet of sheets) {
            const rules = Array.from(sheet.cssRules || []);
            for (const rule of rules) {
                if (rule.selectorText && rule.selectorText.trim() === selector.trim()) {
                    return rule;
                }
            }
        }
    } catch {
        // cross-origin of andere beperkingen—maar bij srcDoc is dit normaal toegankelijk
    }
    return null;
}

function getEl(doc, selector) {
    try {
        return doc.querySelector(selector);
    } catch {
        return null;
    }
}

function getEls(doc, selector) {
    try {
        return Array.from(doc.querySelectorAll(selector));
    } catch {
        return [];
    }
}

// ---------- JavaScript helpers ----------

function withConsoleStub(win, fn) {
    const original = { log: win.console.log, warn: win.console.warn, error: win.console.error };
    win.__test_console = [];
    try {
        win.console.log = (...args) => {
            try {
                win.__test_console.push(args.map((a) => String(a)).join(" "));
            } catch {
                // ignore
            }
            original.log && original.log.apply(win.console, args);
        };
        win.console.warn = (...args) => {
            try {
                win.__test_console.push(args.map((a) => String(a)).join(" "));
            } catch { }
            original.warn && original.warn.apply(win.console, args);
        };
        win.console.error = (...args) => {
            try {
                win.__test_console.push(args.map((a) => String(a)).join(" "));
            } catch { }
            original.error && original.error.apply(win.console, args);
        };
        return fn();
    } finally {
        // laat logs beschikbaar voor checks, maar herstel console
        win.console.log = original.log;
        win.console.warn = original.warn;
        win.console.error = original.error;
    }
}

function evalInIframe(win, code) {
    // Voer code uit in iframe-context en vang exceptions
    try {
        // eslint-disable-next-line no-new-func
        return win.eval(code);
    } catch (e) {
        throw e;
    }
}

function getVarFromIframe(win, name) {
    try {
        // Probeer via eval (ziet global lexical environment, o.a. let/const)
        const res = win.eval(`(function(){ try { return ${name}; } catch(e){ return undefined; } })()`);
        if (typeof res !== "undefined") return res;
    } catch {
        // ignore
    }
    // fallback naar window property (voor var / expliciet window.name)
    return win[name];
}

function callFunctionFromIframe(win, name, args = []) {
    try {
        // Probeer functie-lookup via eval (dekt let/const function declarations)
        const fn = win.eval(`(function(){ try { return ${name}; } catch(e){ return undefined; } })()`);
        if (typeof fn === "function") {
            return fn.apply(win, args);
        }
    } catch {
        // ignore
    }
    // fallback naar window[name]
    const fn2 = win[name];
    if (typeof fn2 === "function") {
        return fn2.apply(win, args);
    }
    throw new Error(`Function '${name}' not found`);
}

// ---------- Test-runners ----------

async function runHtmlCssTest(doc, t) {
    switch (t.type) {
        case "selectorExists": {
            const el = getEl(doc, t.selector);
            return !!el;
        }
        case "hasCount": {
            const els = getEls(doc, t.selector);
            return els.length === Number(t.count);
        }
        case "textContains": {
            const el = t.selector ? getEl(doc, t.selector) : doc.body;
            if (!el) return false;
            const hay = normalizeText(el.textContent);
            const needle = normalizeText(t.includes);
            return hay.includes(needle);
        }
        case "attrEquals": {
            const el = getEl(doc, t.selector);
            if (!el) return false;
            const v = el.getAttribute(t.attr);
            return normalizeSimple(v) === normalizeSimple(t.equals);
        }
        case "classContains": {
            const el = getEl(doc, t.selector);
            if (!el) return false;
            return el.classList?.contains?.(t.className) ?? false;
        }
        case "inlineStyleEquals": {
            const el = getEl(doc, t.selector);
            if (!el) return false;
            // inline style -> element.style.getPropertyValue(prop)
            const current = normalizeSimple(el.style.getPropertyValue(t.prop));
            const expected = normalizeSimple(String(t.equals));
            // Als het om kleuren of andere normaliseerbare props gaat, vergelijk ook computed-normalized varianten
            if (current === expected) return true;
            // fallback: computed-vergelijking als prop een kleur/px is
            const comp = getComputedStyleValue(doc, el, t.prop);
            const expComp = cssValueToComputed(doc, t.prop, t.equals);
            return comp === expComp;
        }
        case "computedStyleEquals": {
            const el = getEl(doc, t.selector);
            if (!el) return false;
            const comp = getComputedStyleValue(doc, el, t.prop);
            const expComp = cssValueToComputed(doc, t.prop, t.equals);
            return comp === expComp;
        }
        case "cssRuleExists": {
            const rule = findCssRule(doc, t.selector);
            if (!rule) return false;
            if (t.prop && typeof t.equals !== "undefined") {
                // Zoek declaratie binnen de rule
                const style = rule.style;
                const got = normalizeSimple(style.getPropertyValue(t.prop));
                const exp = cssValueToComputed(doc, t.prop, t.equals);
                return got === exp;
            }
            return true;
        }
        default:
            console.warn(`Onbekend HTML/CSS testtype: ${t.type}`);
            return false;
    }
}

async function runJsPreparation(win, code) {
    let error = null;
    withConsoleStub(win, () => {
        try {
            evalInIframe(win, code);
        } catch (e) {
            error = e;
        }
    });
    return error;
}

async function runJsTest(win, t) {
    switch (t.type) {
        case "variableEquals": {
            const v = getVarFromIframe(win, t.name);
            return v === t.equals;
        }
        case "functionReturnEquals": {
            const result = callFunctionFromIframe(win, t.name, Array.isArray(t.args) ? t.args : []);
            return result === t.equals;
        }
        case "consoleOutputContains": {
            const hay = Array.isArray(win.__test_console) ? win.__test_console.join("\n") : "";
            return normalizeText(hay).includes(normalizeText(t.includes));
        }
        case "expressionTrue": {
            try {
                const ok = win.eval(`(function(){ try { return !!(${t.expr}); } catch(e){ return false; } })()`);
                return !!ok;
            } catch {
                return false;
            }
        }
        default:
            console.warn(`Onbekend JS testtype: ${t.type}`);
            return false;
    }
}

// ---------- Public API ----------

// in validate.js
export async function runAllTests({ lesson, step, code, iframeRef }) {
    try {
        const iframe = iframeRef?.current;
        const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
        const win = iframe?.contentWindow;

        if (!doc || !win) {
            // iframe nog niet klaar of sandbox blokkeert → rustig falen, geen throw
            return (step.tests || []).map(t => ({ label: t.label || t.type, pass: false }));
        }

        // heel even wachten zodat DOM/CSS staat
        await new Promise(res => setTimeout(res, 30));

        const tests = Array.isArray(step.tests) ? step.tests : [];
        const results = [];

        if (lesson.language === "javascript") {
            // JS klaarzetten (try/catch binnenin)
            try { win.eval(code); } catch (e) {
                results.push({ label: "Runtime error", pass: false });
            }
            for (const t of tests) {
                let pass = false;
                try {
                    if (t.type === "consoleOutputContains") {
                        // voeg optioneel console-stub toe
                    } else if (t.type === "variableEquals") {
                        const v = win.eval(`(function(){ try { return ${t.name}; } catch(e){ return undefined; } })()`);
                        pass = v === t.equals;
                    } else if (t.type === "functionReturnEquals") {
                        const fn = win.eval(`(function(){ try { return ${t.name}; } catch(e){ return undefined; } })()`);
                        pass = typeof fn === "function" && fn(...(t.args || [])) === t.equals;
                    } else if (t.type === "expressionTrue") {
                        pass = !!win.eval(`(function(){ try { return !!(${t.expr}); } catch(e){ return false; } })()`);
                    }
                } catch { }
                results.push({ label: t.label || t.type, pass });
            }
            return results;
        }

        // HTML/CSS
        const norm = s => String(s ?? "").replace(/\s+/g, " ").trim().toLowerCase();

        for (const t of tests) {
            let pass = false;
            try {
                if (t.type === "selectorExists") {
                    pass = !!doc.querySelector(t.selector);
                } else if (t.type === "textContains") {
                    const el = doc.querySelector(t.selector);
                    pass = !!el && norm(el.textContent).includes(norm(t.includes));
                } else if (t.type === "computedStyleEquals") {
                    const el = doc.querySelector(t.selector);
                    if (el) {
                        const got = doc.defaultView.getComputedStyle(el).getPropertyValue(t.prop).trim().toLowerCase();
                        // expected normaliseren door even via een temp element te laten berekenen
                        const tmp = doc.createElement("div");
                        tmp.style.setProperty(t.prop, String(t.equals));
                        tmp.style.position = "absolute";
                        tmp.style.visibility = "hidden";
                        doc.body.appendChild(tmp);
                        const want = doc.defaultView.getComputedStyle(tmp).getPropertyValue(t.prop).trim().toLowerCase();
                        tmp.remove();
                        pass = got === want;
                    }
                } else if (t.type === "cssRuleExists") {
                    // optioneel: loop door doc.styleSheets → vergt allow-same-origin
                    let found = false;
                    try {
                        for (const sheet of Array.from(doc.styleSheets)) {
                            for (const rule of Array.from(sheet.cssRules || [])) {
                                if (rule.selectorText && rule.selectorText.trim() === t.selector.trim()) {
                                    if (t.prop && typeof t.equals !== "undefined") {
                                        const got = (rule.style.getPropertyValue(t.prop) || "").trim().toLowerCase();
                                        // normaliseer expected via temp element:
                                        const tmp = doc.createElement("div");
                                        tmp.style.setProperty(t.prop, String(t.equals));
                                        tmp.style.position = "absolute";
                                        tmp.style.visibility = "hidden";
                                        doc.body.appendChild(tmp);
                                        const want = doc.defaultView.getComputedStyle(tmp).getPropertyValue(t.prop).trim().toLowerCase();
                                        tmp.remove();
                                        found = got === want;
                                    } else {
                                        found = true;
                                    }
                                }
                            }
                        }
                    } catch { found = false; }
                    pass = found;
                }
            } catch { pass = false; }
            results.push({ label: t.label || t.type, pass });
        }
        return results;

    } catch {
        // absolute laatste vangnet: geef nette output terug ipv throw
        const tests = Array.isArray(step?.tests) ? step.tests : [];
        return tests.map(t => ({ label: t.label || t.type, pass: false }));
    }
}
