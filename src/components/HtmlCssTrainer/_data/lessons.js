export const LESSON = {
    id: "htmlcss-intro",
    title: "HTML & CSS Trainer",
    language: "htmlcss",
    steps: [
        // 1
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
        // 2
        {
            id: "html2",
            title: "Voeg een paragraaf toe",
            contentHtml: "<p>Voeg een &lt;p&gt; toe met de tekst: 'Geheim project – alleen voor Interpol agenten.'</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n<!-- TODO: voeg p toe -->\n</body>", css: "" },
            tests: [
                { type: "selectorExists", selector: "p", label: "<p> bestaat" },
                { type: "textContains", selector: "p", includes: "Geheim project", label: "Tekst is juist" },
            ],
        },
        // 3
        {
            id: "html3",
            title: "Voeg een afbeelding toe",
            contentHtml: "<p>Voeg een &lt;img&gt; toe met <code>src='agent.png'</code> en <code>alt='Interpol agent'</code>.</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n<p>Geheim project – alleen voor Interpol agenten.</p>\n<!-- TODO: voeg afbeelding toe -->\n</body>", css: "" },
            tests: [
                { type: "selectorExists", selector: "img", label: "<img> bestaat" },
                { type: "attributeEquals", selector: "img", attribute: "src", value: "agent.png", label: "Bron is juist" },
                { type: "attributeEquals", selector: "img", attribute: "alt", value: "Interpol agent", label: "Alt-tekst is juist" },
            ],
        },
        // 4
        {
            id: "html4",
            title: "Maak een lijst van verdachten",
            contentHtml: "<p>Voeg een &lt;ul&gt; toe met drie namen: Kevin, Aisha en Daan.</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n<!-- TODO: voeg ul toe -->\n</body>", css: "" },
            tests: [
                { type: "selectorExists", selector: "ul", label: "<ul> bestaat" },
                { type: "elementCount", selector: "ul li", value: 3, label: "Drie namen aanwezig" },
            ],
        },
        // 5
        {
            id: "html5",
            title: "Voeg een link toe",
            contentHtml: "<p>Voeg een link toe naar <code>https://www.interpol.int</code> met de tekst 'Officiële Interpol website'.</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n<!-- TODO: voeg link toe -->\n</body>", css: "" },
            tests: [
                { type: "selectorExists", selector: "a", label: "<a> bestaat" },
                { type: "attributeEquals", selector: "a", attribute: "href", value: "https://www.interpol.int", label: "Link correct" },
            ],
        },
        // 6
        {
            id: "html6",
            title: "Voeg een subkop toe",
            contentHtml: "<p>Voeg een &lt;h2&gt; toe met de tekst 'Verdachtenlijst'.</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n<!-- TODO: voeg h2 toe -->\n</body>", css: "" },
            tests: [
                { type: "selectorExists", selector: "h2", label: "<h2> bestaat" },
                { type: "textContains", selector: "h2", includes: "Verdachtenlijst", label: "Tekst klopt" },
            ],
        },
        // 7
        {
            id: "css1",
            title: "Maak de achtergrond donker",
            contentHtml: "<p>Gebruik <code>background-color: #222;</code> op de <code>body</code>.</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "body", property: "background-color", value: "#222", label: "Achtergrond is donker" },
            ],
        },
        // 8
        {
            id: "css2",
            title: "Kleur de tekst wit",
            contentHtml: "<p>Gebruik <code>color: white;</code> voor de tekst in <code>body</code>.</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n</body>", css: "body { background-color: #222; /* TODO */ }" },
            tests: [
                { type: "cssPropertyEquals", selector: "body", property: "color", value: "white", label: "Tekst is wit" },
            ],
        },
        // 9
        {
            id: "css3",
            title: "Maak de afbeelding rond",
            contentHtml: "<p>Gebruik <code>border-radius: 50%;</code> op de afbeelding.</p>",
            starter: { html: "<body>\n<img src='agent.png' alt='Interpol agent'>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "img", property: "border-radius", value: "50%", label: "Afbeelding is rond" },
            ],
        },
        // 10
        {
            id: "css4",
            title: "Centrale uitlijning",
            contentHtml: "<p>Zorg dat alle tekst in het midden staat met <code>text-align: center;</code> op <code>body</code>.</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n<p>Geheim project...</p>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "body", property: "text-align", value: "center", label: "Tekst gecentreerd" },
            ],
        },
        // 11
        {
            id: "css5",
            title: "Voeg een blauwe accentkleur toe",
            contentHtml: "<p>Geef de &lt;h1&gt; een blauwe kleur (#0099ff).</p>",
            starter: { html: "<body>\n<h1>Interpol dossier</h1>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "h1", property: "color", value: "#0099ff", label: "Titel is blauw" },
            ],
        },
        // 12
        {
            id: "css6",
            title: "Maak de lijst zonder bullets",
            contentHtml: "<p>Verwijder lijstpunten met <code>list-style: none;</code>.</p>",
            starter: { html: "<body>\n<ul><li>Kevin</li><li>Aisha</li><li>Daan</li></ul>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "ul", property: "list-style", value: "none", label: "Geen bullets" },
            ],
        },
        // 13
        {
            id: "css7",
            title: "Maak de afbeelding kleiner",
            contentHtml: "<p>Stel de breedte van de afbeelding in op 150px.</p>",
            starter: { html: "<body>\n<img src='agent.png'>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "img", property: "width", value: "150px", label: "Afbeelding 150px breed" },
            ],
        },
        // 14
        {
            id: "css8",
            title: "Voeg een rand toe aan de afbeelding",
            contentHtml: "<p>Gebruik <code>border: 2px solid white;</code>.</p>",
            starter: { html: "<body>\n<img src='agent.png'>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "img", property: "border", value: "2px solid white", label: "Rand toegevoegd" },
            ],
        },
        // 15
        {
            id: "html7",
            title: "Voeg een knop toe",
            contentHtml: "<p>Voeg een &lt;button&gt; toe met de tekst 'Bekijk dossier'.</p>",
            starter: { html: "<body>\n<!-- TODO -->\n</body>", css: "" },
            tests: [
                { type: "selectorExists", selector: "button", label: "Knop bestaat" },
                { type: "textContains", selector: "button", includes: "Bekijk dossier", label: "Tekst klopt" },
            ],
        },
        // 16
        {
            id: "css9",
            title: "Style de knop",
            contentHtml: "<p>Geef de knop een blauwe achtergrond (#0078d7) en witte tekst.</p>",
            starter: { html: "<body>\n<button>Bekijk dossier</button>\n</body>", css: "/* TODO */" },
            tests: [
                { type: "cssPropertyEquals", selector: "button", property: "background-color", value: "#0078d7", label: "Knop is blauw" },
                { type: "cssPropertyEquals", selector: "button", property: "color", value: "white", label: "Tekst wit" },
            ],
        },
        // 17
        {
            id: "css10",
            title: "Hover-effect op de knop",
            contentHtml: "<p>Laat de knop van kleur veranderen met <code>button:hover { background-color: #1490ff; }</code>.</p>",
            starter: { html: "<body>\n<button>Bekijk dossier</button>\n</body>", css: "button { background-color: #0078d7; color: white; }\n/* TODO: hover */" },
            tests: [
                { type: "cssPropertyEquals", selector: "button:hover", property: "background-color", value: "#1490ff", label: "Hoverkleur klopt" },
            ],
        },
        // 18
        {
            id: "css11",
            title: "Gebruik flexbox voor lay-out",
            contentHtml: "<p>Plaats afbeelding en lijst naast elkaar met <code>display: flex;</code> op een container.</p>",
            starter: {
                html: "<body>\n<div class='dossier-container'>\n  <img src='agent.png'>\n  <ul><li>Kevin</li><li>Aisha</li><li>Daan</li></ul>\n</div>\n</body>",
                css: "/* TODO */",
            },
            tests: [
                { type: "cssPropertyEquals", selector: ".dossier-container", property: "display", value: "flex", label: "Flexbox actief" },
            ],
        },
        // 19
        {
            id: "css12",
            title: "Voeg ruimte toe tussen items",
            contentHtml: "<p>Gebruik <code>gap: 20px;</code> binnen de flex-container.</p>",
            starter: {
                html: "<body>\n<div class='dossier-container'>\n  <img src='agent.png'>\n  <ul><li>Kevin</li><li>Aisha</li><li>Daan</li></ul>\n</div>\n</body>",
                css: ".dossier-container { display: flex; /* TODO */ }",
            },
            tests: [
                { type: "cssPropertyEquals", selector: ".dossier-container", property: "gap", value: "20px", label: "Ruimte toegevoegd" },
            ],
        },
        // 20
        {
            id: "css13",
            title: "Rond de training af",
            contentHtml: "<p>Voeg een afsluitende regel toe onderaan de pagina: &lt;p&gt;Training voltooid, agent.&lt;/p&gt; en geef deze tekst een groene kleur (#00ff99).</p>",
            starter: {
                html: "<body>\n<h1>Interpol dossier</h1>\n<!-- TODO: afsluitende regel -->\n</body>",
                css: "/* TODO: kleur voor afsluiter */",
            },
            tests: [
                { type: "selectorExists", selector: "p", label: "Paragraaf bestaat" },
                { type: "textContains", selector: "p", includes: "Training voltooid", label: "Tekst klopt" },
                { type: "cssPropertyEquals", selector: "p", property: "color", value: "#00ff99", label: "Kleur juist" },
            ],
        },
    ],
};
