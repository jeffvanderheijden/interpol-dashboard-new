import data from "./data";
import Polygon from "./Polygon";
import RingAnimation from "./RingAnimation";
import ConnectedBots from "./ConnectedBots";
import ScreenLeaderboard from "./ScreenLeaderboard";
import { useLeaderboardData } from "./useLeaderboardData";
import "./ScreenLeaderboard.css";

const LeaderboardApp = () => {
    const { groups, loading, error } = useLeaderboardData();
    const connectedAmount = groups.length;
    const visibleRoutes = data.slice(0, connectedAmount);

    return (
        <div className="hallway-screen">
            <div className="hallway-screen__background" />
            <div className="hallway-screen__grid" />
            <Polygon />
            <RingAnimation />

            <div className="hallway-screen__signal-stack">
                {visibleRoutes.slice(0, 5).map((route, index) => (
                    <div
                        key={`${route.startLat}-${route.startLng}-${index}`}
                        className="hallway-screen__signal-card"
                    >
                        <span>Route {index + 1}</span>
                        <strong>
                            {route.startLat.toFixed(1)}, {route.startLng.toFixed(1)}
                        </strong>
                    </div>
                ))}
            </div>

            <ConnectedBots initialConnectedAmount={connectedAmount} />
            <ScreenLeaderboard groups={groups} loading={loading} error={error} />
        </div>
    );
};

export default LeaderboardApp;
