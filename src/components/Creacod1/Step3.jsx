import "./Creacod1.scss";

const figmaFiles = [
    {
        title: "Figma Bestand 1",
        description: "Placeholder voor je eerste creative coding bronbestand.",
        href: "#figma-bestand-1",
    },
    {
        title: "Figma Bestand 2",
        description: "Placeholder voor referenties, componenten of assets.",
        href: "#figma-bestand-2",
    },
    {
        title: "Figma Bestand 3",
        description: "Placeholder voor een extra oefening of variatie.",
        href: "#figma-bestand-3",
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
                    Figma is een programma waarmee je ontwerpen kunt maken op je
                    computer. Je gebruikt het om ideeën uit te tekenen voordat
                    je gaat bouwen.
                </p>
                <p>
                    Bij creative coding kan Figma helpen om kleuren, vormen,
                    schermen en composities eerst rustig uit te werken. Daarna
                    kun je die ideeën makkelijker omzetten naar code.
                </p>
            </section>

            <section className="creacod1-screen__section">
                <h2>Bestanden</h2>
                <p>
                    Download hieronder de drie bestanden. Later vervangen we deze
                    placeholders door de echte Figma-bestanden.
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
                            <em>Download placeholder</em>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Step3;
