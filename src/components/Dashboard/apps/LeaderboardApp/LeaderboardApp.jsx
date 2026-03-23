import { useAuth } from "../../../ProtectedRoute/_context/AuthContext";
import Leaderboard from "../../../Leaderboard/Leaderboard.jsx";
import { useLeaderboardData } from "../../../Leaderboard/useLeaderboardData";

const LeaderboardApp = () => {
    const { user } = useAuth();
    const { groups, loading, error } = useLeaderboardData();

    return (
        <Leaderboard
            groups={groups}
            loading={loading}
            error={error}
            currentTeamId={user?.teamId}
        />
    );
};

export default LeaderboardApp;
