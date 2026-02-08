import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../ProtectedRoute/_context/AuthContext";
import { getTeam } from "../../../../api/groups";
import "./TeamInfoApp.scss";

const TeamInfoApp = () => {
    const { user } = useAuth();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user?.teamId) {
            setError("Geen team gekoppeld aan gebruiker");
            setLoading(false);
            return;
        }

        let cancelled = false;

        setLoading(true);
        setError(null);

        getTeam(user.teamId)
            .then((res) => {
                if (!cancelled) setData(res);
            })
            .catch((err) => {
                if (!cancelled) setError(err?.message || "Failed to load team");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [user?.teamId]);

    const team = data?.team ?? null;
    const members = useMemo(
        () => (Array.isArray(data?.members) ? data.members : []),
        [data?.members]
    );
    const challenges = useMemo(
        () => (Array.isArray(data?.challenges) ? data.challenges : []),
        [data?.challenges]
    );

    const totalPoints = useMemo(() => {
        return challenges.reduce(
            (sum, c) => sum + (c.points || 0) - (c.point_deduction || 0),
            0
        );
    }, [challenges]);

    // later uitbreidbaar, nu fixed zoals je had
    const statusClass = "active";

    if (loading) {
        return <div className="teaminfo-app">Teaminformatie laden…</div>;
    }

    if (error) {
        return (
            <div className="teaminfo-app">
                <strong>Fout:</strong> {error}
            </div>
        );
    }

    if (!team) {
        return <div className="teaminfo-app">Geen teamdata ontvangen.</div>;
    }

    return (
        <div className="teaminfo-app">
            <div className="teaminfo-app__content">
                {/* Team */}
                <section className="teaminfo-block">
                    <div className="teaminfo-block__top">
                        <div>
                            <h3>{team.name}</h3>
                            <p className="team-code">Team ID: {team.id}</p>

                            <p>
                                Status:
                                <span className={`team-status ${statusClass}`}>Actief</span>
                            </p>

                            <p>Klas: {team.class}</p>
                            <p>
                                Aangemaakt op:{" "}
                                {team.created_at
                                    ? new Date(team.created_at).toLocaleDateString("nl-NL")
                                    : "Onbekend"}
                            </p>
                        </div>

                        <div className="teaminfo-teamimage">
                            {team.image_url ? (
                                <img
                                    src={team.image_url}
                                    alt={team.name}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            ) : (
                                <div className="teaminfo-teamimage__empty">Geen foto</div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Members */}
                <section className="teaminfo-block">
                    <h4>Teamleden</h4>

                    {members.length === 0 ? (
                        <p>Geen teamleden gevonden.</p>
                    ) : (
                        <ul className="team-members">
                            {members.map((member) => (
                                <li key={member.student_number}>
                                    <strong>{member.name}</strong>{" "}
                                    <span className="team-code">#{member.student_number}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>

                {/* Progress */}
                <section className="teaminfo-block">
                    <h4>Voortgang</h4>
                    <p>Challenges: {challenges.length}</p>
                    <p>Punten: {totalPoints}</p>
                </section>
            </div>
        </div>
    );
};

export default TeamInfoApp;
