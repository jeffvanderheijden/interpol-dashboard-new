import "./Leaderboard.css";

const PODIUM_ORDER = [1, 0, 2];

function formatPoints(points) {
    return `${Number(points) || 0} pt`;
}

function getTeamInitials(name = "") {
    const parts = String(name)
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2);

    if (parts.length === 0) {
        return "??";
    }

    return parts.map((part) => part[0]?.toUpperCase() || "").join("");
}

function TeamAvatar({ group }) {
    if (group.image_url) {
        return (
            <img
                className="leaderboard__avatar-image"
                src={group.image_url}
                alt={group.name}
                loading="lazy"
            />
        );
    }

    return (
        <span className="leaderboard__avatar-fallback">
            {getTeamInitials(group.name)}
        </span>
    );
}

function PodiumCard({ group, position, currentTeamId }) {
    if (!group) return null;

    const positionClass = ["first", "second", "third"][position - 1] || "";
    const isCurrentTeam = Number(currentTeamId) === Number(group.id);

    return (
        <article
            className={`leaderboard__podium leaderboard__podium--${positionClass}${isCurrentTeam ? " is-current-team" : ""}`}
        >
            <div className="leaderboard__podium-rank">{position}</div>
            <div className="leaderboard__avatar">
                <TeamAvatar group={group} />
            </div>
            <div className="leaderboard__podium-copy">
                <h3>{group.name}</h3>
                <p>{group.class || "Onbekende klas"}</p>
                <strong>{formatPoints(group.total_points)}</strong>
            </div>
            {isCurrentTeam ? (
                <span className="leaderboard__badge">Jouw team</span>
            ) : null}
        </article>
    );
}

const Leaderboard = ({
    groups = [],
    loading = false,
    error = null,
    currentTeamId = null,
}) => {
    const sortedGroups = [...groups].sort((a, b) => {
        const pointsDifference =
            Number(b.total_points || 0) - Number(a.total_points || 0);

        if (pointsDifference !== 0) {
            return pointsDifference;
        }

        return Number(b.id || 0) - Number(a.id || 0);
    });

    const podium = sortedGroups.slice(0, 3);

    if (loading) {
        return <div className="leaderboard-shell">Leaderboard laden…</div>;
    }

    if (error) {
        return (
            <div className="leaderboard-shell leaderboard-shell--error">
                <strong>Fout:</strong> {error}
            </div>
        );
    }

    if (sortedGroups.length === 0) {
        return (
            <div className="leaderboard-shell">
                Nog geen teams gevonden voor het leaderboard.
            </div>
        );
    }

    return (
        <div className="leaderboard-shell">
            <div className="leaderboard">
                <section className="leaderboard__hero">
                    <div>
                        <p className="leaderboard__eyebrow">Interpol Ranking</p>
                        <h2>Leaderboard</h2>
                        <p className="leaderboard__summary">
                            De topteams worden live opgebouwd op basis van de
                            behaalde challengepunten.
                        </p>
                    </div>
                    <div className="leaderboard__hero-stats">
                        <div>
                            <span>Teams</span>
                            <strong>{sortedGroups.length}</strong>
                        </div>
                        <div>
                            <span>Koploper</span>
                            <strong>{formatPoints(podium[0]?.total_points)}</strong>
                        </div>
                    </div>
                </section>

                <section className="leaderboard__stage" aria-label="Podium">
                    {PODIUM_ORDER.map((podiumIndex) => (
                        <PodiumCard
                            key={podiumIndex}
                            group={podium[podiumIndex]}
                            position={podiumIndex + 1}
                            currentTeamId={currentTeamId}
                        />
                    ))}
                </section>

                <section className="leaderboard__rankings">
                    <div className="leaderboard__rankings-header">
                        <h3>Volledige ranglijst</h3>
                        <span>Automatisch ververst</span>
                    </div>

                    <div className="leaderboard__table" role="table">
                        {sortedGroups.map((group, index) => {
                            const isCurrentTeam =
                                Number(currentTeamId) === Number(group.id);

                            return (
                                <div
                                    key={group.id}
                                    className={`leaderboard__row${isCurrentTeam ? " is-current-team" : ""}`}
                                    role="row"
                                >
                                    <div className="leaderboard__row-rank" role="cell">
                                        #{group.rank || index + 1}
                                    </div>
                                    <div className="leaderboard__row-team" role="cell">
                                        <div className="leaderboard__avatar leaderboard__avatar--small">
                                            <TeamAvatar group={group} />
                                        </div>
                                        <div>
                                            <strong>{group.name}</strong>
                                            <span>{group.class || "Onbekende klas"}</span>
                                        </div>
                                    </div>
                                    <div className="leaderboard__row-members" role="cell">
                                        {group.member_count || 0} leden
                                    </div>
                                    <div className="leaderboard__row-points" role="cell">
                                        {formatPoints(group.total_points)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Leaderboard;
