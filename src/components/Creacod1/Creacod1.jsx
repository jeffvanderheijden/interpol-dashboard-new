import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Creacod1.scss";

export default function CipherStep1({
    nextRoute = "/creative-coding/step2",
    correctAnswer = "goldenratio",
    title = "Cipher",
}) {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

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

    function validate() {
        const input = normalize(value);
        const expected = normalize(correctAnswer);

        if (!input) {
            setError("Vul eerst je antwoord in.");
            return;
        }

        if (input !== expected) {
            setError("Incorrect. Probeer opnieuw.");
            return;
        }

        setError("");
        navigate(nextRoute);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") validate();
    }

    return (
        <div className="puzzle">
            <h1>{title}</h1>

            <div className="cipher">
                <ul>
                    {cipherSymbols.map((symbol, index) => (
                        <li key={`${symbol}-${index}`}>{symbol}</li>
                    ))}
                </ul>
            </div>

            <div className="answer">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type je antwoord..."
                    className={error ? "error" : ""}
                />

                <button onClick={validate}>Submit</button>

                {error && <p className="message">{error}</p>}
            </div>

            <div id="alphabet" className="alphabet">
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
        </div>
    );
}