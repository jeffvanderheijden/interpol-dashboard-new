const HTML_RESOURCES = [
    {
        kind: "Tutorial",
        title: "MDN: HTML basics",
        href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content",
    },
    {
        kind: "Les",
        title: "web.dev: Learn HTML",
        href: "https://web.dev/learn/html/welcome",
    },
    {
        kind: "Video",
        title: "Scrimba: Learn HTML and CSS",
        href: "https://scrimba.com/learn-html-and-css-c0p?via=mdn",
    },
];

const CSS_RESOURCES = [
    {
        kind: "Tutorial",
        title: "MDN: CSS basics",
        href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content",
    },
    {
        kind: "Les",
        title: "web.dev: Learn CSS",
        href: "https://web.dev/learn/css/welcome",
    },
    {
        kind: "Video",
        title: "Scrimba: Learn HTML and CSS",
        href: "https://scrimba.com/learn-html-and-css-c0p?via=mdn",
    },
];

const baseHtml = `<main class="profile-card">
  <h1>Welkom agent</h1>
  <p class="intro">Jij leert vandaag je eerste webpagina bouwen.</p>
  <ul class="task-list">
    <li>HTML leren</li>
    <li>CSS leren</li>
    <li>Samen oefenen</li>
  </ul>
  <button class="action-button">Start training</button>
</main>`;

const baseCss = `body {
  margin: 0;
  font-family: Arial, sans-serif;
}`;

