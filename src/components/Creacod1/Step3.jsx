import "./Creacod1.scss";

const figmaFiles = [
    {
        title: "Layer 1",
        description: "Download het eerste Figma-bestand.",
        href: "/downloads/creative-coding/Layer1.fig",
    },
    {
        title: "Layer 2",
        description: "Download het tweede Figma-bestand.",
        href: "/downloads/creative-coding/Layer2.fig",
    },
    {
        title: "Layer 3",
        description: "Download het derde Figma-bestand.",
        href: "/downloads/creative-coding/Layer3.fig",
    },
];

const Step3 = () => {
    return (
        <div className="trainer-core creacod-app">
            <div className="trainer-window creacod-app__window">
                <header className="trainer-window__titlebar">
                    <span>Creative Coding Puzzle</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "100%" }} />
                    </div>

                    <div className="creacod-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Stap 03</span>
                                <span className="trainer-briefing__tag">
                                    Creative Coding
                                </span>
                            </div>

                            <div className="trainer-briefing__header">
                                <div>
                                    <h2>Stap 3</h2>
                                    <p className="trainer-briefing__objective">
                                        Open de Figma-bestanden en vind het verborgen
                                        bericht.
                                    </p>
                                </div>
                            </div>

                            <div className="trainer-briefing__content">
                                <p className="trainer-briefing__lead">
                                    Er is een bericht verborgen in de lagen van deze
                                    Figma-bestanden.
                                </p>
                                <p>
                                    Download de bestanden hieronder, open ze in Figma en
                                    kijk goed naar de lagen.
                                </p>
                            </div>
                        </section>

                        <section
                            className="creacod-workbench creacod-workbench--single"
                            aria-label="Creative coding werkvlak"
                        >
                            <section className="creacod-panel">
                                <h2>Wat is Figma?</h2>
                                <p>
                                    Figma is een programma waarmee je een ontwerp kunt
                                    tekenen op je computer of online.
                                </p>
                                <p>
                                    Je kunt er kleuren, vormen en schermen mee uitproberen
                                    voordat je begint met coderen.
                                </p>
                                <p>
                                    Bij creative coding helpt dat, omdat je eerst rustig kunt
                                    bedenken hoe iets eruit moet zien. Daarna is het
                                    makkelijker om het in code na te bouwen.
                                </p>
                            </section>

                            <section className="creacod-panel">
                                <h2>Bestanden</h2>
                                <p>
                                    Download hieronder de drie Figma-bestanden en open ze
                                    in Figma. Vind de verborgen boodschap in de lagen van
                                    de bestanden.
                                </p>

                                <div className="creacod1-downloads">
                                    {figmaFiles.map((file) => (
                                        <a
                                            key={file.href}
                                            className="creacod1-download"
                                            href={file.href}
                                            download
                                        >
                                            <strong>{file.title}</strong>
                                            <span>{file.description}</span>
                                            <em>Download .fig bestand</em>
                                        </a>
                                    ))}
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3;
