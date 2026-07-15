import { useEffect, useRef, useState } from "react";
import { useChallengeTracking } from "../../hooks/useChallengeTracking";
import "./Design1.scss";

const EXPECTED_SEQUENCE = ["1", "1", "2", "3", "5", "8", "13"];
const CONFETTI_COLORS = [
    "#ff4d6d",
    "#ffd166",
    "#06d6a0",
    "#118ab2",
    "#ef476f",
    "#f78c6b",
    "#7bdff2",
    "#cdb4db",
];

function normalizeSequence(value) {
    return String(value ?? "")
        .match(/\d+/g)
        ?.join(" ") ?? "";
}

const Final = () => {
    const { challenge, complete } = useChallengeTracking("/design1");
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pointsAwarded, setPointsAwarded] = useState(null);

    useEffect(() => {
        document.title = "FINAL";
        inputRef.current?.focus();
    }, []);

    const validate = async () => {
        const normalized = normalizeSequence(value);
        const expected = EXPECTED_SEQUENCE.join(" ");

        if (!normalized) {
            setError("Vul eerst een antwoord in.");
            setSuccess("");
            inputRef.current?.focus();
            return;
        }

        if (normalized !== expected) {
            setError("Dat is nog niet het juiste antwoord.");
            setSuccess("");
            inputRef.current?.focus();
            inputRef.current?.select();
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const result = await complete();
            const awardedPoints = Number(
                result?.points ??
                    result?.earned_points ??
                    challenge?.points ??
                    challenge?.earned_points ??
                    0
            );

            setPointsAwarded(awardedPoints);
            setSuccess("Correct. De punten zijn toegekend.");
        } catch (err) {
            console.error("Design1 completion failed", err);
            setError("De invoer klopt, maar het toekennen van punten mislukte.");
            setSuccess("");
            setPointsAwarded(null);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="trainer-core design1-app">
            <div className="trainer-window design1-app__window">
                <header className="trainer-window__titlebar">
                    <span>FINAL</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "100%" }} />
                    </div>

                    <div className="design1-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Final</span>
                                <span className="trainer-briefing__tag">Design1</span>
                            </div>

                            <div className="trainer-briefing__header">
                                <div>
                                    <h2>Laatste invoer</h2>
                                    <p className="trainer-briefing__objective">
                                        Vul het juiste eindantwoord in om de challenge af
                                        te ronden.
                                    </p>
                                </div>
                            </div>

                            <div className="trainer-briefing__content">
                                <p className="trainer-briefing__lead">
                                    Gebruik alles wat je tot nu toe hebt gevonden.
                                </p>
                                <p>
                                    Als je de puzzel goed hebt opgelost, weet je wat hier
                                    ingevuld moet worden.
                                </p>
                            </div>
                        </section>

                        <section
                            className="design1-workbench design1-workbench--single"
                            aria-label="Design1 eindinvoer"
                        >
                            <section className="design1-panel design1-panel--narrow">
                                <h2>Eindantwoord</h2>
                                <p>Vul hier het eindantwoord in.</p>

                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Typ hier je antwoord"
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

                                {error ? <p className="design1-feedback">{error}</p> : null}
                                {success ? (
                                    <p className="design1-success">{success}</p>
                                ) : null}
                            </section>
                        </section>
                    </div>
                </div>
            </div>

            {success ? (
                <div className="design1-celebration" role="status" aria-live="polite">
                    <div className="design1-confetti" aria-hidden="true">
                        {Array.from({ length: 28 }, (_, index) => (
                            <span
                                key={index}
                                className="design1-confetti-piece"
                                style={{
                                    left: `${(index * 17) % 100}%`,
                                    backgroundColor:
                                        CONFETTI_COLORS[index % CONFETTI_COLORS.length],
                                    animationDelay: `${(index % 7) * 0.18}s`,
                                    animationDuration: `${3.4 + (index % 5) * 0.35}s`,
                                    transform: `rotate(${index * 19}deg)`,
                                }}
                            />
                        ))}
                    </div>

                    <div className="design1-celebration__card">
                        <p className="design1-celebration__eyebrow">
                            Challenge voltooid
                        </p>
                        <h2>Goed gedaan!</h2>
                        <p>
                            Je hebt {pointsAwarded ?? 0} punten verdiend!
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Final;
