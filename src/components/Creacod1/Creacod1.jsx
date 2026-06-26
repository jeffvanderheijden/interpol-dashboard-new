import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChallengeTracking } from "../../hooks/useChallengeTracking";
import "./Creacod1.scss";

export default function CipherStep1({
    nextRoute = "/creative-coding/step2",
    correctAnswer = "goldenratio",
    title = "Cipher",
}) {
    const navigate = useNavigate();
    const { complete } = useChallengeTracking("/creative-coding");
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef(null);

    const cipherSymbols = useMemo(
        () => ["⌠", "⌘", "⌗", "⌧", "⌖", "⬣", "⧩", "△", "◌", "⌢", "⌘"],
        []
    );

    const alphabetSymbols = useMemo(
        () => [
            "△",
            "○",
            "⇧",
            "⌧",
            "⌖",
            "⌞",
            "⌠",
            "⬧",
            "⌢",
            "▤",
            "⌔",
            "⌗",
            "◈",
            "⬣",
            "⌘",
            "◆",
            "▼",
            "⧩",
            "⬦",
            "◌",
            "□",
            "⬠",
            "▢",
            "⬥",
            "⧫",
            "▧",
        ],
        []
    );

    const letters = useMemo(() => "abcdefghijklmnopqrstuvwxyz".split(""), []);

    function normalize(text) {
        return text.trim().toLowerCase().replace(/\s/g, "");
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    async function validate() {
        const input = normalize(value);
        const expected = normalize(correctAnswer);

        if (!input) {
            setError("Vul eerst je antwoord in.");
            inputRef.current?.focus();
            return;
        }

        if (input !== expected) {
            setError("Incorrect. Probeer opnieuw.");
            inputRef.current?.focus();
            inputRef.current?.select();
            return;
        }

        setError("");
        try {
            await complete();
        } catch (err) {
            console.error("Creative coding completion failed", err);
        }
        navigate(nextRoute);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            validate();
        }
    }

    return (
        <div className="puzzle creacod1-screen">
            <header className="creacod1-screen__header">
                <p className="creacod1-screen__eyebrow">Creative Coding</p>
                <h1>{title}</h1>
                <p className="creacod1-screen__intro">
                    Ontcijfer de symbolen, vergelijk ze met de legenda en voer het
                    juiste antwoord in om door te gaan naar de volgende stap.
                </p>
            </header>

            <div className="puzzle__layout">
                <section
                    className="cipher creacod1-screen__section"
                    aria-label="Versleutelde code"
                >
                    <h2>Gecodeerd bericht</h2>
                    <ul>
                        {cipherSymbols.map((symbol, index) => (
                            <li key={`${symbol}-${index}`}>{symbol}</li>
                        ))}
                    </ul>
                </section>

                <section
                    className="answer creacod1-screen__section creacod1-screen__section--compact"
                    aria-label="Antwoord invoeren"
                >
                    <h2>Antwoord</h2>
                    <p>Gebruik de legenda hieronder en vul het ontcijferde woord in.</p>

                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            if (error) setError("");
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Type je antwoord..."
                        className={error ? "error" : ""}
                        autoComplete="off"
                        spellCheck="false"
                    />

                    <button type="button" onClick={validate}>
                        Controleer
                    </button>

                    {error ? <p className="message">{error}</p> : null}
                </section>
            </div>

            <section
                id="alphabet"
                className="alphabet"
                aria-label="Legenda"
            >
                <div className="alphabet__header">
                    <h2>Legenda</h2>
                    <p>Zoek per symbool de bijbehorende letter.</p>
                </div>

                <div className="alphabet__grid">
                    <ul className="symbols">
                        {alphabetSymbols.map((symbol, index) => (
                            <li key={`${symbol}-${index}`}>{symbol}</li>
                        ))}
                    </ul>

                    <ul className="letters">
                        {letters.map((letter) => (
                            <li key={letter}>{letter}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
