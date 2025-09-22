import { useState } from 'react';
import './DossierApp.scss';

const DossierApp = ({ openApp, onStepComplete }) => {
    const [selected, setSelected] = useState(null);

    const suspects = Array(10).fill({
        name: 'Jan Jansen',
        title: 'Technisch Docent',
        img: '/docenten/user.webp'
    });

    return (
        <div className="dossier-app">
            <h2 className="dossier-app__header">Verdachte docenten</h2>
            
            <div className="dossier-app__content">
                <ul className="dossier-app__list">
                    {suspects.map((suspect, index) => (
                        <li
                            key={index}
                            className={`dossier-app__item ${selected === index ? 'selected' : ''}`}
                            onClick={() => setSelected(index)}
                        >
                            <img src={suspect.img} alt={suspect.name} />
                            <span>{suspect.name}<br/>{suspect.title}</span>
                        </li>
                    ))}
                </ul>

                <div className="dossier-app__glitch-container">
                    <div
                        className="glitch-image"
                        onClick={() => { onStepComplete('dossierDone') }}
                    >
                        <img src="/glitch-image.png" alt="Geglitchte afbeelding, klik om te openen" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DossierApp;