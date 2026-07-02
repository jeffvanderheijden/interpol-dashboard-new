const JS_CONSOLE_RESOURCES = [
    {
        kind: "Tutorial",
        title: "MDN: console.log()",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/console/log_static",
    },
    {
        kind: "Les",
        title: "web.dev: Learn JavaScript",
        href: "https://web.dev/learn/javascript/welcome",
    },
    {
        kind: "Video",
        title: "Scrimba: Learn JavaScript",
        href: "https://scrimba.com/learn-javascript-c0v?via=mdn",
    },
];

const JS_VARIABLE_RESOURCES = [
    {
        kind: "Tutorial",
        title: "MDN: Variables",
        href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables",
    },
    {
        kind: "Les",
        title: "web.dev: Learn JavaScript",
        href: "https://web.dev/learn/javascript/welcome",
    },
    {
        kind: "Video",
        title: "Scrimba: Learn JavaScript",
        href: "https://scrimba.com/learn-javascript-c0v?via=mdn",
    },
];

const JS_MATH_RESOURCES = [
    {
        kind: "Tutorial",
        title: "MDN: Numbers and operators",
        href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math",
    },
    {
        kind: "Les",
        title: "web.dev: Learn JavaScript",
        href: "https://web.dev/learn/javascript/welcome",
    },
    {
        kind: "Video",
        title: "Scrimba: Learn JavaScript",
        href: "https://scrimba.com/learn-javascript-c0v?via=mdn",
    },
];

const JS_CONDITIONAL_RESOURCES = [
    {
        kind: "Tutorial",
        title: "MDN: Conditionals",
        href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals",
    },
    {
        kind: "Les",
        title: "web.dev: Learn JavaScript",
        href: "https://web.dev/learn/javascript/welcome",
    },
    {
        kind: "Video",
        title: "Scrimba: Learn JavaScript",
        href: "https://scrimba.com/learn-javascript-c0v?via=mdn",
    },
];

const JS_FUNCTION_RESOURCES = [
    {
        kind: "Tutorial",
        title: "MDN: Functions",
        href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions",
    },
    {
        kind: "Les",
        title: "web.dev: Learn JavaScript",
        href: "https://web.dev/learn/javascript/welcome",
    },
    {
        kind: "Video",
        title: "Scrimba: Learn JavaScript",
        href: "https://scrimba.com/learn-javascript-c0v?via=mdn",
    },
];

