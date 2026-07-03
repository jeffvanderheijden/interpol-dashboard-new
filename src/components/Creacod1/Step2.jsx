import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Creacod1.scss";

const CORRECT_PASSWORD = "phi";

const Step2 = () => {
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
        navigate("/creative-coding/step3");
    };

    return (
        <div className="trainer-core creacod-app">
            <div className="trainer-window creacod-app__window">
                <header className="trainer-window__titlebar">
                    <span>Creative Coding Puzzle</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "50%" }} />
                    </div>

                    <div className="creacod-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Stap 02</span>
                                <span className="trainer-briefing__tag">
                                    Creative Coding
                                </span>
                            </div>

                            <div className="trainer-briefing__header">
                                <div>
                                    <h2>Stap 2</h2>
                                    <p className="trainer-briefing__objective">
                                        Volg de route en vind het wachtwoord.
                                    </p>
                                </div>
                            </div>

                            <div className="trainer-briefing__content">
                                <p className="trainer-briefing__lead">
                                    Gebruik je telefoon om de verborgen route te volgen.
                                </p>
                                <p>
                                    Scan 4 posters. Elke poster stuurt je door naar de
                                    volgende. Het wachtwoord van de 4e poster vul je
                                    hieronder in.
                                </p>
                            </div>
                        </section>

                        <section className="creacod-workbench" aria-label="Creative coding werkvlak">
                            <section className="creacod-panel">
                                <h2>Opdracht</h2>
                                <p>
                                    Open de verborgen link op je telefoon. Scan daarna 4
                                    posters. Elke poster stuurt je door naar de volgende.
                                    Het wachtwoord van de 4e poster vul je hieronder in.
                                </p>
                            </section>

                            <section className="creacod-panel creacod-panel--narrow">
                                <h2>Wachtwoord</h2>
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

            <a
                href="{{hiddenLink}}"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "none" }}
            >
                Verborgen link
            </a>
        </div>
    );
};

export default Step2;
