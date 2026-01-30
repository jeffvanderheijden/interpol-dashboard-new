import { useState } from "react";
import { createAdminMessage } from "../../../api/messages";
import "./AdminMessages.scss";

export default function AdminCreateMessage({ onClose, onSaved }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [media, setMedia] = useState(null);

    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);

    const canSave = title.trim() !== "" && body.trim() !== "" && !busy;

    const onPickFile = (file) => {
        if (!file) {
            setMedia(null);
            return;
        }
        if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
            setError("Alleen afbeelding of video toegestaan.");
            return;
        }
        setError(null);
        setMedia(file);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!canSave) return;

        setBusy(true);
        setError(null);

        try {
            await createAdminMessage({
                title: title.trim(),
                body: body.trim(),
                mediaFile: media,
            });
            onSaved();
        } catch (e2) {
            setError(e2.message || "Opslaan mislukt");
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="admin-modal__backdrop" onMouseDown={onClose}>
            <div className="admin-modal" onMouseDown={(e) => e.stopPropagation()}>
                <div className="admin-modal__header">
                    <h2>Nieuw bericht</h2>
                    <button className="admin-modal__close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <form className="admin-modal__body" onSubmit={onSubmit}>
                    <label>
                        Titel
                        <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>

                    <label>
                        Tekst
                        <textarea
                            rows={8}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </label>

                    <label>
                        Media (optioneel)
                        <input
                            type="file"
                            accept="image/*,video/*"
                            onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
                        />
                    </label>

                    {media ? (
                        <div className="admin-modal__preview">
                            {media.type.startsWith("image/") ? (
                                <img src={URL.createObjectURL(media)} alt="preview" />
                            ) : (
                                <video src={URL.createObjectURL(media)} controls />
                            )}

                            <button type="button" onClick={() => setMedia(null)}>
                                Bijlage verwijderen
                            </button>
                        </div>
                    ) : null}

                    {error ? (
                        <div className="admin-modal__error">
                            <strong>Fout:</strong> {error}
                        </div>
                    ) : null}

                    <div className="admin-modal__actions">
                        <button type="button" className="btn-secondary" onClick={onClose}>
                            Annuleren
                        </button>
                        <button type="submit" className="btn-primary" disabled={!canSave}>
                            {busy ? "Opslaan…" : "Opslaan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}