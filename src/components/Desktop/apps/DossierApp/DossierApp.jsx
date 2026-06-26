import { useEffect, useMemo, useState } from "react";
import { API_BASE } from "../../../../api/_config";
import { getStudentDossiers } from "../../../../api/dossiers";
import "./DossierApp.scss";
import "./DossierDetail.scss";
import DossierDetail from "./DossierDetail";
import { formatName } from "./../../_helpers/dossierHelpers";

const legacyImages = import.meta.glob("/src/assets/docenten/*.{jpg,jpeg,png}", {
    eager: true,
});

const legacyImageMap = new Map(
    Object.entries(legacyImages).map(([path, module]) => {
        const filename = path.split("/").pop();
        return [formatName(filename), module.default || path];
    })
);

function resolveImage(imageUrl, name) {
    if (imageUrl) {
        if (/^https?:\/\//i.test(imageUrl)) return imageUrl;
        return `${API_BASE}${imageUrl}`;
    }

    return legacyImageMap.get(name) || "/icons/default-team.png";
}

const DossierApp = ({
    onStepComplete,
    showHackerTile = true,
    title = "Verdachte docenten",
}) => {
    const [selected, setSelected] = useState(null);
    const [detailOpen, setDetailOpen] = useState(false);
    const [activeDossier, setActiveDossier] = useState(null);
    const [dossiers, setDossiers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        setLoading(true);
        setError(null);

        getStudentDossiers()
            .then((rows) => {
                if (ignore) return;
                setDossiers(rows);
            })
            .catch((e) => {
                if (ignore) return;
                setError(e.message || "Dossiers laden mislukt");
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, []);

    const resolvedDossiers = useMemo(
        () =>
            dossiers.map((dossier) => ({
                ...dossier,
                img: resolveImage(dossier.image_url, dossier.name),
            })),
        [dossiers]
    );

    useEffect(() => {
        if (!resolvedDossiers.length) {
            setSelected(null);
            return;
        }

        setSelected((current) => {
            if (current && resolvedDossiers.some((dossier) => dossier.id === current)) {
                return current;
            }

            return resolvedDossiers[0].id;
        });
    }, [resolvedDossiers]);

    const openDetail = (dossier) => {
        setActiveDossier(dossier);
        setDetailOpen(true);
    };

    const closeDetail = () => {
        setDetailOpen(false);
        setActiveDossier(null);
    };

    return (
        <div className="dossier-app">
            <h2 className="dossier-app__header">{title}</h2>

            <div className="dossier-app__content">
                {loading ? <div className="dossier-app__state">Dossiers laden…</div> : null}

                {error ? (
                    <div className="dossier-app__state dossier-app__state--error">
                        <strong>Fout:</strong> {error}
                    </div>
                ) : null}

                <ul className="dossier-app__list">
                    {!loading &&
                        !error &&
                        resolvedDossiers.map((dossier) => {
                        const isCleared = !dossier.is_suspect;
                        const isSelected = selected === dossier.id;

                        return (
                            <li
                                key={dossier.id}
                                className={[
                                    "dossier-app__item",
                                    isSelected ? "dossier-app__item--selected" : "",
                                    dossier.is_eliminated ? "dossier-app__item--eliminated" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                onClick={() => setSelected(dossier.id)}
                                onDoubleClick={() => openDetail(dossier)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") openDetail(dossier);
                                }}
                            >
                                <img
                                    className="dossier-app__item-image"
                                    src={dossier.img}
                                    alt={dossier.name}
                                />

                                {dossier.is_eliminated ? (
                                    <div className="dossier-app__stamp" aria-hidden>
                                        Weggespeeld
                                    </div>
                                ) : null}

                                <span>{dossier.name}</span>

                                <small className="dossier-app__item-status">
                                    {dossier.is_eliminated
                                        ? "Weggespeeld"
                                        : isCleared
                                            ? "Niet verdacht"
                                            : "Verdacht"}
                                </small>

                                {isCleared && (
                                    <div className="dossier-app__not-hacker" aria-hidden>
                                        <img src="/svgs/cross.svg" alt="Not the hacker" />
                                    </div>
                                )}
                            </li>
                        );
                    })}

                    {showHackerTile ? (
                        <li
                            className="dossier-app__item dossier-app__item--hacker"
                            onDoubleClick={() => onStepComplete?.("dossierDone")}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    onStepComplete?.("dossierDone");
                                }
                            }}
                        >
                            <img
                                className="dossier-app__item-image"
                                src="/images/hacker.png"
                                alt="De hacker"
                            />
                            <span className="glitched">
                                h̴̗̬̚a̸̜̓͒c̴̠̯͂̇k̵̛̤͑e̸̦͑̓r̷̥̓̑
                            </span>
                        </li>
                    ) : null}
                </ul>

                {!loading && !error && resolvedDossiers.length === 0 ? (
                    <div className="dossier-app__state">Nog geen dossiers beschikbaar.</div>
                ) : null}
            </div>

            {detailOpen && activeDossier && (
                <DossierDetail
                    dossier={activeDossier}
                    onClose={closeDetail}
                />
            )}
        </div>
    );
};

export default DossierApp;
