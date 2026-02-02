import { useEffect, useState } from "react";
import { getStudentMessages } from "../../../../api/messages";
import { API_BASE } from "./../../../../api/_config";
import "./MailApp.scss";

const MailApp = () => {
    const [mails, setMails] = useState([]);
    const [selected, setSelected] = useState(null);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const mapMessageToMail = (msg) => ({
        id: msg.id,
        subject: msg.title || "(Geen onderwerp)",
        from: "Admin",
        body: msg.body || "",
        attachment: msg.media_url || null,     // verwacht: "/uploads/messages/...."
        mediaType: msg.media_type || null,
        createdAt: msg.created_at || null,
    });

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError("");

                const data = await getStudentMessages();
                const mapped = Array.isArray(data) ? data.map(mapMessageToMail) : [];

                // oud -> nieuw zodat mails[mails.length - 1] de nieuwste is
                mapped.sort((a, b) => {
                    const ta = new Date(a.createdAt).getTime();
                    const tb = new Date(b.createdAt).getTime();
                    return (Number.isNaN(ta) ? 0 : ta) - (Number.isNaN(tb) ? 0 : tb);
                });

                if (!cancelled) setMails(mapped);
            } catch (err) {
                console.error(err);
                if (!cancelled) setError("Kon berichten niet laden.");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();

        return () => {
            cancelled = true;
        };
    }, []);

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
                {loading && (
                    <div className="mail-item mail-item--empty">Berichten laden...</div>
                )}

                {!loading && error && (
                    <div className="mail-item mail-item--empty">{error}</div>
                )}

                {!loading && !error && (!mails || mails.length === 0) && (
                    <div className="mail-item mail-item--empty">Geen berichten</div>
                )}

                {!loading && !error && mails &&
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

                                    {selected.mediaType === "image" ? (
                                        <a
                                            href={`${API_BASE}${selected.attachment}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="mail-app__attachment-image"
                                                src={`${API_BASE}${selected.attachment}`}
                                                alt="Bijlage"
                                            />
                                        </a>
                                    ) : (
                                        <a
                                            href={`${API_BASE}${selected.attachment}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {`${API_BASE}${selected.attachment}`}
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
