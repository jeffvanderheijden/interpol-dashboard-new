import { useState } from "react";
import WebcamCapture from "../../_shared/WebcamCapture/WebcamCapture";
import { createAdminGroup } from "../../../api/groups";
import "./AdminCreateTeam.scss";

export default function AdminCreateTeamFull({ onClose, onSaved }) {
    const [teamPhoto, setTeamPhoto] = useState(null);
    const [capturing, setCapturing] = useState(false);

    const [teamName, setTeamName] = useState("");
    const [className, setClassName] = useState("");

    const [members, setMembers] = useState([
        { name: "", number: "" },
        { name: "", number: "" },
        { name: "", number: "" },
    ]);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Foto gemaakt via webcam
    const handleCaptured = (dataUrl) => {
        setTeamPhoto(dataUrl);
        setCapturing(false);
    };

    // Leden
    const updateMember = (idx, field, value) => {
        const next = [...members];
        next[idx][field] = value;
        setMembers(next);
    };

    const addMember = () => {
        if (members.length >= 5) return setError("Maximaal 5 studenten");
        setMembers([...members, { name: "", number: "" }]);
    };

    const removeMember = (idx) => {
        if (members.length <= 3) return setError("Minimaal 3 studenten");
        setMembers(members.filter((_, i) => i !== idx));
    };

    // Submit
    const handleSubmit = async () => {
        setError("");

        if (!teamPhoto) return setError("Maak eerst een teamfoto.");
        if (!teamName.trim()) return setError("Teamnaam is verplicht.");
        if (!className.trim()) return setError("Klas is verplicht.");

        if (members.some((m) => !m.name.trim() || !m.number.trim()))
            return setError("Alle studenten moeten naam & nummer hebben.");

        try {
            setLoading(true);

            await createAdminGroup({
                teamPhoto,
                teamName,
                className,
                members
            });

            onSaved();
        } catch (err) {
            console.error(err);
            setError("Kon team niet opslaan.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-create-full-backdrop">
            <div className="admin-create-full-modal">

                <h2>Nieuw team aanmaken</h2>

                {error && <div className="error">{error}</div>}

                {/* Webcam modus */}
                {capturing ? (
                    <WebcamCapture
                        onCapture={handleCaptured}
                        onCancel={() => setCapturing(false)}
                    />
                ) : (
                    <>
                        {/* Foto */}
                        <div className="photo-preview">
                            {teamPhoto ? (
                                <img src={teamPhoto} alt="Team" />
                            ) : (
                                <div className="placeholder">Geen foto</div>
                            )}
                        </div>

                        <button onClick={() => setCapturing(true)}>
                            {teamPhoto ? "Nieuwe foto maken" : "Maak teamfoto"}
                        </button>

                        {/* Teamnaam */}
                        <div className="form-row">
                            <label>Teamnaam</label>
                            <input
                                type="text"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                        </div>

                        {/* Klas */}
                        <div className="form-row">
                            <label>Klas</label>
                            <input
                                type="text"
                                value={className}
                                onChange={(e) => setClassName(e.target.value)}
                            />
                        </div>

                        {/* Studenten */}
                        <h3>Teamleden</h3>

                        {members.map((m, idx) => (
                            <div key={idx} className="member-row">
                                <input
                                    type="text"
                                    placeholder="Naam"
                                    value={m.name}
                                    onChange={(e) =>
                                        updateMember(idx, "name", e.target.value)
                                    }
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
                                        className="delete"
                                        onClick={() => removeMember(idx)}
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        ))}

                        {members.length < 5 && (
                            <button onClick={addMember}>
                                + Student toevoegen
                            </button>
                        )}

                        {/* Footer */}
                        <div className="buttons">
                            <button onClick={onClose}>Annuleren</button>
                            <button disabled={loading} onClick={handleSubmit}>
                                {loading ? "Opslaan…" : "Team aanmaken"}
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}
