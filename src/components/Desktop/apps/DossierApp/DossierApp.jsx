import { useState } from "react";
import "./DossierApp.scss";
import "./DossierDetail.scss";
import DossierDetail from "./DossierDetail";
import { formatName } from "./../../_helpers/dossierHelpers";

const DossierApp = ({ onStepComplete }) => {
    const [selected, setSelected] = useState(null);
    const [detailOpen, setDetailOpen] = useState(false);
    const [activeDossier, setActiveDossier] = useState(null);

    const images = import.meta.glob("/src/assets/docenten/*.{jpg,jpeg,png}", {
        eager: true,
    });

    const dossiers = Object.entries(images).map(([path, module]) => {
        const filename = path.split("/").pop();
        return {
            id: filename,
            name: formatName(filename),
            img: module.default || path,
        };
    });

    const notTheHacker = ["Hilda Uitvlught", "Brian Hokke", "Jeff van der Heijden"];

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
            <h2 className="dossier-app__header">Verdachte docenten</h2>

            <div className="dossier-app__content">
                <ul className="dossier-app__list">
                    {dossiers.map((dossier) => {
                        const isCleared = notTheHacker.includes(dossier.name);
                        const isSelected = selected === dossier.id;

                        return (
                            <li
                                key={dossier.id}
                                className={`dossier-app__item ${isSelected ? "dossier-app__item--selected" : ""}`}
                                onClick={() => setSelected(dossier.id)}     // enkelklik = highlight
                                onDoubleClick={() => openDetail(dossier)}   // dubbelklik = open detail
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
                                <span>{dossier.name}</span>

                                {isCleared && (
                                    <div className="dossier-app__not-hacker" aria-hidden>
                                        <img src="/svgs/cross.svg" alt="Not the hacker" />
                                    </div>
                                )}
                            </li>
                        );
                    })}

                    {/* Hacker tile */}
                    <li
                        className="dossier-app__item dossier-app__item--hacker"
                        onDoubleClick={() => onStepComplete("dossierDone")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                                onStepComplete("dossierDone");
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
                </ul>
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
