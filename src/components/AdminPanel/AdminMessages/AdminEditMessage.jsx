import { useState } from "react";
import { updateAdminMessage } from "../../../api/messages";
import { API_BASE } from "./../../../api/_config";
import "./AdminMessages.scss";

const toDatetimeLocalValue = (mysqlDateTime) => {
    if (!mysqlDateTime) return "";
    return String(mysqlDateTime).slice(0, 16).replace(" ", "T");
};

const toMysqlDatetime = (dtLocal) => {
    if (!dtLocal) return "";
    return dtLocal.replace("T", " ") + ":00";
};

const resolveMediaUrl = (value) => {
    if (!value) return "";
    return /^https?:\/\//i.test(value) ? value : `${API_BASE}${value}`;
};

export default function AdminEditMessage({ message, onClose, onSaved }) {
    const [title, setTitle] = useState(message.title || "");
    const [body, setBody] = useState(message.body || "");
    const [media, setMedia] = useState(null);
    const [mediaUrl, setMediaUrl] = useState(message.media_url || "");
    const [mediaType, setMediaType] = useState(
        message.media_type === "image" ? "image" : "video"
    );
    const [clearMedia, setClearMedia] = useState(false);
    const [publishAt, setPublishAt] = useState(toDatetimeLocalValue(message.publish_at));

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
        setClearMedia(false);
        setMediaUrl("");
        setMedia(file);
    };

    const linkedMediaUrl = mediaUrl.trim();
    const hasLinkedMedia = linkedMediaUrl !== "";
    const existingMediaUrl = resolveMediaUrl(message.media_url);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!canSave) return;

        setBusy(true);
        setError(null);

        try {
            await updateAdminMessage(message.id, {
                title: title.trim(),
                body: body.trim(),
                mediaFile: media,
                mediaUrl: linkedMediaUrl,
                mediaType,
                clearMedia,
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

                    <label>
                        Tonen vanaf
                        <input
                            type="datetime-local"
                            value={publishAt}
                            onChange={(e) => setPublishAt(e.target.value)}
                        />
                    </label>

                    <div className="admin-modal__existing">
                        <strong>Bestaande bijlage:</strong>{" "}
                        {message.media_url ? (
                            <a
                                href={existingMediaUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
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
                                    setClearMedia(false);
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
                                Nieuwe bijlage verwijderen
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

                    {message.media_url && !media && !hasLinkedMedia && !clearMedia ? (
                        <div className="admin-modal__preview">
                            {message.media_type === "image" ? (
                                <img src={existingMediaUrl} alt="Bestaande bijlage" />
                            ) : message.media_type === "video" ? (
                                <video src={existingMediaUrl} controls />
                            ) : null}

                            <button
                                type="button"
                                onClick={() => {
                                    setMedia(null);
                                    setMediaUrl("");
                                    setClearMedia(true);
                                }}
                            >
                                Bestaande bijlage verwijderen
                            </button>
                        </div>
                    ) : null}

                    {clearMedia ? (
                        <div className="admin-modal__existing">
                            Bestaande bijlage wordt verwijderd bij opslaan.
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
