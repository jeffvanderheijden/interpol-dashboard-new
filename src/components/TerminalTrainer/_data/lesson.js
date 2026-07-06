const TERMINAL_BASICS_RESOURCES = [
    {
        kind: "Mac",
        title: "Apple: Terminal User Guide",
        href: "https://support.apple.com/guide/terminal/welcome/mac",
    },
    {
        kind: "Windows",
        title: "Microsoft: Windows command-line shells",
        href: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    },
    {
        kind: "Video",
        title: "YouTube: command line basics for beginners",
        href: "https://www.youtube.com/results?search_query=command+line+basics+for+absolute+beginners",
    },
];

const TERMINAL_NAV_RESOURCES = [
    {
        kind: "Mac",
        title: "Apple: Get started with Terminal",
        href: "https://support.apple.com/guide/terminal/welcome/mac",
    },
    {
        kind: "Windows",
        title: "Microsoft: cd command reference",
        href: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd",
    },
    {
        kind: "Video",
        title: "YouTube: PowerShell basics for beginners",
        href: "https://www.youtube.com/results?search_query=powershell+basics+for+beginners",
    },
];

const TERMINAL_LISTING_RESOURCES = [
    {
        kind: "Windows",
        title: "Microsoft: dir command reference",
        href: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir",
    },
    {
        kind: "Video",
        title: "YouTube: terminal navigation for beginners",
        href: "https://www.youtube.com/results?search_query=terminal+navigation+for+beginners",
    },
];

const baseScenario = {
    startPath: "/agent",
    entries: [
        { path: "/agent", type: "dir" },
        { path: "/agent/archive", type: "dir" },
        { path: "/agent/briefing", type: "dir" },
        { path: "/agent/evidence", type: "dir" },
        {
            path: "/agent/briefing/mission.txt",
            type: "file",
            content: [
                "INTERPOL OPS BRIEFING",
                "Doel: maak een map met de naam signals.",
                "Kopieer daarna clue.txt naar die map.",
                "Lees ten slotte de gekopieerde clue opnieuw uit.",
            ].join("\n"),
        },
        {
            path: "/agent/briefing/clue.txt",
            type: "file",
            content: [
                "SIGNAALFRAGMENT",
                "Codewoord: terminal-mastery",
                "Alleen geldig als je dit bestand vanuit signals opent.",
            ].join("\n"),
        },
        {
            path: "/agent/archive/old-case.txt",
            type: "file",
            content: "Verouderd dossier. Niet relevant voor deze missie.",
        },
    ],
};

function withScenario(overrides = {}) {
    return {
        ...baseScenario,
        ...overrides,
        entries: overrides.entries || baseScenario.entries,
    };
}

