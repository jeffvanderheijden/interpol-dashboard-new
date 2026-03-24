import Crown from "./crown.svg";
import "./ScreenLeaderboard.css";

function sortTopThree(topThreeGroups = []) {
    return [...topThreeGroups].sort((a, b) => {
        const pointsDifference =
            Number(b.total_points || 0) - Number(a.total_points || 0);

        if (pointsDifference !== 0) {
            return pointsDifference;
        }

        return Number(b.id || 0) - Number(a.id || 0);
    });
}

function renderAvatar(team, alt) {
    if (team.image_url) {
        return <img src={team.image_url} alt={alt} />;
    }

    const initials = String(team.name || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() || "")
        .join("");

    return (
        <div className="imgFallback" aria-hidden="true">
            {initials || "??"}
        </div>
    );
}

export default function ScreenLeaderboard({
    topThreeGroups = [],
    loading = false,
    error = null,
}) {
    const sortedGroups = sortTopThree(topThreeGroups);
    const highestPoints = sortedGroups[0] || null;
    const secondHighestPoints = sortedGroups[1] || null;
    const lowestPoints = sortedGroups[2] || null;

    if (loading) {
        return <div className="leaderBoardState">Leaderboard laden...</div>;
    }

    if (error) {
        return (
            <div className="leaderBoardState leaderBoardState--error">
                <strong>Fout:</strong> {error}
            </div>
        );
    }

    if (!highestPoints && !secondHighestPoints && !lowestPoints) {
        return <div className="leaderBoardState">Nog geen teams gevonden.</div>;
    }

    return (
        <div className="leaderBoard leaderBoard--hallway">
            <div className="leaderStage">
                {lowestPoints && (
                    <div className="podium third">
                        <div className="avatar">
                            <div className="imgWrapper">
                                {renderAvatar(lowestPoints, "third")}
                            </div>
                            <span>3</span>
                        </div>
                        <h1 className="teamName">{lowestPoints.name}</h1>
                        <div className="teamClass">{lowestPoints.class}</div>
                        <h1 className="score">{Number(lowestPoints.total_points) || 0}</h1>
                    </div>
                )}
                {highestPoints && (
                    <div className="podium first">
                        <div className="avatar">
                            <img className="crown" src={Crown} alt="Leader" />
                            <div className="imgWrapper">
                                {renderAvatar(highestPoints, "first")}
                            </div>
                            <span>1</span>
                        </div>
                        <h1 className="teamName">{highestPoints.name}</h1>
                        <div className="teamClass">{highestPoints.class}</div>
                        <h1 className="score">{Number(highestPoints.total_points) || 0}</h1>
                    </div>
                )}
                {secondHighestPoints && (
                    <div className="podium second">
                        <div className="avatar">
                            <div className="imgWrapper">
                                {renderAvatar(secondHighestPoints, "second")}
                            </div>
                            <span>2</span>
                        </div>
                        <h1 className="teamName">{secondHighestPoints.name}</h1>
                        <div className="teamClass">{secondHighestPoints.class}</div>
                        <h1 className="score">{Number(secondHighestPoints.total_points) || 0}</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
