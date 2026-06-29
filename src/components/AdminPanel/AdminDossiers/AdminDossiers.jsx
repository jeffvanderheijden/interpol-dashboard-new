import { useEffect, useState } from "react";
import {
    deleteAdminDossier,
    getAdminDossiers,
} from "../../../api/dossiers";
import { API_BASE } from "../../../api/_config";
import { formatName } from "../../Desktop/_helpers/dossierHelpers";
import AdminDossierModal from "./AdminDossierModal";
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

function getInitials(name) {
    return String(name || "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() || "")
        .join("");
}

function renderThumb(dossier) {
    if (dossier.image_url) {
        const src = /^https?:\/\//i.test(dossier.image_url)
            ? dossier.image_url
            : `${API_BASE}${dossier.image_url}`;

        return <img className="dossier-thumb" src={src} alt={dossier.name} />;
    }

    const legacySrc = legacyImageMap.get(dossier.name);
    if (legacySrc) {
        return <img className="dossier-thumb" src={legacySrc} alt={dossier.name} />;
    }

    return <div className="dossier-thumb--fallback">{getInitials(dossier.name) || "??"}</div>;
}

export default function AdminDossiers() {
    const [dossiers, setDossiers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editDossier, setEditDossier] = useState(null);
    const [createOpen, setCreateOpen] = useState(false);

    const loadDossiers = () => {
        setLoading(true);
        setError(null);

        getAdminDossiers()
            .then((rows) => setDossiers(rows))
            .catch((e) => setError(e.message || "Failed to load dossiers"))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        loadDossiers();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Weet je zeker dat je dit dossier wilt verwijderen?")) return;

        try {
            await deleteAdminDossier(id);
            setDossiers((prev) => prev.filter((dossier) => dossier.id !== id));
        } catch (e) {
            alert(e.message || "Verwijderen mislukt");
        }
    };

    return (
        <div className="admin-dossiers">
            <div className="admin-header">
                <h1>Dossierbeheer</h1>

                <button className="new-dossier-btn" onClick={() => setCreateOpen(true)}>
                    + Nieuw dossier
                </button>
            </div>

            {loading && <div className="admin-dossiers__state">Dossiers laden…</div>}

            {error && (
                <div className="admin-dossiers__state admin-dossiers__state--error">
                    <strong>Fout:</strong> {error}
                </div>
            )}

            {!loading && !error && (
                <div className="dossier-list">
                    {dossiers.length === 0 ? (
                        <div className="admin-dossiers__empty">Nog geen dossiers.</div>
                    ) : (
                        dossiers.map((dossier) => (
                            <div className="dossier-card" key={dossier.id}>
                                <div className="dossier-left">
                                    {renderThumb(dossier)}

                                    <div className="dossier-info">
                                        <h2>{dossier.name}</h2>

                                        <div className="dossier-meta">
                                            <span
                                                className={`dossier-status ${
                                                    dossier.is_suspect
                                                        ? "dossier-status--suspect"
                                                        : "dossier-status--cleared"
                                                }`}
                                            >
                                                {dossier.is_suspect
                                                    ? "Nog verdacht"
                                                    : "Niet verdacht"}
                                            </span>

                                            <span
                                                className={`dossier-status ${
                                                    dossier.is_eliminated
                                                        ? "dossier-status--eliminated"
                                                        : "dossier-status--active"
                                                }`}
                                            >
                                                {dossier.is_eliminated
                                                    ? "Weggespeeld"
                                                    : "Actief"}
                                            </span>

                                            {dossier.video_url ? (
                                                <span className="dossier-status dossier-status--active">
                                                    Video gekoppeld
                                                </span>
                                            ) : null}
                                        </div>

                                        <p className="dossier-snippet">
                                            {dossier.description?.trim() ||
                                                "Nog geen extra dossierinformatie toegevoegd."}
                                        </p>
                                    </div>
                                </div>

                                <div className="dossier-right">
                                    <div className="dossier-actions">
                                        <button
                                            className="view-btn"
                                            onClick={() => setEditDossier(dossier)}
                                        >
                                            Bewerken
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(dossier.id)}
                                        >
                                            Verwijderen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {createOpen && (
                <AdminDossierModal
                    onClose={() => setCreateOpen(false)}
                    onSaved={() => {
                        setCreateOpen(false);
                        loadDossiers();
                    }}
                />
            )}

            {editDossier && (
                <AdminDossierModal
                    dossier={editDossier}
                    onClose={() => setEditDossier(null)}
                    onSaved={() => {
                        setEditDossier(null);
                        loadDossiers();
                    }}
                />
            )}
        </div>
    );
}
