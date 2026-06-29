import { useState } from "react";
import {
    createAdminDossier,
    updateAdminDossier,
} from "../../../api/dossiers";
import { API_BASE } from "../../../api/_config";
import { formatName } from "../../Desktop/_helpers/dossierHelpers";
import "./AdminDossiers.scss";

const legacyImages = import.meta.glob("/src/assets/docenten/*.{jpg,jpeg,png}", {
    eager: true,
});

const legacyImageMap = new Map(
    Object.entries(legacyImages).map(([path, module]) => {
        const filename = path.split("/").pop();
        return [formatName(filename), module.default || path];
    })
);

function resolveImageSrc(imageUrl) {
    if (!imageUrl) return null;
    if (/^https?:\/\//i.test(imageUrl)) return imageUrl;
    return `${API_BASE}${imageUrl}`;
}

function resolveMediaSrc(mediaUrl) {
    if (!mediaUrl) return null;
    if (/^https?:\/\//i.test(mediaUrl)) return mediaUrl;
    return `${API_BASE}${mediaUrl}`;
}

export default function AdminDossierModal({ dossier, onClose, onSaved }) {
    const [name, setName] = useState(dossier?.name || "");
    const [description, setDescription] = useState(dossier?.description || "");
    const [image, setImage] = useState(null);
    const [videoUrl, setVideoUrl] = useState(dossier?.video_url || "");
    const [isSuspect, setIsSuspect] = useState(
        dossier?.is_suspect ? "1" : "0"
    );
    const [isEliminated, setIsEliminated] = useState(
        dossier?.is_eliminated ? "1" : "0"
    );

    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);

    const canSave = name.trim() !== "" && !busy;
    const existingImageSrc =
        resolveImageSrc(dossier?.image_url) ||
        legacyImageMap.get(dossier?.name || "") ||
        null;
    const existingVideoSrc = resolveMediaSrc(dossier?.video_url);

    const onPickFile = (file) => {
        if (!file) {
            setImage(null);
            return;
        }

        if (!file.type.startsWith("image/")) {
            setError("Alleen afbeeldingen zijn toegestaan.");
            return;
        }

        setError(null);
        setImage(file);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!canSave) return;

        setBusy(true);
        setError(null);

        try {
            const payload = {
                name: name.trim(),
                description: description.trim(),
                imageFile: image,
                videoUrl: videoUrl.trim(),
                is_suspect: isSuspect === "1",
                is_eliminated: isEliminated === "1",
            };

            if (dossier?.id) {
                await updateAdminDossier(dossier.id, payload);
            } else {
                await createAdminDossier(payload);
            }

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
                    <h2>{dossier ? "Dossier bewerken" : "Nieuw dossier"}</h2>
                    <button className="admin-modal__close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <form className="admin-modal__body" onSubmit={onSubmit}>
                    <div className="admin-modal__section">
                        <div className="admin-modal__section-title">Basisinformatie</div>

                        <label>
                            <span className="admin-modal__label">Naam</span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Bijvoorbeeld: Judith Pouwelse"
                            />
                        </label>

                        <label>
                            <span className="admin-modal__label">Informatie</span>
                            <textarea
                                rows={8}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Korte dossierinformatie voor studenten"
                            />
                        </label>
                    </div>

                    <div className="admin-modal__section">
                        <div className="admin-modal__section-title">Status</div>

                        <div className="admin-modal__row">
                            <label>
                                <span className="admin-modal__label">Verdachte status</span>
                                <select
                                    value={isSuspect}
                                    onChange={(e) => setIsSuspect(e.target.value)}
                                >
                                    <option value="1">Nog verdacht</option>
                                    <option value="0">Niet verdacht</option>
                                </select>
                            </label>

                            <label>
                                <span className="admin-modal__label">Spelstatus</span>
                                <select
                                    value={isEliminated}
                                    onChange={(e) => setIsEliminated(e.target.value)}
                                >
                                    <option value="0">Actief</option>
                                    <option value="1">Weggespeeld</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="admin-modal__section">
                        <div className="admin-modal__section-title">Afbeelding</div>

                        <div className="admin-modal__existing">
                            <strong>Bestaande afbeelding:</strong>{" "}
                            {existingImageSrc ? "aanwezig" : "geen"}
                        </div>

                        {existingImageSrc && !image ? (
                            <div className="admin-modal__preview">
                                <img src={existingImageSrc} alt={name || "Dossier"} />
                            </div>
                        ) : null}

                        <label>
                            <span className="admin-modal__label">
                                Nieuwe afbeelding
                            </span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
                            />
                        </label>

                        {image ? (
                            <div className="admin-modal__preview">
                                <img src={URL.createObjectURL(image)} alt="preview" />
                                <button type="button" onClick={() => setImage(null)}>
                                    Nieuwe afbeelding verwijderen
                                </button>
                            </div>
                        ) : null}
                    </div>

                    <div className="admin-modal__section">
                        <div className="admin-modal__section-title">
                            Aanvullende video
                        </div>

                        <div className="admin-modal__existing">
                            De afbeelding hierboven blijft altijd het hoofdbeeld van
                            het dossier. Deze video komt alleen als extra aanvulling
                            onder de dossiertekst te staan.
                        </div>

                        <label>
                            <span className="admin-modal__label">Video-link</span>
                            <input
                                type="text"
                                value={videoUrl}
                                onChange={(e) => setVideoUrl(e.target.value)}
                                placeholder="/media/dossiers/mijn-video.mp4 of https://..."
                            />
                        </label>

                        {videoUrl.trim() ? (
                            <div className="admin-modal__preview">
                                <video src={resolveMediaSrc(videoUrl.trim())} controls />
                                <button type="button" onClick={() => setVideoUrl("")}>
                                    Video-link verwijderen
                                </button>
                            </div>
                        ) : existingVideoSrc ? (
                            <div className="admin-modal__preview">
                                <video src={existingVideoSrc} controls />
                            </div>
                        ) : null}
                    </div>

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