export const LESSON = {
    id: "htmlcss-beginner-basics",
    badge: "Frontend Start",
    title: "HTML & CSS Starter",
    subtitle:
        "Een eerste rustige kennismaking met webpagina's bouwen.",
    briefing:
        "Je begint hier helemaal bij de basis. Eerst zet je tekst op de pagina met HTML. Daarna maak je die pagina stap voor stap netter met CSS.",
    statusLabel: "Beginnersopdracht",
    outcomeLabel: "Eerste profielkaart",
    language: "htmlcss",
    steps: [
        {
            id: "page-title",
            title: "Zet een titel op de pagina",
            objective:
                "Maak een grote titel zodat je meteen ziet waar de pagina over gaat.",
            contentHtml: `
                <p>Zet binnen <code>&lt;main class="profile-card"&gt;</code> een <code>&lt;h1&gt;</code> met exact deze tekst:</p>
                <pre><code>Welkom agent</code></pre>
            `,
            hint: "Een <code>&lt;h1&gt;</code> is een grote hoofdtitel.",
            resources: HTML_RESOURCES,
            starter: {
                html: `<main class="profile-card">
  <!-- Zet hier de titel -->
</main>`,
                css: baseCss,
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: ".profile-card h1",
                    label: "Er staat een h1 op de pagina",
                },
                {
                    type: "textIncludes",
                    selector: ".profile-card h1",
                    includes: "Welkom agent",
                    label: "De titeltekst klopt",
                },
            ],
        },
        {
            id: "page-intro",
            title: "Voeg een korte uitleg toe",
            objective:
                "Zet onder de titel een korte zin met uitleg voor de leerling.",
            contentHtml: `
                <p>Voeg onder de titel een paragraaf toe met class <code>intro</code>.</p>
                <p>De tekst moet zijn:</p>
                <pre><code>Jij leert vandaag je eerste webpagina bouwen.</code></pre>
            `,
            hint: "Gebruik hiervoor een <code>&lt;p&gt;</code>-element.",
            resources: HTML_RESOURCES,
            starter: {
                html: `<main class="profile-card">
  <h1>Welkom agent</h1>
  <!-- Zet hier de introtekst -->
</main>`,
                css: baseCss,
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: ".intro",
                    label: "De intro-paragraaf bestaat",
                },
                {
                    type: "textIncludes",
                    selector: ".intro",
                    includes: "Jij leert vandaag je eerste webpagina bouwen.",
                    label: "De introtekst klopt",
                },
            ],
        },
        {
            id: "task-list",
            title: "Maak een lijstje",
            objective:
                "Zet drie leerdoelen in een lijst, zodat de pagina duidelijker wordt.",
            contentHtml: `
                <p>Maak een <code>&lt;ul class="task-list"&gt;</code> met precies drie lijstitems:</p>
                <ul>
                    <li><code>HTML leren</code></li>
                    <li><code>CSS leren</code></li>
                    <li><code>Samen oefenen</code></li>
                </ul>
            `,
            hint: "Een unordered list gebruik je met <code>&lt;ul&gt;</code> en <code>&lt;li&gt;</code>.",
            resources: HTML_RESOURCES,
            starter: {
                html: `<main class="profile-card">
  <h1>Welkom agent</h1>
  <p class="intro">Jij leert vandaag je eerste webpagina bouwen.</p>
  <!-- Zet hier de lijst -->
</main>`,
                css: baseCss,
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: ".task-list",
                    label: "De lijst bestaat",
                },
                {
                    type: "elementCount",
                    selector: ".task-list li",
                    value: 3,
                    label: "Er staan precies drie lijstitems",
                },
                {
                    type: "textIncludes",
                    selector: ".task-list",
                    includes: "CSS leren",
                    label: "De lijst bevat de juiste tekst",
                },
            ],
        },
        {
            id: "action-button",
            title: "Zet er een knop onder",
            objective:
                "Voeg een simpele knop toe waarmee de student kan starten.",
            contentHtml: `
                <p>Voeg onder de lijst een knop toe met class <code>action-button</code>.</p>
                <p>De knoptekst moet zijn:</p>
                <pre><code>Start training</code></pre>
            `,
            hint: "Gebruik het element <code>&lt;button&gt;</code>.",
            resources: HTML_RESOURCES,
            starter: {
                html: `<main class="profile-card">
  <h1>Welkom agent</h1>
  <p class="intro">Jij leert vandaag je eerste webpagina bouwen.</p>
  <ul class="task-list">
    <li>HTML leren</li>
    <li>CSS leren</li>
    <li>Samen oefenen</li>
  </ul>
  <!-- Zet hier de knop -->
</main>`,
                css: baseCss,
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: ".action-button",
                    label: "De knop bestaat",
                },
                {
                    type: "textIncludes",
                    selector: ".action-button",
                    includes: "Start training",
                    label: "De knoptekst klopt",
                },
            ],
        },
        {
            id: "page-colors",
            title: "Geef de pagina kleur",
            objective:
                "Maak de pagina rustiger leesbaar met een lichte achtergrond en donkere tekst.",
            contentHtml: `
                <p>Voeg deze stijlen toe:</p>
                <ul>
                    <li>Geef <code>body</code> de achtergrondkleur <code>#e7eef7</code></li>
                    <li>Geef <code>body</code> de tekstkleur <code>#1f2933</code></li>
                    <li>Geef <code>.profile-card</code> een witte achtergrond met <code>#ffffff</code></li>
                </ul>
            `,
            hint: "Gebruik CSS-regels voor <code>body</code> en <code>.profile-card</code>.",
            resources: CSS_RESOURCES,
            starter: {
                html: baseHtml,
                css: baseCss,
            },
            tests: [
                {
                    type: "computedStyleEquals",
                    selector: "body",
                    property: "background-color",
                    value: "#e7eef7",
                    label: "De body-achtergrond klopt",
                },
                {
                    type: "computedStyleEquals",
                    selector: "body",
                    property: "color",
                    value: "#1f2933",
                    label: "De body-tekstkleur klopt",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".profile-card",
                    property: "background-color",
                    value: "#ffffff",
                    label: "De kaart heeft een witte achtergrond",
                },
            ],
        },
        {
            id: "card-spacing",
            title: "Maak de kaart netter",
            objective:
                "Geef de kaart wat ruimte zodat alles minder krap op elkaar staat.",
            contentHtml: `
                <p>Voeg deze stijlen toe aan <code>.profile-card</code>:</p>
                <ul>
                    <li><code>padding: 24px</code></li>
                    <li><code>border-radius: 12px</code></li>
                </ul>
            `,
            hint: "Padding geeft ruimte aan de binnenkant van een element.",
            resources: CSS_RESOURCES,
            starter: {
                html: baseHtml,
                css: `${baseCss}

body {
  background: #e7eef7;
  color: #1f2933;
}

.profile-card {
  background: #ffffff;
}`,
            },
            tests: [
                {
                    type: "computedStyleEquals",
                    selector: ".profile-card",
                    property: "padding-top",
                    value: "24px",
                    label: "De kaart heeft padding",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".profile-card",
                    property: "border-radius",
                    value: "12px",
                    label: "De kaart heeft afgeronde hoeken",
                },
            ],
        },
        {
            id: "button-style",
            title: "Maak de knop duidelijk zichtbaar",
            objective:
                "Geef de knop een opvallende achtergrond en leesbare tekstkleur.",
            contentHtml: `
                <p>Geef <code>.action-button</code> deze stijlen:</p>
                <ul>
                    <li>achtergrondkleur <code>#2563eb</code></li>
                    <li>tekstkleur <code>#ffffff</code></li>
                    <li><code>padding: 12px</code></li>
                </ul>
            `,
            hint: "Je mag voor alle kanten dezelfde padding gebruiken.",
            resources: CSS_RESOURCES,
            starter: {
                html: baseHtml,
                css: `${baseCss}

body {
  background: #e7eef7;
  color: #1f2933;
}

.profile-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
}`,
            },
            tests: [
                {
                    type: "computedStyleEquals",
                    selector: ".action-button",
                    property: "background-color",
                    value: "#2563eb",
                    label: "De knop heeft een blauwe achtergrond",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".action-button",
                    property: "color",
                    value: "#ffffff",
                    label: "De knoptekst is wit",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".action-button",
                    property: "padding-top",
                    value: "12px",
                    label: "De knop heeft padding",
                },
            ],
        },
    ],
};
