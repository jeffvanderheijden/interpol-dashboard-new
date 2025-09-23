import { useEffect, useRef, useState } from "react";
import "./NewTeamApp.scss";
import { captureFromVideo } from "./../../_helpers/newTeamHelpers";

const NewTeamApp = ({ onSubmit }) => {
    const [teamPhoto, setTeamPhoto] = useState(null);
    const [members, setMembers] = useState([{ name: "", number: "" }]);
    const [error, setError] = useState("");

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);

    // Start webcam
    useEffect(() => {
        let cancelled = false;

        async function startCam() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "user" },
                    audio: false,
                });
                if (cancelled) {
                    stream.getTracks().forEach((t) => t.stop());
                    return;
                }
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.muted = true;
                    videoRef.current.playsInline = true;
                    await videoRef.current.play().catch(() => { });
                }
            } catch (e) {
                console.error("Camera toegang geweigerd:", e);
                setError("Camera niet beschikbaar. Controleer toestemming.");
            }
        }

        startCam();

        return () => {
            cancelled = true;
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((t) => t.stop());
            }
        };
    }, []);

    const handlePhotoButton = async () => {
        const dataUrl = await captureFromVideo(videoRef, canvasRef);
        setTeamPhoto(dataUrl);
    };

    const addMember = () => {
        if (members.length >= 5) {
            setError("Maximaal 5 studenten per team.");
            return;
        }
        setError("");
        setMembers([...members, { name: "", number: "" }]);
    };

    const removeMember = (idx) => {
        if (members.length <= 3) {
            setError("Minimaal 3 studenten vereist.");
            return;
        }
        setError("");
        setMembers(members.filter((_, i) => i !== idx));
    };

    const updateMember = (idx, field, value) => {
        const next = [...members];
        next[idx][field] = value;
        setMembers(next);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!teamPhoto) return setError("Maak eerst een teamfoto.");
        if (members.length < 3) return setError("Minimaal 3 studenten vereist.");
        if (members.length > 5) return setError("Maximaal 5 studenten toegestaan.");
        if (members.some((m) => !m.name || !m.number)) {
            return setError("Vul voor elke student een naam en studentnummer in.");
        }

        onSubmit?.({ teamPhoto, members });
    };

    return (
        <div className="new-team">
            <div className="new-team__photo-section">
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className={`new-team__video ${teamPhoto ? "is-hidden" : ""}`}
                />
                <img
                    src={teamPhoto || ""}
                    alt="Teamfoto voorbeeld"
                    className={`new-team__photo ${teamPhoto ? "" : "is-hidden"}`}
                />
                <canvas ref={canvasRef} className="new-team__canvas" />
                <button
                    type="button"
                    onClick={handlePhotoButton}
                    className="new-team__btn"
                >
                    {teamPhoto ? "Nieuwe foto maken" : "Maak teamfoto"}
                </button>
            </div>

            <form onSubmit={handleSubmit} className="new-team__form">
                {members.map((m, idx) => (
                    <div key={idx} className="new-team__member-row">
                        <input
                            type="text"
                            placeholder="Studentnummer"
                            value={m.number}
                            onChange={(e) => updateMember(idx, "number", e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Naam"
                            value={m.name}
                            onChange={(e) => updateMember(idx, "name", e.target.value)}
                        />
                        {members.length > 3 && (
                            <button
                                type="button"
                                className="new-team__btn new-team__btn--remove"
                                onClick={() => removeMember(idx)}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                ))}
                {members.length < 5 && (
                    <button
                        type="button"
                        className="new-team__btn new-team__btn--add"
                        onClick={addMember}
                    >
                        + Voeg student toe
                    </button>
                )}

                {error && <div className="new-team__error">{error}</div>}

                <button type="submit" className="new-team__btn new-team__btn--submit">
                    Team bevestigen
                </button>
            </form>
        </div>
    );
};

export default NewTeamApp;
