import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const tutorialVideo = {
    title: "Creative Coding Tutorial",
    description: "Bekijk deze video als extra uitleg bij stap 3.",
    href: "https://www.youtube.com/watch?v=jQ1sfKIl50E",
};

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
        navigate("/creative-coding/step4");
    };

    return (
        <div className="trainer-core creacod-app">
            <div className="trainer-window creacod-app__window">
                <header className="trainer-window__titlebar">
                    <span>Creative Coding Puzzle</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "75%" }} />
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
                                    kijk goed naar de lagen. Vul daarna het gevonden
                                    wachtwoord hieronder in.
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

                            <section className="creacod-panel">
                                <h2>Tutorial</h2>
                                <p>
                                    Heb je extra uitleg nodig? Bekijk dan deze tutorial
                                    over creative coding.
                                </p>

                                <div className="creacod1-downloads">
                                    <a
                                        className="creacod1-download"
                                        href={tutorialVideo.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <strong>{tutorialVideo.title}</strong>
                                        <span>{tutorialVideo.description}</span>
                                        <em>Open YouTube-video</em>
                                    </a>
                                </div>
                            </section>

                            <section className="creacod-panel creacod-panel--narrow">
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

                                {error ? <p className="creacod1-feedback">{error}</p> : null}
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3;