export const LESSON = {
    id: "terminal-ops-signal-hunt",
    badge: "Terminal Ops",
    title: "Terminal Ops: Signal Hunt",
    subtitle:
        "Een speelse introductie tot terminal-denken op Mac en Windows.",
    briefing:
        "Je werkt als Interpol-trainee in een veilige terminalsimulatie. Je leert niet alleen commando's uit je hoofd, maar vooral hoe je je weg vindt in mappen, bestanden leest en een missie stap voor stap oplost.",
    statusLabel: "Beginnersopdracht",
    outcomeLabel: "Eerste terminalmissie",
    language: "terminal",
    steps: [
        {
            id: "where-am-i",
            title: "Ontdek waar je bent",
            objective:
                "Gebruik een terminalcommando om je huidige map te tonen.",
            contentHtml: `
                <p>De missie start in een veilige Interpol-werkmap. Toon eerst waar je nu bent.</p>
                <p><strong>Mac of PowerShell:</strong> <code>pwd</code></p>
                <p><strong>Windows CMD:</strong> <code>cd</code></p>
                <p>In deze trainer mag allebei. Het doel is dat je begrijpt wat een <em>huidige map</em> is.</p>
            `,
            hint: "Zoek het commando dat je huidige locatie laat zien.",
            resources: TERMINAL_BASICS_RESOURCES,
            starter: `# Mac / PowerShell: pwd\n# Windows CMD: cd\n`,
            scenario: withScenario(),
            tests: [
                {
                    type: "terminalCommandUsed",
                    anyOf: ["pwd", "cd"],
                    label: "Je gebruikt een commando om je locatie op te vragen",
                },
                {
                    type: "terminalOutputIncludes",
                    includes: "/agent",
                    label: "De huidige map wordt correct getoond",
                },
                {
                    type: "terminalErrorCount",
                    value: 0,
                    label: "Het commando geeft geen foutmelding",
                },
            ],
        },
        {
            id: "list-workspace",
            title: "Bekijk wat er om je heen staat",
            objective:
                "Gebruik een lijstcommando om de inhoud van je werkmap te bekijken.",
            contentHtml: `
                <p>Je hoeft niet blind te gokken. Vraag eerst op welke mappen en bestanden er in je huidige map staan.</p>
                <p><strong>Mac of PowerShell:</strong> <code>ls</code></p>
                <p><strong>Windows CMD:</strong> <code>dir</code></p>
                <p>Als je goed kijkt, zie je welke map interessant is voor de briefing.</p>
            `,
            hint: "Je zoekt een commando dat bestanden en mappen in de huidige locatie laat zien.",
            resources: TERMINAL_LISTING_RESOURCES,
            starter: `# Mac / PowerShell: ls\n# Windows CMD: dir\n`,
            scenario: withScenario(),
            tests: [
                {
                    type: "terminalCommandUsed",
                    anyOf: ["ls"],
                    label: "Je gebruikt een commando om de mapinhoud te bekijken",
                },
                {
                    type: "terminalOutputIncludes",
                    includes: "briefing",
                    label: "De map briefing wordt zichtbaar",
                },
                {
                    type: "terminalOutputIncludes",
                    includes: "evidence",
                    label: "Je ziet meerdere onderdelen van de werkmap",
                },
            ],
        },
        {
            id: "enter-briefing",
            title: "Navigeer naar de briefing",
            objective:
                "Ga naar de map waarin de missie-instructies staan.",
            contentHtml: `
                <p>De briefing staat niet in de hoofdmap. Ga naar de map <code>briefing</code>.</p>
                <p><strong>Mac / PowerShell / Windows CMD:</strong> <code>cd briefing</code></p>
                <p>Terminalwerk draait vaak om steeds precies weten in welke map je werkt.</p>
            `,
            hint: "Gebruik <code>cd</code> gevolgd door de mapnaam.",
            resources: TERMINAL_NAV_RESOURCES,
            starter: `# Navigeer naar de map briefing\n`,
            scenario: withScenario(),
            tests: [
                {
                    type: "terminalCommandUsed",
                    anyOf: ["cd"],
                    label: "Je gebruikt cd om te navigeren",
                },
                {
                    type: "terminalPathEquals",
                    path: "/agent/briefing",
                    label: "Je eindigt in de briefing-map",
                },
                {
                    type: "terminalErrorCount",
                    value: 0,
                    label: "De navigatie lukt zonder foutmelding",
                },
            ],
        },
        {
            id: "read-mission-file",
            title: "Lees het briefingbestand",
            objective:
                "Open het bestand met de missie-instructies vanuit de terminal.",
            contentHtml: `
                <p>Je bent nu in de juiste map. Lees het bestand <code>mission.txt</code>.</p>
                <p><strong>Mac / PowerShell:</strong> <code>cat mission.txt</code></p>
                <p><strong>Windows CMD:</strong> <code>type mission.txt</code></p>
                <p>In PowerShell mag <code>cat</code> ook, omdat dat daar als alias werkt.</p>
            `,
            hint: "Je zoekt een commando dat de inhoud van een tekstbestand toont.",
            resources: TERMINAL_BASICS_RESOURCES,
            starter: `# Lees mission.txt\n`,
            scenario: withScenario({
                startPath: "/agent/briefing",
            }),
            tests: [
                {
                    type: "terminalCommandUsed",
                    anyOf: ["cat"],
                    label: "Je gebruikt een bestand-leescommando",
                },
                {
                    type: "terminalOutputIncludes",
                    includes: "maak een map met de naam signals",
                    label: "De briefinginstructie verschijnt in beeld",
                },
            ],
        },
        {
            id: "make-signals-folder",
            title: "Maak de signal-map",
            objective:
                "Voer de briefing uit door de juiste map aan te maken.",
            contentHtml: `
                <p>Maak in de huidige map een nieuwe map met de naam <code>signals</code>.</p>
                <p><strong>Mac / PowerShell / Windows CMD:</strong> <code>mkdir signals</code></p>
                <p>Op veel systemen werkt ook <code>md signals</code>, maar <code>mkdir</code> is het duidelijkst voor beginners.</p>
            `,
            hint: "Gebruik een commando dat nieuwe mappen aanmaakt.",
            resources: TERMINAL_BASICS_RESOURCES,
            starter: `# Maak de map signals\n`,
            scenario: withScenario({
                startPath: "/agent/briefing",
            }),
            tests: [
                {
                    type: "terminalCommandUsed",
                    anyOf: ["mkdir"],
                    label: "Je gebruikt een commando om een map te maken",
                },
                {
                    type: "terminalEntryExists",
                    path: "/agent/briefing/signals",
                    entryType: "dir",
                    label: "De map signals is aangemaakt",
                },
                {
                    type: "terminalErrorCount",
                    value: 0,
                    label: "De map wordt zonder foutmelding aangemaakt",
                },
            ],
        },
        {
            id: "copy-clue-file",
            title: "Kopieer het clue-bestand",
            objective:
                "Zet het clue-bestand in de nieuwe signal-map.",
            contentHtml: `
                <p>Kopieer <code>clue.txt</code> naar de map <code>signals</code>.</p>
                <p><strong>Mac / PowerShell:</strong> <code>cp clue.txt signals/clue.txt</code></p>
                <p><strong>Windows CMD:</strong> <code>copy clue.txt signals\\clue.txt</code></p>
                <p>Het belangrijkste hier is dat je begrijpt wat <em>bron</em> en <em>bestemming</em> zijn.</p>
            `,
            hint: "Eerst noem je het bronbestand, daarna de bestemming.",
            resources: TERMINAL_BASICS_RESOURCES,
            starter: `# Kopieer clue.txt naar signals\n`,
            scenario: withScenario({
                startPath: "/agent/briefing",
                entries: [
                    ...baseScenario.entries,
                    { path: "/agent/briefing/signals", type: "dir" },
                ],
            }),
            tests: [
                {
                    type: "terminalCommandUsed",
                    anyOf: ["copy"],
                    label: "Je gebruikt een kopieercommando",
                },
                {
                    type: "terminalEntryExists",
                    path: "/agent/briefing/signals/clue.txt",
                    entryType: "file",
                    label: "Het clue-bestand staat nu in signals",
                },
                {
                    type: "terminalErrorCount",
                    value: 0,
                    label: "Het kopieren lukt zonder foutmelding",
                },
            ],
        },
        {
            id: "reopen-clue",
            title: "Open het signaal opnieuw",
            objective:
                "Ga naar de nieuwe map en lees daar het gekopieerde bestand uit.",
            contentHtml: `
                <p>Voltooi de missie in twee stappen:</p>
                <ul>
                    <li>ga naar <code>signals</code></li>
                    <li>lees daarna <code>clue.txt</code></li>
                </ul>
                <p><strong>Voorbeeld Mac / PowerShell:</strong></p>
                <pre><code>cd signals
cat clue.txt</code></pre>
                <p><strong>Voorbeeld Windows CMD:</strong></p>
                <pre><code>cd signals
type clue.txt</code></pre>
            `,
            hint: "Je hebt hier dus minimaal twee commando's nodig.",
            resources: TERMINAL_NAV_RESOURCES,
            starter: `# Ga naar signals\n# Lees daarna clue.txt\n`,
            scenario: withScenario({
                startPath: "/agent/briefing",
                entries: [
                    ...baseScenario.entries,
                    { path: "/agent/briefing/signals", type: "dir" },
                    {
                        path: "/agent/briefing/signals/clue.txt",
                        type: "file",
                        content: [
                            "SIGNAAL BEVESTIGD",
                            "Codewoord: terminal-mastery",
                            "Missie afgerond. Je beheerst nu de basis van terminalnavigatie.",
                        ].join("\n"),
                    },
                ],
            }),
            tests: [
                {
                    type: "terminalPathEquals",
                    path: "/agent/briefing/signals",
                    label: "Je navigeert eerst naar de juiste map",
                },
                {
                    type: "terminalCommandUsed",
                    anyOf: ["cat"],
                    label: "Je leest daarna het clue-bestand uit",
                },
                {
                    type: "terminalOutputIncludes",
                    includes: "terminal-mastery",
                    label: "Het codewoord verschijnt in de terminal",
                },
            ],
        },
    ],
};
