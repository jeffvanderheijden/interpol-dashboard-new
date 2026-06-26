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
        <div className="creacod1-step3">
            <h1>Stap 3</h1>
            <p>
                Figma is een ontwerp- en samenwerkingsprogramma waarmee je
                schermen, componenten, layouts en interacties kunt uitwerken.
                Binnen creative coding gebruik je Figma vaak om eerst visuele
                ideeën, composities en interface-elementen te verkennen voordat
                je ze omzet naar HTML, CSS, JavaScript of een generatieve visual.
            </p>

            <p>
                Hieronder staan drie bestanden die jullie straks kunnen
                downloaden en gebruiken als startpunt voor de volgende fase.
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
        </div>
    );
};

export default Step3;
