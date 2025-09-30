export const LESSON = {
    id: "htmlcss-intro",
    title: "HTML & CSS Trainer",
    language: "htmlcss",
    steps: [
        {
            id: "html1",
            title: "Maak een heading",
            contentHtml: "<p>Maak een &lt;h1&gt; met de tekst 'Interpol dossier'.</p>",
            starter: { html: "<body>\n<!-- TODO: voeg h1 toe -->\n</body>", css: "" },
            tests: [
                { type: "selectorExists", selector: "h1", label: "<h1> bestaat" },
                { type: "textContains", selector: "h1", includes: "Interpol dossier", label: "Tekst is juist" },
            ],
        },
    ],
};
