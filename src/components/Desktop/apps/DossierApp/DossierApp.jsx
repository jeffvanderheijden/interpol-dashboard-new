import { useState } from "react";
import "./DossierApp.scss";

const formatName = (filename) =>
    filename
        .replace(/\.(jpg|jpeg|png)$/i, "")
        .replace(/-/g, " ");

const DossierApp = ({ openApp, onStepComplete }) => {
    const [selected, setSelected] = useState(null);

    // alle docent-afbeeldingen ophalen
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

    // TODO: dit uit server/API halen
    const notTheHacker = ["Hilda Uitvlught", "Brian Hokke", "Jeff van der Heijden"];

    return (
        <div className="dossier-app">
            <h2 className="dossier-app__header">Verdachte docenten</h2>

            <div className="dossier-app__content">
                <ul className="dossier-app__list">
                    {dossiers.map((dossier) => {
                        const isSelected = selected === dossier.id;
                        const isCleared = notTheHacker.includes(dossier.name);

                        return (
                            <li
                                key={dossier.id}
                                className={`dossier-app__item ${isSelected ? "dossier-app__item--selected" : ""
                                    }`}
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelected(dossier.id)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        setSelected(dossier.id);
                                    }
                                }}
                            >
                                <img
                                    className="dossier-app__item-image"
                                    src={dossier.img}
                                    alt={dossier.name}
                                />
                                <span>{dossier.name}</span>
                                {isCleared && (
                                    <div className="dossier-app__not-hacker">
                                        <img src="/svgs/cross.svg" alt="Not the hacker" />
                                    </div>
                                )}
                            </li>
                        );
                    })}

                    {/* De echte hacker */}
                    <li
                        className="dossier-app__item dossier-app__item--hacker"
                        role="button"
                        tabIndex={0}
                        onClick={() => onStepComplete("dossierDone")}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                onStepComplete("dossierDone");
                            }
                        }}
                    >
                        <img
                            className="dossier-app__item-image"
                            src="/images/hacker.png"
                            alt="De hacker"
                        />
                        <span className="glitched">h̴̗̬̚a̸̜̓͒c̴̠̯͂̇k̵̛̤͑e̸̦͑̓r̷̥̓̑</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DossierApp;
