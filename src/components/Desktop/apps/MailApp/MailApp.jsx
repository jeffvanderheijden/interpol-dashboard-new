import { useEffect, useState, useContext } from "react";
import { GameContext } from "./../../_context/GameContext";
import "./MailApp.scss";

const MailApp = () => {
    const { mails } = useContext(GameContext);
    const [selected, setSelected] = useState(null);

    // selecteer standaard de laatste mail
    useEffect(() => {
        if (mails && mails.length > 0) {
            setSelected(mails[mails.length - 1]);
        } else {
            setSelected(null);
        }
    }, [mails]);

    return (
        <div className="mail-app">
            <aside className="mail-app__sidebar">
                {(!mails || mails.length === 0) && (
                    <div className="mail-item mail-item--empty">Geen berichten</div>
                )}

                {mails &&
                    mails.map((mail) => (
                        <button
                            key={mail.id}
                            type="button"
                            className={`mail-item ${selected && selected.id === mail.id ? "mail-item--selected" : ""
                                }`}
                            onClick={() => setSelected(mail)}
                        >
                            <strong className="mail-item__subject">{mail.subject}</strong>
                            <small className="mail-item__from">{mail.from}</small>
                        </button>
                    ))}
            </aside>

            <main className="mail-app__body">
                {selected ? (
                    <>
                        <header className="mail-app__header">
                            <h3>{selected.subject}</h3>
                            <p>
                                <strong>Van:</strong> {selected.from}
                            </p>
                        </header>

                        <section className="mail-app__body-content">
                            <p>{selected.body || <em>(Leeg bericht)</em>}</p>

                            {selected.attachment && (
                                <div className="mail-app__attachment">
                                    <strong>Bijlage:</strong>
                                    <br />
                                    <a
                                        href={selected.attachment}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {selected.attachment}
                                    </a>
                                </div>
                            )}
                        </section>
                    </>
                ) : (
                    <div className="mail-app__empty">
                        Selecteer een bericht om te lezen.
                    </div>
                )}
            </main>
        </div>
    );
};

export default MailApp;
