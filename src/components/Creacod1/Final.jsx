import { useEffect, useRef, useState } from "react";
import { useChallengeTracking } from "../../hooks/useChallengeTracking";
import "./Creacod1.scss";

const EXPECTED_SEQUENCE = ["1", "1", "2", "3", "5", "8", "13"];

function normalizeSequence(value) {
    return String(value ?? "")
        .match(/\d+/g)
        ?.join(" ") ?? "";
}

const Final = () => {
    const { complete } = useChallengeTracking("/creative-coding");
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        document.title = "FINAL";
        inputRef.current?.focus();
    }, []);

    const validate = async () => {
        const normalized = normalizeSequence(value);
        const expected = EXPECTED_SEQUENCE.join(" ");

        if (!normalized) {
            setError("Vul eerst de reeks in.");
            setSuccess("");
            inputRef.current?.focus();
            return;
        }

        if (normalized !== expected) {
            setError("Dat is nog niet de juiste Fibonacci-reeks.");
            setSuccess("");
            inputRef.current?.focus();
            inputRef.current?.select();
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            await complete();
            setSuccess("Correct. De punten zijn toegekend.");
        } catch (err) {
            console.error("Creative coding completion failed", err);
            setError("De invoer klopt, maar het toekennen van punten mislukte.");
            setSuccess("");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="trainer-core creacod-app">
            <div className="trainer-window creacod-app__window">
                <header className="trainer-window__titlebar">
                    <span>FINAL</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "100%" }} />
                    </div>

                    <div className="creacod-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Final</span>
                                <span className="trainer-briefing__tag">
                                    Creative Coding
                                </span>
                            </div>

                            <div className="trainer-briefing__header">
                                <div>
                                    <h2>Laatste invoer</h2>
                                    <p className="trainer-briefing__objective">
                                        Vul de volledige Fibonacci-reeks in om de challenge
                                        af te ronden.
                                    </p>
                                </div>
                            </div>

                            <div className="trainer-briefing__content">
                                <p className="trainer-briefing__lead">
                                    Gebruik de hint uit stap 4 en vul de reeks in.
                                </p>
                                <p>
                                    Voer de getallen in als een reeks, bijvoorbeeld met
                                    spaties ertussen.
                                </p>
                            </div>
                        </section>

                        <section
                            className="creacod-workbench creacod-workbench--single"
                            aria-label="Creative coding eindinvoer"
                        >
                            <section className="creacod-panel creacod-panel--narrow">
                                <h2>Fibonacci-reeks</h2>
                                <p>Vul hier het eindantwoord in.</p>

                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Bijv. 1 1 2 3 5 8 13"
                                    value={value}
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                        if (error) setError("");
                                        if (success) setSuccess("");
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
                                    disabled={isSubmitting}
                                />

                                <button
                                    type="button"
                                    onClick={validate}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Verwerken..." : "Controleer"}
                                </button>

                                {error ? <p className="creacod1-feedback">{error}</p> : null}
                                {success ? (
                                    <p className="creacod1-success">{success}</p>
                                ) : null}
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Final;
