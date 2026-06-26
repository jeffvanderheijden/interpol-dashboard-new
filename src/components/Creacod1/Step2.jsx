import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Creacod1.scss";

const CORRECT_PASSWORD = "fibonacci";

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
        <div className="creacod1-step2 creacod1-screen">
            <header className="creacod1-screen__header">
                <p className="creacod1-screen__eyebrow">Creative Coding</p>
                <h1>Stap 2</h1>
                <p className="creacod1-screen__intro">
                    Gebruik je telefoon om de verborgen route te volgen. De
                    laatste poster geeft het wachtwoord voor deze stap.
                </p>
            </header>

            <section className="creacod1-screen__section">
                <h2>Opdracht</h2>
                <p>
                    Open de verborgen link op je telefoon. Scan daarna 4 posters.
                    Elke poster stuurt je door naar de volgende. Het wachtwoord
                    van de 4e poster vul je hieronder in.
                </p>
            </section>

            <section className="creacod1-screen__section creacod1-screen__section--compact">
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

                <button type="button" onClick={validate}>Controleer</button>

                {error ? <p className="creacod1-feedback">{error}</p> : null}
            </section>

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
