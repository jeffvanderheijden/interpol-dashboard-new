import "./ScreenLeaderboard.css";

function getTopThree(topThreeGroups = []) {
    const sortedGroups = [...topThreeGroups].sort((a, b) => {
        const pointsDifference =
            Number(b.total_points || 0) - Number(a.total_points || 0);

        if (pointsDifference !== 0) {
            return pointsDifference;
        }

        return Number(b.id || 0) - Number(a.id || 0);
    });

    return {
        first: sortedGroups[0] || null,
        second: sortedGroups[1] || null,
        third: sortedGroups[2] || null,
    };
}

function getInitials(name = "") {
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

function TeamAvatar({ team, place }) {
    return (
        <div className="hallway-podium__avatar-frame">
            {team.image_url ? (
                <img src={team.image_url} alt={team.name} />
            ) : (
                <span className="hallway-podium__avatar-fallback">
                    {getInitials(team.name)}
                </span>
            )}
            <span className="hallway-podium__place">{place}</span>
        </div>
    );
}

function PodiumCard({ team, place, variant }) {
    if (!team) return null;

    return (
        <article className={`hallway-podium__card hallway-podium__card--${variant}`}>
            {variant === "first" ? (
                <div className="hallway-podium__crown" aria-hidden="true">
                    ♛
                </div>
            ) : null}
            <TeamAvatar team={team} place={place} />
            <h2 className="hallway-podium__name">{team.name}</h2>
            <div className="hallway-podium__class">{team.class || "Onbekende klas"}</div>
            <h3 className="hallway-podium__score">{Number(team.total_points) || 0}</h3>
        </article>
    );
}

export default function ScreenLeaderboard({
    topThreeGroups = [],
    loading = false,
    error = null,
}) {
    const { first, second, third } = getTopThree(topThreeGroups);

    if (loading) {
        return <div className="hallway-podium hallway-podium--state">Leaderboard laden...</div>;
    }

    if (error) {
        return (
            <div className="hallway-podium hallway-podium--state hallway-podium--error">
                <strong>Fout:</strong> {error}
            </div>
        );
    }

    if (!first && !second && !third) {
        return <div className="hallway-podium hallway-podium--state">Nog geen teams gevonden.</div>;
    }

    return (
        <div className="hallway-podium">
            <div className="hallway-podium__title">
                <p>Interpol Global Threat Monitor</p>
                <h1>Leaderboard</h1>
            </div>

            <div className="hallway-podium__stage">
                <PodiumCard team={third} place={3} variant="third" />
                <PodiumCard team={first} place={1} variant="first" />
                <PodiumCard team={second} place={2} variant="second" />
            </div>
        </div>
    );
}
