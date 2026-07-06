function normalizeText(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}

function normalizeTestType(type) {
    const aliases = {
        attrEquals: "attributeEquals",
        attributeEquals: "attributeEquals",
        computedStyleEquals: "computedStyleEquals",
        consoleOutputContains: "consoleIncludes",
        cssPropertyEquals: "computedStyleEquals",
        cssRuleExists: "cssRuleEquals",
        elementCount: "elementCount",
        functionReturnEquals: "functionReturns",
        functionReturns: "functionReturns",
        hasCount: "elementCount",
        objectPropertyEquals: "objectPropertyEquals",
        selectorExists: "selectorExists",
        textContains: "textIncludes",
        variableEquals: "variableEquals",
    };

    return aliases[type] || type;
}

function getExpectedValue(test, preferred, fallback) {
    if (typeof test[preferred] !== "undefined") {
        return test[preferred];
    }

    return test[fallback];
}

function deepEqual(left, right) {
    return JSON.stringify(left) === JSON.stringify(right);
}

function getJsBindingNames(tests) {
    return [...new Set(
        tests
            .filter((test) => {
                const type = normalizeTestType(test.type);

                return [
                    "variableEquals",
                    "objectPropertyEquals",
                    "functionReturns",
                ].includes(type);
            })
            .map((test) => test.name)
            .filter(Boolean)
    )];
}

function buildJsRunner(code, tests, win) {
    const bindingNames = getJsBindingNames(tests);
    const expressionTests = tests
        .map((test, index) => ({
            key: `__expr_${index}`,
            expr: test.expr,
            type: normalizeTestType(test.type),
        }))
        .filter((test) => test.type === "expressionTrue" && test.expr);

    const bindingsExport = bindingNames
        .map(
            (name) => `
                __trainerBindings[${JSON.stringify(name)}] = (() => {
                    try {
                        return eval(${JSON.stringify(name)});
                    } catch (error) {
                        return undefined;
                    }
                })();
            `
        )
        .join("\n");

    const expressionsExport = expressionTests
        .map(
            ({ key, expr }) => `
                __trainerExpressions[${JSON.stringify(key)}] = (() => {
                    try {
                        return !!(${expr});
                    } catch (error) {
                        return false;
                    }
                })();
            `
        )
        .join("\n");

    return new win.Function(
        "console",
        `
            "use strict";
            ${code}

            const __trainerBindings = {};
            const __trainerExpressions = {};

            ${bindingsExport}
            ${expressionsExport}

            return {
                bindings: __trainerBindings,
                expressions: __trainerExpressions,
            };
        `
    );
}

function getNormalizedCssValue(doc, property, value) {
    const probe = doc.createElement("div");
    probe.style.setProperty(property, String(value));
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    doc.body.appendChild(probe);

    const normalized = doc.defaultView
        .getComputedStyle(probe)
        .getPropertyValue(property)
        .trim()
        .toLowerCase();

    probe.remove();

    return normalized;
}

async function runJavascriptTests(win, tests, code) {
    const results = [];
    let execution = {
        bindings: {},
        expressions: {},
    };

    if (typeof win.__trainerResetConsole === "function") {
        win.__trainerResetConsole();
    }

    let runtimeError = null;

    try {
        const runner = buildJsRunner(code, tests, win);
        execution = runner(win.console);
    } catch (error) {
        runtimeError = error;

        if (typeof win.__trainerPushError === "function") {
            win.__trainerPushError(error.message);
        }
    }

    for (const test of tests) {
        const normalizedType = normalizeTestType(test.type);
        let pass = false;

        try {
            switch (normalizedType) {
                case "consoleIncludes": {
                    const logs =
                        typeof win.__trainerGetLogs === "function"
                            ? win.__trainerGetLogs()
                            : [];

                    pass = logs.some((line) =>
                        normalizeText(line).includes(
                            normalizeText(test.includes)
                        )
                    );
                    break;
                }

                case "variableEquals": {
                    const value = execution.bindings?.[test.name];
                    const expected = getExpectedValue(test, "value", "equals");
                    pass = deepEqual(value, expected);
                    break;
                }

                case "objectPropertyEquals": {
                    const objectValue = execution.bindings?.[test.name];
                    const expected = getExpectedValue(test, "value", "equals");

                    pass =
                        objectValue !== null &&
                        typeof objectValue === "object" &&
                        deepEqual(objectValue?.[test.property], expected);
                    break;
                }

                case "functionReturns": {
                    const fn = execution.bindings?.[test.name];
                    const expected = getExpectedValue(test, "value", "equals");

                    pass =
                        typeof fn === "function" &&
                        deepEqual(fn(...(test.args || [])), expected);
                    break;
                }

                case "expressionTrue": {
                    const expressionIndex = tests.indexOf(test);
                    pass = !!execution.expressions?.[`__expr_${expressionIndex}`];
                    break;
                }

                default:
                    pass = false;
                    break;
            }
        } catch {
            pass = false;
        }

        results.push({ label: test.label || test.type, pass });
    }

    if (runtimeError) {
        results.unshift({
            label: `Runtime error: ${runtimeError.message}`,
            pass: false,
        });
    }

    return results;
}

