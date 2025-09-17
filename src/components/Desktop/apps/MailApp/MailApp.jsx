import { useEffect, useState, useContext } from 'react';
import { GameContext } from './../../../../context/GameContext';
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
            {/* Sidebar */}
            <div className="mail-app__sidebar">
                {(!mails || mails.length === 0) && (
                    <div className="mail-item empty">Geen berichten</div>
                )}
                {mails && mails.map((mail) => (
                    <div
                        key={mail.id}
                        className="mail-item"
                        onClick={() => setSelected(mail)}
                    >
                        <strong>{mail.subject}</strong>
                        <small>{mail.from}</small>
                    </div>
                ))}
            </div>

            {/* Mail body */}
            <div className="mail-app__body">
                {selected ? (
                    <>
                        <h3>{selected.subject}</h3>
                        <p><strong>From:</strong> {selected.from}</p>
                        <div>{selected.body}</div>
                    </>
                ) : (
                    <div className="empty">Selecteer een bericht om te lezen.</div>
                )}
            </div>
        </div>
    );
}

export default MailApp;
