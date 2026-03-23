const baseHtml = `<main class="dossier">
  <header class="mission-header">
    <p class="mission-kicker">Interpol Cyber Division</p>
    <h1>Casefile: Ghost Relay</h1>
    <p class="mission-status">Status: Monitoring active relay traffic</p>
  </header>

  <section class="intel-grid">
    <article class="suspect-card">
      <p class="suspect-card__label">Prime suspect</p>
      <h2>Mila Voss</h2>
      <p class="suspect-card__alias">Alias: Ghost Relay</p>
      <ul class="evidence-list">
        <li>Remote access beacon detected in the design lab.</li>
        <li class="is-critical">Encrypted USB drop found near workstation B12.</li>
        <li>Badge scans match the intrusion window.</li>
      </ul>
    </article>
  </section>
</main>`;

const baseCss = `body {
  margin: 0;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
}`;

export const LESSON = {
    id: "htmlcss-dossier-rebuild",
    badge: "Frontend Recon",
    title: "HTML & CSS Field Lab",
    subtitle:
        "Herbouw een beschadigd Interpol-dossier zodat het team weer veilig briefingmateriaal kan bekijken.",
    briefing:
        "Een corrupte interface heeft de visuele laag van een suspect dossier onbruikbaar gemaakt. Herstel de markup en styling zonder de inhoudelijke briefing kwijt te raken.",
    statusLabel: "Open dossier",
    outcomeLabel: "Werkende casefile",
    language: "htmlcss",
    steps: [
        {
            id: "mission-header",
            title: "Herstel de missie-header",
            objective:
                "Zet een duidelijke header neer voor het onderschepte dossier.",
            contentHtml: `
                <p>Maak in <code>&lt;main class="dossier"&gt;</code> een header met precies deze onderdelen:</p>
                <ul>
                    <li>een <code>&lt;header class="mission-header"&gt;</code></li>
                    <li>een <code>&lt;h1&gt;</code> met de tekst <code>Casefile: Ghost Relay</code></li>
                    <li>een statusregel met class <code>mission-status</code> en de tekst <code>Status: Monitoring active relay traffic</code></li>
                </ul>
            `,
            hint: "Gebruik een <code>&lt;header&gt;</code>, daarna een <code>&lt;h1&gt;</code> en een <code>&lt;p class=\"mission-status\"&gt;</code>.",
            starter: {
                html: `<main class="dossier">
  <!-- Voeg hier de missie-header toe -->
</main>`,
                css: baseCss,
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: ".mission-header",
                    label: "Mission header bestaat",
                },
                {
                    type: "textIncludes",
                    selector: ".mission-header h1",
                    includes: "Casefile: Ghost Relay",
                    label: "Casefile-titel klopt",
                },
                {
                    type: "textIncludes",
                    selector: ".mission-status",
                    includes: "Status: Monitoring active relay traffic",
                    label: "Statusregel klopt",
                },
            ],
        },
        {
            id: "suspect-card",
            title: "Bouw de suspect card",
            objective:
                "Voeg de hoofdverdachte en drie bewijsregels toe aan het dossier.",
            contentHtml: `
                <p>Maak binnen <code>.intel-grid</code> een <code>&lt;article class="suspect-card"&gt;</code> met precies dit:</p>
                <ul>
                    <li>een kop <code>Mila Voss</code></li>
                    <li>een aliasregel met <code>Alias: Ghost Relay</code></li>
                    <li>een <code>&lt;ul class="evidence-list"&gt;</code> met precies drie items</li>
                    <li>een kritisch item met class <code>is-critical</code></li>
                </ul>
            `,
            hint: "Gebruik voor de alias bijvoorbeeld een apart <code>&lt;p&gt;</code>-element.",
            starter: {
                html: `<main class="dossier">
  <header class="mission-header">
    <p class="mission-kicker">Interpol Cyber Division</p>
    <h1>Casefile: Ghost Relay</h1>
    <p class="mission-status">Status: Monitoring active relay traffic</p>
  </header>

  <section class="intel-grid">
    <!-- Voeg hier de suspect card toe -->
  </section>
</main>`,
                css: baseCss,
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: ".suspect-card",
                    label: "Suspect card bestaat",
                },
                {
                    type: "textIncludes",
                    selector: ".suspect-card h2",
                    includes: "Mila Voss",
                    label: "Verdachtennaam klopt",
                },
                {
                    type: "textIncludes",
                    selector: ".suspect-card",
                    includes: "Alias: Ghost Relay",
                    label: "Aliasregel klopt",
                },
                {
                    type: "elementCount",
                    selector: ".evidence-list li",
                    value: 3,
                    label: "Drie bewijsregels aanwezig",
                },
                {
                    type: "selectorExists",
                    selector: ".evidence-list .is-critical",
                    label: "Kritiek bewijs gemarkeerd",
                },
            ],
        },
        {
            id: "dossier-surface",
            title: "Breng de dossierstijl terug",
            objective:
                "Geef de pagina weer het donkere Interpol-surface en de juiste spacing.",
            contentHtml: `
                <p>Werk de basisstijl bij zodat het dossier direct leesbaar wordt.</p>
                <ul>
                    <li>Geef <code>body</code> de achtergrondkleur <code>#08141f</code></li>
                    <li>Geef <code>body</code> een tekstkleur van <code>#e5f3ff</code></li>
                    <li>Geef <code>.dossier</code> links exact <code>32px</code> padding</li>
                </ul>
            `,
            hint: "Schrijf dus bijvoorbeeld <code>padding-left: 32px;</code> op <code>.dossier</code>.",
            starter: {
                html: baseHtml,
                css: baseCss,
            },
            tests: [
                {
                    type: "computedStyleEquals",
                    selector: "body",
                    property: "background-color",
                    value: "#08141f",
                    label: "Body heeft donkere achtergrond",
                },
                {
                    type: "computedStyleEquals",
                    selector: "body",
                    property: "color",
                    value: "#e5f3ff",
                    label: "Body-tekstkleur klopt",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".dossier",
                    property: "padding-left",
                    value: "32px",
                    label: "Dossier-padding ingesteld",
                },
            ],
        },
        {
            id: "card-layout",
            title: "Maak er een stevige intel card van",
            objective:
                "Geef de card een duidelijke lay-out en visuele hiërarchie.",
            contentHtml: `
                <p>Voeg deze drie stijlen toe:</p>
                <ul>
                    <li><code>.intel-grid { display: grid; }</code></li>
                    <li><code>.suspect-card { border-radius: 18px; }</code></li>
                    <li>Geef <code>.suspect-card</code> bovenaan een rand in kleur <code>#2ee6a6</code></li>
                </ul>
            `,
            hint: "De kleurcheck kijkt naar de bovenrand van <code>.suspect-card</code>.",
            starter: {
                html: baseHtml,
                css: `${baseCss}

body {
  background: #08141f;
  color: #e5f3ff;
}

.dossier {
  padding: 32px;
}`,
            },
            tests: [
                {
                    type: "computedStyleEquals",
                    selector: ".intel-grid",
                    property: "display",
                    value: "grid",
                    label: "Intel-grid gebruikt grid",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".suspect-card",
                    property: "border-radius",
                    value: "18px",
                    label: "Cardradius klopt",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".suspect-card",
                    property: "border-top-color",
                    value: "#2ee6a6",
                    label: "Accentkleur op card aanwezig",
                },
            ],
        },
        {
            id: "intel-highlights",
            title: "Markeer belangrijke signalen",
            objective:
                "Maak status en kritisch bewijs direct scanbaar voor het team.",
            contentHtml: `
                <p>Geef de belangrijkste tekst extra nadruk met precies deze stijlen:</p>
                <ul>
                    <li>Geef <code>.mission-status</code> de tekstkleur <code>#7ef7cf</code></li>
                    <li>Geef <code>.is-critical</code> de tekstkleur <code>#ff6b6b</code></li>
                    <li>Maak <code>.is-critical</code> vet met <code>font-weight: 700</code></li>
                </ul>
            `,
            hint: "Gebruik classes uit de markup; je hoeft geen nieuwe elementen toe te voegen.",
            starter: {
                html: baseHtml,
                css: `${baseCss}

body {
  background: #08141f;
  color: #e5f3ff;
}

.dossier {
  padding: 32px;
}

.intel-grid {
  display: grid;
  gap: 20px;
}

.suspect-card {
  background: #0d2130;
  border: 1px solid rgba(126, 247, 207, 0.3);
  border-top: 4px solid #2ee6a6;
  border-radius: 18px;
  padding: 24px;
}`,
            },
            tests: [
                {
                    type: "computedStyleEquals",
                    selector: ".mission-status",
                    property: "color",
                    value: "#7ef7cf",
                    label: "Statuskleur klopt",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".is-critical",
                    property: "color",
                    value: "#ff6b6b",
                    label: "Kritiek bewijs valt op",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".is-critical",
                    property: "font-weight",
                    value: "700",
                    label: "Kritiek bewijs is vetgedrukt",
                },
            ],
        },
        {
            id: "action-button",
            title: "Voeg de dispatch-knop toe",
            objective:
                "Maak de briefing af met een duidelijke call to action voor het veldteam.",
            contentHtml: `
                <p>Voeg een knop toe met:</p>
                <ul>
                    <li>class <code>launch-btn</code></li>
                    <li>tekst <code>Send to field team</code></li>
                    <li>achtergrondkleur <code>#2ee6a6</code></li>
                    <li>tekstkleur <code>#041019</code></li>
                    <li>hoverkleur <code>#7ef7cf</code></li>
                </ul>
            `,
            hint: "Gebruik voor hover een aparte regel: <code>.launch-btn:hover</code>.",
            starter: {
                html: `${baseHtml}

<!-- Voeg hieronder de knop toe -->
`,
                css: `${baseCss}

body {
  background: #08141f;
  color: #e5f3ff;
}

.dossier {
  padding: 32px;
}

.intel-grid {
  display: grid;
  gap: 20px;
}

.suspect-card {
  background: #0d2130;
  border: 1px solid rgba(126, 247, 207, 0.3);
  border-top: 4px solid #2ee6a6;
  border-radius: 18px;
  padding: 24px;
}

.mission-status {
  color: #7ef7cf;
}

.is-critical {
  color: #ff6b6b;
  font-weight: 700;
}`,
            },
            tests: [
                {
                    type: "selectorExists",
                    selector: ".launch-btn",
                    label: "Dispatch-knop bestaat",
                },
                {
                    type: "textIncludes",
                    selector: ".launch-btn",
                    includes: "Send to field team",
                    label: "Knoptekst klopt",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".launch-btn",
                    property: "background-color",
                    value: "#2ee6a6",
                    label: "Knopkleur klopt",
                },
                {
                    type: "computedStyleEquals",
                    selector: ".launch-btn",
                    property: "color",
                    value: "#041019",
                    label: "Tekstkleur van knop klopt",
                },
                {
                    type: "cssRuleEquals",
                    selector: ".launch-btn:hover",
                    property: "background-color",
                    value: "#7ef7cf",
                    label: "Hoverkleur ingesteld",
                },
            ],
        },
    ],
};
