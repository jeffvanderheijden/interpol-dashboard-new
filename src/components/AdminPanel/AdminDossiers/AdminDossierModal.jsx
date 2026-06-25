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

export default function AdminDossierModal({ dossier, onClose, onSaved }) {
    const [name, setName] = useState(dossier?.name || "");
    const [description, setDescription] = useState(dossier?.description || "");
    const [image, setImage] = useState(null);
    const [isSuspect, setIsSuspect] = useState(Boolean(dossier?.is_suspect ?? true));
    const [isEliminated, setIsEliminated] = useState(Boolean(dossier?.is_eliminated ?? false));

    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);

    const canSave = name.trim() !== "" && !busy;
    const existingImageSrc =
        resolveImageSrc(dossier?.image_url) ||
        legacyImageMap.get(dossier?.name || "") ||
        null;

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
                is_suspect: isSuspect,
                is_eliminated: isEliminated,
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
                    <label>
                        Naam
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label>
                        Informatie
                        <textarea
                            rows={8}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Korte dossierinformatie voor studenten"
                        />
                    </label>

                    <div className="admin-modal__checkboxes">
                        <label className="admin-modal__checkbox">
                            <input
                                type="checkbox"
                                checked={isSuspect}
                                onChange={(e) => setIsSuspect(e.target.checked)}
                            />
                            <span>Deze docent is nog verdacht</span>
                        </label>

                        <label className="admin-modal__checkbox">
                            <input
                                type="checkbox"
                                checked={isEliminated}
                                onChange={(e) => setIsEliminated(e.target.checked)}
                            />
                            <span>Deze docent is weggespeeld</span>
                        </label>
                    </div>

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
                        Nieuwe afbeelding (optioneel)
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
