import { useState } from "react";
import { createAdminMessage } from "../../../api/messages";
import { API_BASE } from "../../../api/_config";
import "./AdminMessages.scss";

const toMysqlDatetime = (dtLocal) => {
    if (!dtLocal) return "";
    return dtLocal.replace("T", " ") + ":00";
};

const resolveMediaUrl = (value) => {
    if (!value) return "";
    return /^https?:\/\//i.test(value) ? value : `${API_BASE}${value}`;
};

export default function AdminCreateMessage({ onClose, onSaved }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [media, setMedia] = useState(null);
    const [mediaUrl, setMediaUrl] = useState("");
    const [mediaType, setMediaType] = useState("video");
    const [publishAt, setPublishAt] = useState("");

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
        setMediaUrl("");
        setMedia(file);
    };

    const linkedMediaUrl = mediaUrl.trim();
    const hasLinkedMedia = linkedMediaUrl !== "";

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
                mediaUrl: linkedMediaUrl,
                mediaType,
                publish_at: publishAt ? toMysqlDatetime(publishAt) : "",
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
                        Tonen vanaf
                        <input
                            type="datetime-local"
                            value={publishAt}
                            onChange={(e) => setPublishAt(e.target.value)}
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

                    <div className="admin-modal__split">
                        <label>
                            Media-link (optioneel)
                            <input
                                type="text"
                                value={mediaUrl}
                                placeholder="/uploads/messages/mijn-video.mp4 of https://..."
                                onChange={(e) => {
                                    setMediaUrl(e.target.value);
                                    setMedia(null);
                                }}
                            />
                        </label>

                        <label>
                            Link type
                            <select
                                value={mediaType}
                                onChange={(e) => setMediaType(e.target.value)}
                            >
                                <option value="video">Video</option>
                                <option value="image">Afbeelding</option>
                            </select>
                        </label>
                    </div>

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

                    {!media && hasLinkedMedia ? (
                        <div className="admin-modal__preview">
                            {mediaType === "image" ? (
                                <img src={resolveMediaUrl(linkedMediaUrl)} alt="Gelinkte media" />
                            ) : (
                                <video src={resolveMediaUrl(linkedMediaUrl)} controls />
                            )}
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
