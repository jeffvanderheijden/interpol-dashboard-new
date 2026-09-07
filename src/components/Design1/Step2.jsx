import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Design1.scss";

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
        navigate("/design1/step3");
    };

    return (
        <div className="trainer-core design1-app">
            <div className="trainer-window design1-app__window">
                <header className="trainer-window__titlebar">
                    <span>Design1 Puzzle</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "50%" }} />
                    </div>

                    <div className="design1-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Stap 02</span>
                                <span className="trainer-briefing__tag">Design1</span>
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

                        <section className="design1-workbench" aria-label="Design1 werkvlak">
                            <section className="design1-panel">
                                <h2>Opdracht</h2>
                                <p>
                                    Open de verborgen link op je telefoon. Scan daarna 4
                                    posters. Elke poster stuurt je door naar de volgende.
                                    Het wachtwoord van de 4e poster vul je hieronder in.
                                </p>
                            </section>

                            <section className="design1-panel design1-panel--narrow">
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

                                {error ? <p className="design1-feedback">{error}</p> : null}
                            </section>
                        </section>
                    </div>
                </div>
            </div>

            <a
                href="https://ar.interpol.sd-lab.nl"
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