async function runHtmlCssTests(doc, tests) {
    const results = [];

    for (const test of tests) {
        const normalizedType = normalizeTestType(test.type);
        let pass = false;

        try {
            switch (normalizedType) {
                case "selectorExists": {
                    pass = !!doc.querySelector(test.selector);
                    break;
                }

                case "elementCount": {
                    const expected = Number(
                        getExpectedValue(test, "value", "count")
                    );

                    pass =
                        doc.querySelectorAll(test.selector).length === expected;
                    break;
                }

                case "textIncludes": {
                    const element = doc.querySelector(test.selector);

                    pass =
                        !!element &&
                        normalizeText(element.textContent).includes(
                            normalizeText(test.includes)
                        );
                    break;
                }

                case "attributeEquals": {
                    const element = doc.querySelector(test.selector);
                    const attribute =
                        test.attribute || test.attr || test.name;
                    const expected = getExpectedValue(test, "value", "equals");

                    pass =
                        !!element &&
                        normalizeText(element.getAttribute(attribute)) ===
                            normalizeText(expected);
                    break;
                }

                case "computedStyleEquals": {
                    const element = doc.querySelector(test.selector);
                    const property = test.property || test.prop;
                    const expected = getExpectedValue(test, "value", "equals");

                    if (element && property) {
                        const actual = doc.defaultView
                            .getComputedStyle(element)
                            .getPropertyValue(property)
                            .trim()
                            .toLowerCase();
                        const normalizedExpected = getNormalizedCssValue(
                            doc,
                            property,
                            expected
                        );

                        pass = actual === normalizedExpected;
                    }
                    break;
                }

                case "cssRuleEquals": {
                    const property = test.property || test.prop;
                    const expected = getExpectedValue(test, "value", "equals");
                    const normalizedExpected = property
                        ? getNormalizedCssValue(doc, property, expected)
                        : null;
                    let found = false;

                    for (const sheet of Array.from(doc.styleSheets)) {
                        for (const rule of Array.from(sheet.cssRules || [])) {
                            if (
                                rule.selectorText &&
                                normalizeText(rule.selectorText) ===
                                    normalizeText(test.selector)
                            ) {
                                if (!property) {
                                    found = true;
                                    break;
                                }

                                const actual = rule.style
                                    .getPropertyValue(property)
                                    .trim()
                                    .toLowerCase();

                                if (actual === normalizedExpected) {
                                    found = true;
                                    break;
                                }
                            }
                        }

                        if (found) {
                            break;
                        }
                    }

                    pass = found;
                    break;
                }

                default:
                    pass = false;
                    break;
            }
        } catch {
            pass = false;
        }

        results.push({ label: test.label || test.type, pass });
    }

    return results;
}

export async function runAllTests({ lesson, step, code, iframeRef }) {
    const iframe = iframeRef?.current;
    const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
    const win = iframe?.contentWindow;
    const tests = Array.isArray(step.tests) ? step.tests : [];

    if (!doc || !win) {
        return tests.map((test) => ({
            label: test.label || test.type,
            pass: false,
        }));
    }

    await new Promise((resolve) => setTimeout(resolve, 50));

    if (lesson.language === "javascript") {
        return runJavascriptTests(win, tests, String(code ?? ""));
    }

    return runHtmlCssTests(doc, tests);
}
