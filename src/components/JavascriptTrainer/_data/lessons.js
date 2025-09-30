export const LESSON = {
    id: "javascript-intro",
    title: "JavaScript Trainer",
    language: "javascript",
    steps: [
        {
            id: "js1",
            title: "Maak een variabele",
            contentHtml: "<p>Maak een variabele <code>let name = 'Interpol'</code> en log die naar de console.</p>",
            starter: "// TODO: schrijf je code hier",
            tests: [
                { type: "variableEquals", name: "name", equals: "Interpol", label: "Variable 'name' heeft juiste waarde" },
                { type: "consoleOutputContains", includes: "Interpol", label: "Console log bevat Interpol" },
            ],
        },
    ],
};
