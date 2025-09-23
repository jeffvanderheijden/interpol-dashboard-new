import React from "react";
import "./DossierDetail.scss";
import { generateMotive } from "./../../_helpers/dossierHelpers";

/**
 * Props:
 * - dossier: { id, name, img } (zoals in DossierApp)
 * - onClose: () => void
 */
const DossierDetail = ({ dossier, onClose }) => {
    if (!dossier) return null;

    const motive = generateMotive(dossier.name);
    // voorbeeld extra data (kan later uit API komen)
    const extra = {
        afdeling: "Informatica",
        laatstGezien: "2025-03-12 02:14",
        mogelijkeWallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    };

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
                        <p><strong>Afdeling:</strong> {extra.afdeling}</p>
                        <p><strong>Laatst gezien (netwerk):</strong> {extra.laatstGezien}</p>
                        <p><strong>Bekende wallet:</strong> {extra.mogelijkeWallet}</p>

                        <h4>Waarom verdacht?</h4>
                        <p className="dossier-detail__motive">{motive}</p>
                    </div>
                </div>

            </div>

            {/* achtergrond-overlay */}
            <div className="dossier-detail__backdrop" onClick={onClose} />
        </div>
    );
};

export default DossierDetail;
