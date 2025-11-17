import { useEffect, useRef, useState } from "react";
import "./NewTeamApp.scss";
import { useNavigate } from "react-router-dom";
import { captureFromVideo } from "./../../_helpers/newTeamHelpers";
import { createGroup } from "./../../../../api/groups";

const NewTeamApp = () => {
    const [teamPhoto, setTeamPhoto] = useState(null);
    const [members, setMembers] = useState([
        { name: "", number: "" },
        { name: "", number: "" },
        { name: "", number: "" },
    ]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const navigate = useNavigate();

    // ---------------------------
    // Webcam starten
    // ---------------------------
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

                    await new Promise((resolve) => {
                        videoRef.current.onloadedmetadata = resolve;
                    });

                    await videoRef.current.play().catch(() => { });
                }
            } catch (err) {
                console.error("Camera toegang geweigerd:", err);
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

    // ---------------------------
    // Foto maken
    // ---------------------------
    const handlePhotoButton = async () => {
        setError("");
        const dataUrl = await captureFromVideo(videoRef, canvasRef);
        setTeamPhoto(dataUrl);
    };

    // ---------------------------
    // Teamleden
    // ---------------------------
    const addMember = () => {
        if (members.length >= 5)
            return setError("Maximaal 5 studenten per team.");
        setError("");
        setMembers([...members, { name: "", number: "" }]);
    };

    const removeMember = (idx) => {
        if (members.length <= 3)
            return setError("Minimaal 3 studenten vereist.");
        setError("");
        setMembers(members.filter((_, i) => i !== idx));
    };

    const updateMember = (idx, field, value) => {
        const next = [...members];
        next[idx][field] = value;
        setMembers(next);
    };

    // ---------------------------
    // Validatie
    // ---------------------------
    const validateStudentNumber = (num) => /^[0-9]{4,6}$/.test(num);

    // ---------------------------
    // Submit → API call
    // ---------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!teamPhoto) return setError("Maak eerst een teamfoto.");
        if (members.length < 3) return setError("Minimaal 3 studenten vereist.");
        if (members.length > 5) return setError("Maximaal 5 studenten toegestaan.");

        for (const m of members) {
            if (!m.name.trim() || !m.number.trim())
                return setError("Vul voor elke student naam en studentnummer in.");
            if (!validateStudentNumber(m.number.trim()))
                return setError("Studentnummer moet 4-6 cijfers zijn.");
        }

        // ----------------------
        // API CALL HIER
        // ----------------------
        try {
            setLoading(true);
            const data = await createGroup(teamPhoto, members);
            console.log('new group created:', data)
            // navigate(`/team/${data.id}`);
        } catch (err) {
            console.error(err);
            setError("Kon team niet opslaan. Probeer opnieuw.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="new-team">

            {/* PHOTO / VIDEO SECTION */}
            <div className="new-team__photo-section">
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className={`new-team__video ${teamPhoto ? "is-hidden" : ""}`}
                />

                <img
                    src={teamPhoto || ""}
                    alt="Teamfoto"
                    className={`new-team__photo ${teamPhoto ? "" : "is-hidden"}`}
                />

                <canvas ref={canvasRef} className="new-team__canvas" />
            </div>

            <div className="new-team__content">

                <button
                    type="button"
                    onClick={handlePhotoButton}
                    className="new-team__btn new-team__btn--photo"
                >
                    {teamPhoto ? "Nieuwe foto maken" : "Maak teamfoto"}
                </button>

                <form onSubmit={handleSubmit} className="new-team__form">

                    {members.map((m, idx) => (
                        <div key={idx} className="new-team__member-row">
                            <input
                                type="text"
                                placeholder="Naam"
                                value={m.name}
                                onChange={(e) => updateMember(idx, "name", e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Studentnummer"
                                value={m.number}
                                onChange={(e) =>
                                    updateMember(idx, "number", e.target.value)
                                }
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
                    {loading && <div className="new-team__error">Bezig met opslaan...</div>}

                    <button
                        type="submit"
                        className="new-team__btn new-team__btn--submit"
                        disabled={loading}
                    >
                        {loading ? "Opslaan..." : "Team bevestigen"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default NewTeamApp;
