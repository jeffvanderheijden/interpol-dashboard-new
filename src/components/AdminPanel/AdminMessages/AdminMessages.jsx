import { useEffect, useState } from "react";
import { getAdminMessages, deleteAdminMessage } from "../../../api/messages";

import AdminCreateMessage from "./AdminCreateMessage";
import AdminEditMessage from "./AdminEditMessage";

import "./AdminMessages.scss";

export default function AdminMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [createOpen, setCreateOpen] = useState(false);
    const [editMessage, setEditMessage] = useState(null);

    const loadMessages = () => {
        setLoading(true);
        setError(null);

        getAdminMessages()
            .then((rows) => setMessages(rows))
            .catch((e) => setError(e.message || "Failed to load messages"))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        loadMessages();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Weet je zeker dat je dit bericht wilt verwijderen?")) return;

        try {
            await deleteAdminMessage(id);
            setMessages((prev) => prev.filter((m) => m.id !== id));
        } catch (e) {
            alert(e.message || "Verwijderen mislukt");
        }
    };

    return (
        <div className="admin-messages">
            <div className="admin-header">
                <h1>Berichten</h1>

                <button className="new-message-btn" onClick={() => setCreateOpen(true)}>
                    + Nieuw bericht
                </button>
            </div>

            {loading && <div className="admin-messages__state">Berichten laden…</div>}

            {error && (
                <div className="admin-messages__state admin-messages__state--error">
                    <strong>Fout:</strong> {error}
                </div>
            )}

            {!loading && !error && (
                <div className="message-list">
                    {messages.length === 0 ? (
                        <div className="admin-messages__empty">Nog geen berichten.</div>
                    ) : (
                        messages.map((msg) => (
                            <div className="message-card" key={msg.id}>
                                <div className="message-left">
                                    <div className="message-badge">
                                        {msg.media_type === "image"
                                            ? "IMG"
                                            : msg.media_type === "video"
                                                ? "VID"
                                                : "—"}
                                    </div>

                                    <div className="message-info">
                                        <h2>{msg.title}</h2>

                                        <p className="message-meta">
                                            <span>
                                                <strong>Gemaakt:</strong>{" "}
                                                {msg.created_at ? new Date(msg.created_at).toLocaleString("nl-NL") : "—"}
                                            </span>

                                            <span>
                                                {" • "}
                                                <strong>Actief vanaf:</strong>{" "}
                                                {msg.publish_at ? new Date(msg.publish_at).toLocaleString("nl-NL") : "—"}
                                            </span>

                                            {msg.media_url ? <span>{" • bijlage"}</span> : null}
                                        </p>


                                        <p className="message-snippet">
                                            {(msg.body || "").slice(0, 180)}
                                            {(msg.body || "").length > 180 ? "…" : ""}
                                        </p>
                                    </div>
                                </div>

                                <div className="message-right">
                                    <div className="message-actions">
                                        <button
                                            className="view-btn"
                                            onClick={() => setEditMessage(msg)}
                                        >
                                            Bewerken
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(msg.id)}
                                        >
                                            Verwijderen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {createOpen && (
                <AdminCreateMessage
                    onClose={() => setCreateOpen(false)}
                    onSaved={() => {
                        setCreateOpen(false);
                        loadMessages();
                    }}
                />
            )}

            {editMessage && (
                <AdminEditMessage
                    message={editMessage}
                    onClose={() => setEditMessage(null)}
                    onSaved={() => {
                        setEditMessage(null);
                        loadMessages();
                    }}
                />
            )}
        </div>
    );
}
