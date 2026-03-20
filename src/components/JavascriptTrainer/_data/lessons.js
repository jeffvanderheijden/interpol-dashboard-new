export const LESSON = {
    id: "js-intro",
    title: "JavaScript Trainer",
    language: "javascript",
    steps: [
        {
            id: "js1",
            title: "Gebruik console.log",
            contentHtml: "<p>Log de tekst <code>'Interpol training gestart'</code> naar de console.</p>",
            starter: { js: "// Log de juiste tekst naar de console\n" },
            tests: [
                {
                    type: "consoleOutputContains",
                    includes: "Interpol training gestart",
                    label: "Tekst wordt gelogd",
                },
            ],
        },

        {
            id: "js2",
            title: "Maak een variabele",
            contentHtml: "<p>Maak een variabele <code>agentName</code> met de waarde <code>'Kevin'</code>.</p>",
            starter: { js: "// Maak hier de variabele agentName\n" },
            tests: [
                {
                    type: "variableEquals",
                    name: "agentName",
                    value: "Kevin",
                    label: "Variabele bestaat en heeft de juiste waarde",
                },
            ],
        },

        {
            id: "js3",
            title: "Gebruik een variabele in console.log",
            contentHtml: "<p>Gebruik <code>console.log</code> om de tekst <code>Agent Kevin meldt zich</code> te tonen. Gebruik hierbij de variabele <code>agentName</code>.</p>",
            starter: { js: "let agentName = 'Kevin';\n// Log hier de juiste zin met agentName\n" },
            tests: [
                {
                    type: "consoleOutputContains",
                    includes: "Agent Kevin meldt zich",
                    label: "Logtekst klopt",
                },
            ],
        },

        {
            id: "js4",
            title: "Maak een getalvariabele",
            contentHtml: "<p>Maak een variabele <code>codeLevel</code> met de waarde <code>7</code>.</p>",
            starter: { js: "// Maak hier de variabele codeLevel\n" },
            tests: [
                {
                    type: "variableEquals",
                    name: "codeLevel",
                    value: 7,
                    label: "Getalvariabele klopt",
                },
            ],
        },

        {
            id: "js5",
            title: "Reken met variabelen",
            contentHtml: "<p>Maak een nieuwe variabele <code>nextLevel</code> die gelijk is aan <code>codeLevel + 1</code>.</p>",
            starter: { js: "let codeLevel = 7;\n// Maak hier nextLevel\n" },
            tests: [
                {
                    type: "variableEquals",
                    name: "nextLevel",
                    value: 8,
                    label: "Optelling is juist",
                },
            ],
        },

        {
            id: "js6",
            title: "Gebruik een if-statement",
            contentHtml: "<p>Controleer of <code>codeLevel &gt; 5</code>. Log dan <code>'Toegang verleend'</code>.</p>",
            starter: { js: "let codeLevel = 7;\n// Gebruik hier een if-statement\n" },
            tests: [
                {
                    type: "consoleOutputContains",
                    includes: "Toegang verleend",
                    label: "Voorwaarde werkt",
                },
            ],
        },

        {
            id: "js7",
            title: "Werk met een array",
            contentHtml: "<p>Maak een array <code>suspects</code> met de namen <code>'Kevin'</code>, <code>'Aisha'</code> en <code>'Daan'</code>.</p>",
            starter: { js: "// Maak hier de array suspects\n" },
            tests: [
                {
                    type: "arrayIncludes",
                    name: "suspects",
                    value: "Kevin",
                    label: "Array bevat Kevin",
                },
                {
                    type: "arrayIncludes",
                    name: "suspects",
                    value: "Aisha",
                    label: "Array bevat Aisha",
                },
                {
                    type: "arrayIncludes",
                    name: "suspects",
                    value: "Daan",
                    label: "Array bevat Daan",
                },
            ],
        },

        {
            id: "js8",
            title: "Lees een array-item uit",
            contentHtml: "<p>Log het eerste element uit de array <code>suspects</code>.</p>",
            starter: { js: "let suspects = ['Kevin', 'Aisha', 'Daan'];\n// Log hier het eerste element\n" },
            tests: [
                {
                    type: "consoleOutputContains",
                    includes: "Kevin",
                    label: "Eerste array-item wordt gelogd",
                },
            ],
        },

        {
            id: "js9",
            title: "Gebruik een for-loop",
            contentHtml: "<p>Gebruik een <code>for</code>-loop om alle namen uit <code>suspects</code> te loggen.</p>",
            starter: { js: "let suspects = ['Kevin', 'Aisha', 'Daan'];\n// Gebruik hier een for-loop\n" },
            tests: [
                {
                    type: "consoleOutputContains",
                    includes: "Kevin",
                    label: "Kevin wordt gelogd",
                },
                {
                    type: "consoleOutputContains",
                    includes: "Aisha",
                    label: "Aisha wordt gelogd",
                },
                {
                    type: "consoleOutputContains",
                    includes: "Daan",
                    label: "Daan wordt gelogd",
                },
            ],
        },

        {
            id: "js10",
            title: "Maak een functie",
            contentHtml: "<p>Maak een functie <code>greetAgent(name)</code> die <code>'Welkom, ' + name</code> retourneert.</p>",
            starter: { js: "// Maak hier de functie greetAgent\n" },
            tests: [
                {
                    type: "functionReturns",
                    name: "greetAgent",
                    args: ["Aisha"],
                    value: "Welkom, Aisha",
                    label: "Functie retourneert de juiste tekst",
                },
            ],
        },

        {
            id: "js11",
            title: "Gebruik een functie",
            contentHtml: "<p>Roep de functie <code>greetAgent</code> aan met de naam <code>'Kevin'</code> en log het resultaat.</p>",
            starter: {
                js: "function greetAgent(name) {\n  return 'Welkom, ' + name;\n}\n\n// Roep de functie aan en log het resultaat\n",
            },
            tests: [
                {
                    type: "consoleOutputContains",
                    includes: "Welkom, Kevin",
                    label: "Functie wordt correct gebruikt",
                },
            ],
        },

        {
            id: "js12",
            title: "Werk met een object",
            contentHtml: "<p>Maak een object <code>agent</code> met de eigenschappen <code>name: 'Kevin'</code> en <code>rank: 'Junior'</code>.</p>",
            starter: { js: "// Maak hier het object agent\n" },
            tests: [
                {
                    type: "objectPropertyEquals",
                    name: "agent",
                    property: "name",
                    value: "Kevin",
                    label: "Naam in object klopt",
                },
                {
                    type: "objectPropertyEquals",
                    name: "agent",
                    property: "rank",
                    value: "Junior",
                    label: "Rang in object klopt",
                },
            ],
        },

        {
            id: "js13",
            title: "Lees objecteigenschappen uit",
            contentHtml: "<p>Log de tekst <code>Agent Kevin heeft rang Junior</code> met behulp van het object <code>agent</code>.</p>",
            starter: {
                js: "let agent = { name: 'Kevin', rank: 'Junior' };\n// Log hier de juiste zin met het object\n",
            },
            tests: [
                {
                    type: "consoleOutputContains",
                    includes: "Agent Kevin heeft rang Junior",
                    label: "Objecteigenschappen correct gebruikt",
                },
            ],
        },

        {
            id: "js14",
            title: "Gebruik return in een functie",
            contentHtml: "<p>Maak een functie <code>double(x)</code> die het dubbele van een getal retourneert.</p>",
            starter: { js: "// Maak hier de functie double\n" },
            tests: [
                {
                    type: "functionReturns",
                    name: "double",
                    args: [4],
                    value: 8,
                    label: "double(4) geeft 8 terug",
                },
                {
                    type: "functionReturns",
                    name: "double",
                    args: [10],
                    value: 20,
                    label: "double(10) geeft 20 terug",
                },
            ],
        },

        {
            id: "js15",
            title: "Gebruik Math.random",
            contentHtml: "<p>Maak een variabele <code>randomCode</code> met een willekeurig getal uit <code>Math.random()</code>.</p>",
            starter: { js: "// Maak hier randomCode met Math.random()\n" },
            tests: [
                {
                    type: "variableBetween",
                    name: "randomCode",
                    min: 0,
                    max: 1,
                    label: "Willekeurig getal is aangemaakt",
                },
            ],
        },

        {
            id: "js16",
            title: "Pas tekst aan in de DOM",
            contentHtml: "<p>Verander met JavaScript de tekst van het <code>&lt;h1&gt;</code>-element naar <code>'Interpol actief'</code>.</p>",
            starter: {
                html: "<h1>Placeholder</h1>",
                js: "// Pas hier de tekst van de h1 aan\n",
            },
            tests: [
                {
                    type: "textContains",
                    selector: "h1",
                    includes: "Interpol actief",
                    label: "Tekst van h1 is aangepast",
                },
            ],
        },

        {
            id: "js17",
            title: "Voeg een nieuw element toe",
            contentHtml: "<p>Maak met JavaScript een nieuw <code>&lt;p&gt;</code>-element met de tekst <code>'Agent online'</code> en voeg het toe aan de pagina.</p>",
            starter: {
                html: "<main></main>",
                js: "// Maak hier een p-element en voeg het toe aan de pagina\n",
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: "p",
                    label: "Er is een p-element toegevoegd",
                },
                {
                    type: "textContains",
                    selector: "p",
                    includes: "Agent online",
                    label: "Tekst van p-element klopt",
                },
            ],
        },

        {
            id: "js18",
            title: "Gebruik een click event",
            contentHtml: "<p>Voeg een click-event toe aan de knop die <code>'Knop geklikt'</code> logt in de console.</p>",
            starter: {
                html: "<button id='btn'>Klik mij</button>",
                js: "// Voeg hier een click-event toe aan de knop\n",
            },
            tests: [
                {
                    type: "eventTriggered",
                    selector: "#btn",
                    event: "click",
                    consoleIncludes: "Knop geklikt",
                    label: "Click-event werkt",
                },
            ],
        },

        {
            id: "js19",
            title: "Verander stijl met JavaScript",
            contentHtml: "<p>Laat bij het klikken op de knop de achtergrondkleur van <code>body</code> veranderen naar <code>black</code>.</p>",
            starter: {
                html: "<button id='btn'>Verander kleur</button>",
                js: "// Verander bij een klik de achtergrondkleur van de body\n",
            },
            tests: [
                {
                    type: "eventTriggered",
                    selector: "#btn",
                    event: "click",
                    styleEquals: {
                        selector: "body",
                        property: "background-color",
                        value: "black",
                    },
                    label: "Achtergrondkleur verandert na klik",
                },
            ],
        },

        {
            id: "js20",
            title: "Gebruik setTimeout",
            contentHtml: "<p>Gebruik <code>setTimeout</code> om na 2 seconden <code>'Missie voltooid'</code> te loggen.</p>",
            starter: {
                js: "// Gebruik hier setTimeout\n",
            },
            tests: [
                {
                    type: "delayedConsoleOutputContains",
                    includes: "Missie voltooid",
                    delay: 2000,
                    label: "Bericht verschijnt na vertraging",
                },
            ],
        },
    ],
};