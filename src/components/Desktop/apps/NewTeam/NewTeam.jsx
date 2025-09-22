import { useEffect, useRef, useState } from "react";
import "./NewTeam.scss";

const NewTeam = ({ onSubmit }) => {
    const [teamPhoto, setTeamPhoto] = useState(null);
    const [members, setMembers] = useState([{ name: "", number: "" }]);
    const [error, setError] = useState("");

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);

    // Start webcam 1x en hou 'm draaiend (ook als er een foto is)
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
                    // iOS/Safari requires these:
                    videoRef.current.muted = true;
                    videoRef.current.playsInline = true;
                    await videoRef.current.play().catch(() => { });
                }
            } catch (e) {
                console.error("Camera toegang geweigerd of niet beschikbaar:", e);
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

    const captureFromVideo = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        // wacht tot er frames beschikbaar zijn
        if (video.readyState < 2) {
            await new Promise((res) => {
                const onLoaded = () => {
                    video.removeEventListener("loadeddata", onLoaded);
                    res();
                };
                video.addEventListener("loadeddata", onLoaded);
            });
        }

        const w = video.videoWidth || 640;
        const h = video.videoHeight || 480;
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/png");
        setTeamPhoto(dataUrl);
    };

    // Eén knop: als er nog geen foto is → maak foto; anders → maak direct een nieuwe (retake)
    const handlePhotoButton = () => {
        captureFromVideo();
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

        if (!teamPhoto) {
            setError("Maak eerst een teamfoto.");
            return;
        }
        if (members.length < 3) {
            setError("Minimaal 3 studenten vereist.");
            return;
        }
        if (members.length > 5) {
            setError("Maximaal 5 studenten toegestaan.");
            return;
        }
        if (members.some((m) => !m.name || !m.number)) {
            setError("Vul voor elke student een naam en studentnummer in.");
            return;
        }

        onSubmit?.({ teamPhoto, members });
    };

    return (
        <div className="new-team">
            <div className="header">👥 Nieuw Team</div>
            <div className="content">
                <div className="photo-section">
                    {/* Videofeed blijft ALTIJD gemount (ook als er een foto zichtbaar is) */}
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className={`video-preview ${teamPhoto ? "is-hidden" : ""}`}
                            style={{ width: "100%", maxWidth: 480 }}
                        />
                        {/* Foto preview */}
                        <img
                            src={teamPhoto || ""}
                            alt="Teamfoto"
                            className={`team-photo-preview ${teamPhoto ? "" : "is-hidden"}`}
                            style={{ width: "100%", maxWidth: 480 }}
                        />
                    </div>

                    <canvas ref={canvasRef} style={{ display: "none" }} />

                    <div style={{ marginTop: 8 }}>
                        <button type="button" onClick={handlePhotoButton} className="btn">
                            {teamPhoto ? "Nieuwe foto maken" : "Maak teamfoto"}
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="team-form">
                    <h3>Teamleden</h3>
                    {members.map((m, idx) => (
                        <div key={idx} className="member-row">
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
                                    className="btn"
                                    onClick={() => removeMember(idx)}
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    ))}
                    {members.length < 5 && (
                        <button type="button" className="btn" onClick={addMember}>
                            + Voeg student toe
                        </button>
                    )}

                    {error && <div className="error">{error}</div>}

                    <button type="submit" className="btn">Team bevestigen</button>
                </form>
            </div>
        </div>
    );
};

export default NewTeam;
