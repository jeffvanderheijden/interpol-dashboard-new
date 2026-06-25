import React from "react";
import "./DossierDetail.scss";
import { generateMotive } from "./../../_helpers/dossierHelpers";
const DossierDetail = ({ dossier, onClose }) => {
    if (!dossier) return null;

    const description = dossier.description?.trim() || generateMotive(dossier.name);

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

                        <h4>Dossierinformatie</h4>
                        <p className="dossier-detail__motive">{description}</p>
                    </div>
                </div>

            </div>

            <div className="dossier-detail__backdrop" onClick={onClose} />
        </div>
    );
};

export default DossierDetail;
