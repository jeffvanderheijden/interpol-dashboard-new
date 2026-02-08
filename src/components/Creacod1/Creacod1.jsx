import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Creacod1.scss";

export default function CipherStep1({
    nextRoute = "/apps/puzzle/step-2",
    correctAnswer = "this-is-not-a-secret.its-hidden-in-plain-sight",
    title = "Cipher",
}) {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const cipherSymbols = useMemo(
        () => [
            "⇧",
            "⧩",
            "⌖",
            "△",
            "◌",
            "⌢",
            "⬠",
            "⌖",
            "-",
            "⇧",
            "⌘",
            "⌧",
            "⌢",
            "⬣",
            "⌠",
            ".",
            "⌢",
            "⬣",
            "◌",
            "⌖",
            "⧩",
            "◆",
            "⌘",
            "⌗",
            ".",
            "⬦",
            "⌧",
            "-",
            "⌗",
            "△",
            "○",
            ".",
            "⬣",
            "⌗",
            "/",
            "△",
            "⧩",
        ],
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

    const alphabetLetters = useMemo(() => "abcdefghijklmnopqrstuvwxyz".split(""), []);

    function normalize(s) {
        return s.trim().toLowerCase();
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

    function onKeyDown(e) {
        if (e.key === "Enter") validate();
    }

    return (
        <div className="cipherStep1">
            <div className="cipherStep1__inner">
                <h1 className="cipherStep1__title">{title}</h1>

                <div className="cipherStep1__cipherBox">
                    <ul className="cipherStep1__cipherList">
                        {cipherSymbols.map((sym, i) => (
                            <li className="cipherStep1__symbol" key={`${sym}-${i}`}>
                                {sym}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="cipherStep1__form">
                    <input
                        className={`cipherStep1__input ${error ? "is-error" : ""}`}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={onKeyDown}
                        placeholder="Decodeer de cipher en typ het antwoord..."
                    />

                    <div className="cipherStep1__buttonRow">
                        <button className="cipherStep1__button" onClick={validate}>
                            Submit
                        </button>
                    </div>

                    {error && <div className="cipherStep1__error">{error}</div>}
                </div>

                {/* Alphabet hint: in DOM maar verborgen */}
                <div id="alphabet" className="cipherStep1__alphabet">
                    <ul className="cipherStep1__alphabetList">
                        {alphabetSymbols.map((sym, i) => (
                            <li className="cipherStep1__symbol" key={`${sym}-${i}`}>
                                {sym}
                            </li>
                        ))}
                    </ul>

                    <ul className="cipherStep1__alphabetList cipherStep1__alphabetList--letters">
                        {alphabetLetters.map((ch) => (
                            <li className="cipherStep1__symbol" key={ch}>
                                {ch}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
