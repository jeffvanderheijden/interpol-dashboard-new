import React from "react";
import "./DossierDetail.scss";
import { API_BASE } from "../../../../api/_config";

const resolveMediaUrl = (value) => {
    if (!value) return null;
    return /^https?:\/\//i.test(value) ? value : `${API_BASE}${value}`;
};

const DossierDetail = ({ dossier, onClose }) => {
    if (!dossier) return null;

    const description = dossier.description?.trim() || "";
    const videoUrl = resolveMediaUrl(dossier.video_url);

    return (
        <div className="dossier-detail" role="dialog" aria-modal="true">
            <div className="dossier-detail__panel">
                <div className="dossier-detail__header">
                    <h3 className="dossier-detail__title">{dossier.name}</h3>
                    <button
                        className="dossier-detail__close win95-button"
                        aria-label="Sluit"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="dossier-detail__body">
                    <div className="dossier-detail__media">
                        <img src={dossier.img} alt={dossier.name} />
                    </div>

                    <div className="dossier-detail__info">
                        {dossier.is_eliminated ? (
                            <div className="dossier-detail__notice">
                                Deze docent is weggespeeld.
                            </div>
                        ) : null}

                        <div className="dossier-detail__badges">
                            <span
                                className={`dossier-detail__badge ${
                                    dossier.is_suspect
                                        ? "dossier-detail__badge--suspect"
                                        : "dossier-detail__badge--cleared"
                                }`}
                            >
                                {dossier.is_suspect ? "Nog verdacht" : "Niet verdacht"}
                            </span>

                            <span
                                className={`dossier-detail__badge ${
                                    dossier.is_eliminated
                                        ? "dossier-detail__badge--eliminated"
                                        : "dossier-detail__badge--active"
                                }`}
                            >
                                {dossier.is_eliminated ? "Weggespeeld" : "Actief"}
                            </span>
                        </div>

                        {description ? (
                            <>
                                <h4>Dossierinformatie</h4>
                                <p className="dossier-detail__motive">{description}</p>
                            </>
                        ) : null}

                        {videoUrl ? (
                            <>
                                <h4>Video</h4>
                                <div className="dossier-detail__video">
                                    <video controls>
                                        <source src={videoUrl} />
                                        Je browser ondersteunt deze video niet.
                                    </video>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>

            </div>

            <div className="dossier-detail__backdrop" onClick={onClose} />
        </div>
    );
};

export default DossierDetail;
