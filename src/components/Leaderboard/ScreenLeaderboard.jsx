import "./ScreenLeaderboard.css";

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
                className="screen-leaderboard__avatar-image"
                src={group.image_url}
                alt={group.name}
                loading="lazy"
            />
        );
    }

    return (
        <span className="screen-leaderboard__avatar-fallback">
            {getTeamInitials(group.name)}
        </span>
    );
}

function PodiumCard({ group, position }) {
    if (!group) {
        return (
            <div className="screen-leaderboard__podium screen-leaderboard__podium--empty" />
        );
    }

    const positionClass = ["first", "second", "third"][position - 1] || "";

    return (
        <article
            className={`screen-leaderboard__podium screen-leaderboard__podium--${positionClass}`}
        >
            <div className="screen-leaderboard__rank-badge">#{position}</div>
            <div className="screen-leaderboard__avatar">
                <TeamAvatar group={group} />
            </div>
            <div className="screen-leaderboard__podium-copy">
                <h2>{group.name}</h2>
                <p>{group.class || "Onbekende klas"}</p>
                <strong>{formatPoints(group.total_points)}</strong>
            </div>
        </article>
    );
}

export default function ScreenLeaderboard({
    groups = [],
    loading = false,
    error = null,
}) {
    const sortedGroups = [...groups].sort((a, b) => {
        const pointsDifference =
            Number(b.total_points || 0) - Number(a.total_points || 0);

        if (pointsDifference !== 0) {
            return pointsDifference;
        }

        return Number(b.id || 0) - Number(a.id || 0);
    });

    const podium = sortedGroups.slice(0, 3);
    const rankingList = sortedGroups.slice(0, 8);

    if (loading) {
        return <div className="screen-leaderboard__state">Leaderboard laden...</div>;
    }

    if (error) {
        return (
            <div className="screen-leaderboard__state screen-leaderboard__state--error">
                <strong>Fout:</strong> {error}
            </div>
        );
    }

    if (sortedGroups.length === 0) {
        return <div className="screen-leaderboard__state">Nog geen teams gevonden.</div>;
    }

    return (
        <div className="screen-leaderboard">
            <header className="screen-leaderboard__header">
                <div>
                    <p className="screen-leaderboard__eyebrow">Interpol Network</p>
                    <h1>Hallway Leaderboard</h1>
                </div>
                <div className="screen-leaderboard__stats">
                    <div>
                        <span>Teams online</span>
                        <strong>{sortedGroups.length}</strong>
                    </div>
                    <div>
                        <span>Hoogste score</span>
                        <strong>{formatPoints(podium[0]?.total_points)}</strong>
                    </div>
                </div>
            </header>

            <section className="screen-leaderboard__stage">
                <PodiumCard group={podium[1]} position={2} />
                <PodiumCard group={podium[0]} position={1} />
                <PodiumCard group={podium[2]} position={3} />
            </section>

            <aside className="screen-leaderboard__rail">
                <div className="screen-leaderboard__rail-header">
                    <span>Live standings</span>
                    <span>Top {rankingList.length}</span>
                </div>

                <div className="screen-leaderboard__rail-list">
                    {rankingList.map((group, index) => (
                        <div key={group.id} className="screen-leaderboard__rail-row">
                            <span className="screen-leaderboard__rail-rank">
                                #{group.rank || index + 1}
                            </span>
                            <div className="screen-leaderboard__rail-team">
                                <strong>{group.name}</strong>
                                <span>{group.class || "Onbekende klas"}</span>
                            </div>
                            <strong className="screen-leaderboard__rail-score">
                                {formatPoints(group.total_points)}
                            </strong>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
}
