import { useEffect, useState, useContext } from 'react';
import { GameContext } from './../../_context/GameContext';
import './MailApp.scss';

const MailApp = () => {
    const { mails } = useContext(GameContext);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (mails && mails.length > 0) {
            setSelected(mails[mails.length - 1]);
        } else {
            setSelected(null);
        }
    }, [mails]);

    return (
        <div className="mail-app">
            <div className="mail-app__sidebar">
                {(!mails || mails.length === 0) && (
                    <div className="mail-item empty">Geen berichten</div>
                )}
                {mails && mails.map((mail) => (
                    <div
                        key={mail.id}
                        className={`mail-item ${selected && selected.id === mail.id ? 'selected' : ''}`}
                        onClick={() => setSelected(mail)}
                    >
                        <strong>{mail.subject}</strong>
                        <small>{mail.from}</small>
                    </div>
                ))}
            </div>

            <div className="mail-app__body">
                {selected ? (
                    <>
                        <div className="mail-app__header">
                            <h3>{selected.subject}</h3>
                            <p><strong>Van:</strong> {selected.from}</p>
                        </div>
                        <div className="mail-app__body-content">
                            {selected.body}
                            <br />
                            <br />
                            {selected.attachement && (
                                <div className="attachment">
                                    <strong>Bijlage:</strong>
                                    <br />
                                    <a href={selected.attachement} target="_blank" rel="noopener noreferrer">
                                        {selected.attachement}
                                    </a>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="empty">Selecteer een bericht om te lezen.</div>
                )}
            </div>
        </div>
    );
}

export default MailApp;