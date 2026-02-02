import { useEffect, useState, useContext } from "react";
import { GameContext } from "./../../../Desktop/_context/GameContext";
import "./MailApp.scss";

const MailApp = () => {
    const { mails: contextMails } = useContext(GameContext);

    const [mails, setMails] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const mapApiMessageToMail = (msg) => ({
        id: msg.id,
        subject: msg.title || "(Geen onderwerp)",
        from: "Admin",
        body: msg.body || "",
        attachment: msg.media_url || null,
        mediaType: msg.media_type || null,
        createdAt: msg.created_at || null,
    });

    // Load mails: prefer context, otherwise fetch from API
    useEffect(() => {
        let cancelled = false;

        async function loadMailsFromApi() {
            setLoading(true);
            setError("");

            try {
                const res = await fetch("/api/messages", {
                    credentials: "include",
                });

                if (!res.ok) {
                    throw new Error(`Request failed (${res.status})`);
                }

                const data = await res.json();
                const mapped = Array.isArray(data)
                    ? data.map(mapApiMessageToMail)
                    : [];

                // Old → new, so "last mail" logic stays correct
                mapped.sort((a, b) => {
                    const ta = new Date(a.createdAt).getTime();
                    const tb = new Date(b.createdAt).getTime();
                    return (Number.isNaN(ta) ? 0 : ta) - (Number.isNaN(tb) ? 0 : tb);
                });

                if (!cancelled) {
                    setMails(mapped);
                }
            } catch (e) {
                if (!cancelled) {
                    setError("Kon berichten niet laden");
                    setMails([]);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        if (Array.isArray(contextMails) && contextMails.length > 0) {
            setMails(contextMails);
            setLoading(false);
            setError("");
        } else {
            loadMailsFromApi();
        }

        return () => {
            cancelled = true;
        };
    }, [contextMails]);

    // Selecteer standaard de laatste mail
    useEffect(() => {
        if (mails.length > 0) {
            setSelected(mails[mails.length - 1]);
        } else {
            setSelected(null);
        }
    }, [mails]);

    return (
        <div className="mail-app">
            <aside className="mail-app__sidebar">
                {loading && (
                    <div className="mail-item mail-item--empty">
                        Berichten laden…
                    </div>
                )}

                {!loading && error && (
                    <div className="mail-item mail-item--empty">
                        {error}
                    </div>
                )}

                {!loading && !error && mails.length === 0 && (
                    <div className="mail-item mail-item--empty">
                        Geen berichten
                    </div>
                )}

                {!loading && !error &&
                    mails.map((mail) => (
                        <button
                            key={mail.id}
                            type="button"
                            className={`mail-item ${selected?.id === mail.id ? "mail-item--selected" : ""
                                }`}
                            onClick={() => setSelected(mail)}
                        >
                            <strong className="mail-item__subject">
                                {mail.subject}
                            </strong>
                            <small className="mail-item__from">
                                {mail.from}
                            </small>
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
                            {selected.body ? (
                                <p>{selected.body}</p>
                            ) : (
                                <p><em>(Leeg bericht)</em></p>
                            )}

                            {selected.attachment && (
                                <div className="mail-app__attachment">
                                    <strong>Bijlage:</strong>
                                    <br />

                                    {selected.mediaType === "image" ? (
                                        <a
                                            href={selected.attachment}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="mail-app__attachment-image"
                                                src={selected.attachment}
                                                alt="Bijlage"
                                            />
                                        </a>
                                    ) : (
                                        <a
                                            href={selected.attachment}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {selected.attachment}
                                        </a>
                                    )}
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
