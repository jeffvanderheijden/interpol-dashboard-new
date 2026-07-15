import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Design1.scss";

const figmaFiles = [
    {
        title: "Layer 1",
        description: "Download het eerste Figma-bestand.",
        href: "/downloads/design1/Layer1.fig",
    },
    {
        title: "Layer 2",
        description: "Download het tweede Figma-bestand.",
        href: "/downloads/design1/Layer2.fig",
    },
    {
        title: "Layer 3",
        description: "Download het derde Figma-bestand.",
        href: "/downloads/design1/Layer3.fig",
    },
];

const CORRECT_PASSWORD = "fibonacci";

const Step3 = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const validate = () => {
        const normalized = value.trim().toLowerCase().replace(/\s/g, "");

        if (!normalized) {
            setError("Vul eerst het wachtwoord in.");
            inputRef.current?.focus();
            return;
        }

        if (normalized !== CORRECT_PASSWORD) {
            setError("Dat wachtwoord klopt niet. Probeer opnieuw.");
            inputRef.current?.focus();
            inputRef.current?.select();
            return;
        }

        setError("");
        navigate("/design1/step4");
    };

    return (
        <div className="trainer-core design1-app">
            <div className="trainer-window design1-app__window">
                <header className="trainer-window__titlebar">
                    <span>Design1 Puzzle</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "75%" }} />
                    </div>

                    <div className="design1-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Stap 03</span>
                                <span className="trainer-briefing__tag">Design1</span>
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
                                    kijk goed naar de lagen. Vul daarna het gevonden
                                    wachtwoord hieronder in.
                                </p>
                                <p>
                                    Als je extra uitleg nodig hebt, kun je deze{" "}
                                    <a
                                        href="https://www.youtube.com/watch?v=jQ1sfKIl50E"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        tutorial
                                    </a>{" "}
                                    bekijken.
                                </p>
                            </div>
                        </section>

                        <section
                            className="design1-workbench design1-workbench--single"
                            aria-label="Design1 werkvlak"
                        >
                            <section className="design1-panel">
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
                                    Bij Design1 helpt dat, omdat je eerst rustig kunt
                                    bedenken hoe iets eruit moet zien. Daarna is het
                                    makkelijker om het in code na te bouwen.
                                </p>
                            </section>

                            <section className="design1-panel">
                                <h2>Bestanden</h2>
                                <p>
                                    Download hieronder de drie Figma-bestanden en open ze
                                    in Figma. Vind de verborgen boodschap in de lagen van
                                    de bestanden.
                                </p>

                                <div className="design1-downloads">
                                    {figmaFiles.map((file) => (
                                        <a
                                            key={file.href}
                                            className="design1-download"
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

                            <section className="design1-panel design1-panel--narrow">
                                <h2>Wachtwoord</h2>
                                <p>
                                    Heb je het verborgen bericht gevonden? Vul dan het
                                    wachtwoord in om naar stap 4 te gaan.
                                </p>

                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Wachtwoord"
                                    value={value}
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                        if (error) setError("");
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            validate();
                                        }
                                    }}
                                    className={error ? "is-error" : ""}
                                    autoComplete="off"
                                    spellCheck="false"
                                />

                                <button type="button" onClick={validate}>
                                    Controleer
                                </button>

                                {error ? <p className="design1-feedback">{error}</p> : null}
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3;
