import GlobeComp from "./GlobeComp";
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
    const topThreeGroups = groups.slice(0, 3);

    return (
        <div className="hallway-screen">
            <div className="hallway-screen__background" />
            <ConnectedBots initialConnectedAmount={connectedAmount} />

            <div className="hallway-screen__visual">
                <Polygon />
                <GlobeComp initialArcsData={visibleRoutes} />
                <RingAnimation />
            </div>

            <ScreenLeaderboard
                topThreeGroups={topThreeGroups}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default LeaderboardApp;
