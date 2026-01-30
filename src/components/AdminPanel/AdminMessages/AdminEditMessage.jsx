import { useState } from "react";
import { updateAdminMessage } from "../../../api/messages";
import "./AdminMessages.scss";

export default function AdminEditMessage({ message, onClose, onSaved }) {
    const [title, setTitle] = useState(message.title || "");
    const [body, setBody] = useState(message.body || "");
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
            await updateAdminMessage(message.id, {
                title: title.trim(),
                body: body.trim(),
                mediaFile: media, // optioneel: vervang bijlage
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
                    <h2>Bericht bewerken</h2>
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

                    <div className="admin-modal__existing">
                        <strong>Bestaande bijlage:</strong>{" "}
                        {message.media_url ? (
                            <a href={message.media_url} target="_blank" rel="noreferrer">
                                open
                            </a>
                        ) : (
                            <span>geen</span>
                        )}
                    </div>

                    <label>
                        Nieuwe media (optioneel)
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
                                Nieuwe bijlage verwijderen
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
