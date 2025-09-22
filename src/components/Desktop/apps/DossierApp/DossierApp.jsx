import { useState } from 'react';
import './DossierApp.scss';

const DossierApp = ({ openApp, onStepComplete }) => {
    const [selected, setSelected] = useState(null);

    const images = import.meta.glob("/src/assets/docenten/*.{jpg,jpeg,png}", { eager: true });

    const dossiers = Object.entries(images).map(([path, module]) => {
        const filename = path.split("/").pop();
        return {
            id: filename,
            name: filename.replace(/\.(jpg|jpeg|png)$/i, "").replace(/-/g, " "),
            img: module.default || path,
        };
    });

    // TODO get this list from server
    const notTheHacker = [
        'Hilda Uitvlught', 
        'Brian Hokke', 
        'Jeff van der Heijden'
    ];

    return (
        <div className="dossier-app">
            <h2 className="dossier-app__header">Verdachte docenten</h2>

            <div className="dossier-app__content">
                <ul className="dossier-app__list">
                    {dossiers.map((dossier) => (
                        <li
                            key={dossier.id}
                            className="dossier-app__item"
                            onClick={() => setSelected(dossier.id)}
                        >   
                            <img className="dossier-app__item-image" src={dossier.img} alt={dossier.name} />
                            <span>{dossier.name}<br /></span>
                            {notTheHacker.includes(dossier.name) && (
                                <div className="dossier-app__not-hacker">
                                    <img src="/svgs/cross.svg" alt="Not the hacker" />
                                </div>
                            )}
                        </li>
                    ))}
                    <li
                        className={`dossier-app__item`}
                        onClick={() => { onStepComplete('dossierDone') }}
                    >
                        <img className="dossier-app__item-image" src="/images/hacker.png" alt="" />
                        <span>h̴̗̬̚a̸̜̓͒c̴̠̯͂̇k̵̛̤͑e̸̦͑̓r̷̥̓̑<br /></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DossierApp;