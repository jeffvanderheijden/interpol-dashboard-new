export const LESSON = {
    id: "js-intro",
    title: "JavaScript Trainer",
    language: "javascript",
    steps: [
        // 1
        {
            id: "js1",
            title: "Gebruik console.log",
            contentHtml: "<p>Log de tekst <code>'Interpol training gestart'</code> naar de console.</p>",
            starter: { js: "// TODO: log de tekst\n" },
            tests: [
                { type: "consoleContains", includes: "Interpol training gestart", label: "Tekst wordt gelogd" },
            ],
        },
        // 2
        {
            id: "js2",
            title: "Maak een variabele",
            contentHtml: "<p>Maak een variabele <code>agentName</code> met de waarde <code>'Kevin'</code>.</p>",
            starter: { js: "// TODO: maak variabele\n" },
            tests: [
                { type: "variableEquals", name: "agentName", value: "Kevin", label: "Variabele bestaat en is juist" },
            ],
        },
        // 3
        {
            id: "js3",
            title: "Gebruik string interpolatie",
            contentHtml: "<p>Gebruik <code>console.log</code> om de tekst <code>Agent Kevin meld zich</code> te tonen, gebruik de variabele <code>agentName</code>.</p>",
            starter: { js: "let agentName = 'Kevin';\n// TODO: log met variabele\n" },
            tests: [
                { type: "consoleContains", includes: "Agent Kevin meld zich", label: "Logtekst klopt" },
            ],
        },
        // 4
        {
            id: "js4",
            title: "Maak een getal-variabele",
            contentHtml: "<p>Maak een variabele <code>codeLevel</code> met waarde <code>7</code>.</p>",
            starter: { js: "// TODO: maak getal-variabele\n" },
            tests: [
                { type: "variableEquals", name: "codeLevel", value: 7, label: "Getal klopt" },
            ],
        },
        // 5
        {
            id: "js5",
            title: "Reken met variabelen",
            contentHtml: "<p>Maak een nieuwe variabele <code>nextLevel</code> die <code>codeLevel + 1</code> bevat.</p>",
            starter: { js: "let codeLevel = 7;\n// TODO: maak nextLevel\n" },
            tests: [
                { type: "variableEquals", name: "nextLevel", value: 8, label: "Optelling juist" },
            ],
        },
        // 6
        {
            id: "js6",
            title: "Gebruik een if-statement",
            contentHtml: "<p>Controleer of <code>codeLevel &gt; 5</code> en log <code>'Toegang verleend'</code> als dat zo is.</p>",
            starter: { js: "let codeLevel = 7;\n// TODO: gebruik if\n" },
            tests: [
                { type: "consoleContains", includes: "Toegang verleend", label: "Voorwaarde klopt" },
            ],
        },
        // 7
        {
            id: "js7",
            title: "Gebruik een array",
            contentHtml: "<p>Maak een array <code>suspects</code> met de namen <code>'Kevin'</code>, <code>'Aisha'</code> en <code>'Daan'</code>.</p>",
            starter: { js: "// TODO: maak array\n" },
            tests: [
                { type: "arrayIncludes", name: "suspects", value: "Aisha", label: "Array bevat namen" },
            ],
        },
        // 8
        {
            id: "js8",
            title: "Log het eerste element",
            contentHtml: "<p>Log het eerste element van de array <code>suspects</code>.</p>",
            starter: { js: "let suspects = ['Kevin','Aisha','Daan'];\n// TODO: log eerste\n" },
            tests: [
                { type: "consoleContains", includes: "Kevin", label: "Eerste naam gelogd" },
            ],
        },
        // 9
        {
            id: "js9",
            title: "Gebruik een for-loop",
            contentHtml: "<p>Gebruik een <code>for</code>-loop om alle namen in <code>suspects</code> te loggen.</p>",
            starter: { js: "let suspects = ['Kevin','Aisha','Daan'];\n// TODO: loop\n" },
            tests: [
                { type: "consoleContains", includes: "Aisha", label: "Loop werkt" },
                { type: "consoleContains", includes: "Daan", label: "Alle namen gelogd" },
            ],
        },
        // 10
        {
            id: "js10",
            title: "Maak een functie",
            contentHtml: "<p>Maak een functie <code>greetAgent(name)</code> die <code>'Welkom, '</code> + name logt.</p>",
            starter: { js: "// TODO: maak functie\n" },
            tests: [
                { type: "functionReturns", name: "greetAgent", args: ["Aisha"], value: undefined, label: "Functie bestaat" },
                { type: "consoleContains", includes: "Welkom, Aisha", label: "Output klopt" },
            ],
        },
        // 11
        {
            id: "js11",
            title: "Gebruik return",
            contentHtml: "<p>Pas de functie aan zodat deze de tekst <code>'Welkom, '</code> + name <em>retourneert</em> in plaats van logt.</p>",
            starter: { js: "function greetAgent(name) {\n  // TODO: return in plaats van log\n}" },
            tests: [
                { type: "functionReturns", name: "greetAgent", args: ["Kevin"], value: "Welkom, Kevin", label: "Return juist" },
            ],
        },
        // 12
        {
            id: "js12",
            title: "Gebruik een object",
            contentHtml: "<p>Maak een object <code>agent</code> met eigenschappen <code>name: 'Kevin'</code> en <code>rank: 'Junior'</code>.</p>",
            starter: { js: "// TODO: maak object\n" },
            tests: [
                { type: "objectPropertyEquals", name: "agent", property: "rank", value: "Junior", label: "Object juist" },
            ],
        },
        // 13
        {
            id: "js13",
            title: "Toegang tot objecteigenschap",
            contentHtml: "<p>Log de tekst <code>Agent Kevin heeft rang Junior</code> met behulp van het object.</p>",
            starter: { js: "let agent = { name: 'Kevin', rank: 'Junior' };\n// TODO: log tekst\n" },
            tests: [
                { type: "consoleContains", includes: "Kevin", label: "Naam aanwezig" },
                { type: "consoleContains", includes: "Junior", label: "Rang aanwezig" },
            ],
        },
        // 14
        {
            id: "js14",
            title: "Gebruik een functie met returnwaarde",
            contentHtml: "<p>Maak een functie <code>double(x)</code> die het dubbele van het getal teruggeeft.</p>",
            starter: { js: "// TODO: functie double\n" },
            tests: [
                { type: "functionReturns", name: "double", args: [4], value: 8, label: "Functie werkt" },
            ],
        },
        // 15
        {
            id: "js15",
            title: "Gebruik Math.random",
            contentHtml: "<p>Maak een variabele <code>randomCode</code> die een willekeurig getal bevat tussen 0 en 1.</p>",
            starter: { js: "// TODO: gebruik Math.random()\n" },
            tests: [
                { type: "variableBetween", name: "randomCode", min: 0, max: 1, label: "Willekeurig getal gegenereerd" },
            ],
        },
        // 16
        {
            id: "js16",
            title: "DOM-manipulatie: tekst aanpassen",
            contentHtml: "<p>Verander met JavaScript de tekst van een &lt;h1&gt; element naar <code>'Interpol actief'</code>.</p>",
            starter: { html: "<h1>Placeholder</h1>", js: "// TODO: verander tekst\n" },
            tests: [
                { type: "textContains", selector: "h1", includes: "Interpol actief", label: "Tekst aangepast" },
            ],
        },
        // 17
        {
            id: "js17",
            title: "Voeg een nieuw element toe",
            contentHtml: "<p>Maak met JavaScript een &lt;p&gt; aan met de tekst <code>'Agent online'</code> en voeg deze toe aan de body.</p>",
            starter: { html: "<body></body>", js: "// TODO: maak element\n" },
            tests: [
                { type: "selectorExists", selector: "p", label: "<p> toegevoegd" },
                { type: "textContains", selector: "p", includes: "Agent online", label: "Tekst klopt" },
            ],
        },
        // 18
        {
            id: "js18",
            title: "Gebruik een click event",
            contentHtml: "<p>Voeg een event toe aan een knop die <code>'Knop geklikt'</code> logt.</p>",
            starter: { html: "<button id='btn'>Klik mij</button>", js: "// TODO: voeg event toe\n" },
            tests: [
                { type: "eventTriggered", selector: "#btn", event: "click", consoleIncludes: "Knop geklikt", label: "Event werkt" },
            ],
        },
        // 19
        {
            id: "js19",
            title: "Verander stijl met JS",
            contentHtml: "<p>Laat bij het klikken op de knop de achtergrondkleur van <code>body</code> veranderen naar zwart.</p>",
            starter: { html: "<button id='btn'>Verander kleur</button>", js: "// TODO: verander achtergrond\n" },
            tests: [
                { type: "eventTriggered", selector: "#btn", event: "click", styleEquals: { selector: "body", property: "background-color", value: "black" }, label: "Kleur verandert" },
            ],
        },
        // 20
        {
            id: "js20",
            title: "Gebruik setTimeout",
            contentHtml: "<p>Gebruik <code>setTimeout</code> om na 2 seconden <code>'Missie voltooid'</code> te loggen.</p>",
            starter: { js: "// TODO: gebruik setTimeout\n" },
            tests: [
                { type: "delayedConsoleContains", includes: "Missie voltooid", delay: 2000, label: "Tijdelijke actie werkt" },
            ],
        },
    ],
};
