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
        <div className="creacod1-step3 creacod1-screen">
            <header className="creacod1-screen__header">
                <p className="creacod1-screen__eyebrow">Creative Coding</p>
                <h1>Stap 3</h1>
                <p className="creacod1-screen__intro">
                    In deze stap werk je met Figma als voorbereiding op je
                    creatieve opdracht.
                </p>
            </header>

            <section className="creacod1-screen__section">
                <h2>Wat is Figma?</h2>
                <p>
                    Figma is een programma waarmee je een ontwerp kunt tekenen op
                    je computer.
                </p>
                <p>
                    Je kunt er kleuren, vormen en schermen mee uitproberen
                    voordat je begint met coderen.
                </p>
                <p>
                    Bij creative coding helpt dat, omdat je eerst rustig kunt
                    bedenken hoe iets eruit moet zien. Daarna is het makkelijker
                    om het in code na te bouwen.
                </p>
            </section>

            <section className="creacod1-screen__section">
                <h2>Bestanden</h2>
                <p>
                    Download hieronder de drie Figma-bestanden en open ze in
                    Figma.
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
        </div>
    );
};

export default Step3;