export const LESSON = {
    id: "javascript-signal-analysis",
    badge: "Signal Analysis",
    title: "JavaScript Ops Console",
    subtitle:
        "Een rustige eerste kennismaking met code binnen de Interpol trainingsomgeving.",
    briefing:
        "Je werkt als trainee in een veilige oefenconsole. De opdrachten beginnen heel klein: eerst tekst tonen, daarna variabelen gebruiken en pas aan het eind een eerste simpele functie schrijven.",
    statusLabel: "Basistraining",
    outcomeLabel: "Eerste console-briefing",
    language: "javascript",
    steps: [
        {
            id: "boot-sequence",
            title: "Schrijf een eerste bericht",
            objective: "Laat de console zien dat de training is gestart.",
            contentHtml: `
                <p>Gebruik <code>console.log()</code> om exact deze tekst te tonen:</p>
                <pre><code>Training gestart</code></pre>
            `,
            hint: "Typ bijvoorbeeld <code>console.log(\"...\")</code>.",
            resources: JS_CONSOLE_RESOURCES,
            starter: {
                js: `// Schrijf hier je eerste console.log\n`,
            },
            tests: [
                {
                    type: "consoleIncludes",
                    includes: "Training gestart",
                    label: "De juiste tekst wordt gelogd",
                },
            ],
        },
        {
            id: "agent-name",
            title: "Maak een variabele",
            objective: "Sla een naam op in een variabele.",
            contentHtml: `
                <p>Maak een variabele <code>agentName</code> met de waarde <code>"Sam"</code>.</p>
            `,
            hint: "Gebruik <code>let</code> of <code>const</code>.",
            resources: JS_VARIABLE_RESOURCES,
            starter: {
                js: `// Maak hier de variabele agentName\n`,
            },
            tests: [
                {
                    type: "variableEquals",
                    name: "agentName",
                    value: "Sam",
                    label: "Variabele agentName klopt",
                },
            ],
        },
        {
            id: "agent-log",
            title: "Gebruik een variabele in de console",
            objective: "Toon een bericht met behulp van de variabele.",
            contentHtml: `
                <p>Gebruik de variabele <code>agentName</code> en log deze tekst:</p>
                <pre><code>Agent Sam meldt zich</code></pre>
            `,
            hint: "Je mag tekst en een variabele samen in <code>console.log()</code> gebruiken.",
            resources: JS_VARIABLE_RESOURCES,
            starter: {
                js: `let agentName = "Sam";

// Log hier de zin met agentName
`,
            },
            tests: [
                {
                    type: "consoleIncludes",
                    includes: "Agent Sam meldt zich",
                    label: "De zin met agentName klopt",
                },
            ],
        },
        {
            id: "score-number",
            title: "Werk met een getal",
            objective: "Sla een score op en maak daarna een nieuwe score.",
            contentHtml: `
                <p>Maak eerst een variabele <code>score</code> met waarde <code>5</code>.</p>
                <p>Maak daarna een variabele <code>nextScore</code> met waarde <code>score + 1</code>.</p>
            `,
            hint: "De tweede variabele moet dus uitkomen op <code>6</code>.",
            resources: JS_MATH_RESOURCES,
            starter: {
                js: `// Maak hier score
// Maak hier nextScore
`,
            },
            tests: [
                {
                    type: "variableEquals",
                    name: "score",
                    value: 5,
                    label: "score is juist",
                },
                {
                    type: "variableEquals",
                    name: "nextScore",
                    value: 6,
                    label: "nextScore is juist",
                },
            ],
        },
        {
            id: "if-check",
            title: "Maak een simpele if",
            objective:
                "Controleer of een score hoog genoeg is en toon dan een bericht.",
            contentHtml: `
                <p>Gebruik een <code>if</code>-statement.</p>
                <p>Als <code>score</code> groter is dan <code>4</code>, log dan:</p>
                <pre><code>Toegang toegestaan</code></pre>
            `,
            hint: "De meegeleverde score is al hoog genoeg.",
            resources: JS_CONDITIONAL_RESOURCES,
            starter: {
                js: `let score = 5;

// Schrijf hier een if-statement
`,
            },
            tests: [
                {
                    type: "consoleIncludes",
                    includes: "Toegang toegestaan",
                    label: "Het if-statement werkt",
                },
            ],
        },
        {
            id: "first-function",
            title: "Schrijf je eerste functie",
            objective: "Maak een functie die een welkomstzin teruggeeft.",
            contentHtml: `
                <p>Maak een functie <code>sayHello(name)</code>.</p>
                <p>De functie moet deze tekst teruggeven:</p>
                <pre><code>Welkom agent Sam</code></pre>
                <p>Als de functie wordt aangeroepen met <code>"Sam"</code>.</p>
            `,
            hint: "Gebruik <code>return</code> en zet <code>name</code> in de zin.",
            resources: JS_FUNCTION_RESOURCES,
            starter: {
                js: `function sayHello(name) {
  // Geef hier een tekst terug
}
`,
            },
            tests: [
                {
                    type: "functionReturns",
                    name: "sayHello",
                    args: ["Sam"],
                    value: "Welkom agent Sam",
                    label: "De functie geeft de juiste tekst terug",
                },
            ],
        },
        {
            id: "final-briefing",
            title: "Rond de briefing af",
            objective:
                "Gebruik je functie en log het eindbericht in de console.",
            contentHtml: `
                <p>Gebruik de functie <code>sayHello</code> met de naam <code>"Sam"</code>.</p>
                <p>Log daarna ook nog deze tweede regel:</p>
                <pre><code>Einde basistraining</code></pre>
            `,
            hint: "Je moet dus twee berichten in de console krijgen.",
            resources: JS_FUNCTION_RESOURCES,
            starter: {
                js: `function sayHello(name) {
  return "Welkom agent " + name;
}

// Log hier eerst de uitkomst van sayHello("Sam")
// Log daarna de tweede regel
`,
            },
            tests: [
                {
                    type: "consoleIncludes",
                    includes: "Welkom agent Sam",
                    label: "Welkomstbericht gelogd",
                },
                {
                    type: "consoleIncludes",
                    includes: "Einde basistraining",
                    label: "Eindregel gelogd",
                },
            ],
        },
    ],
};
