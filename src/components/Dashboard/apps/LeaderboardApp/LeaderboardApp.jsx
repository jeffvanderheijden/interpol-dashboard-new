import { useEffect, useState } from "react";
import { getLeaderboardGroups } from "../../../../api/groups";
import { useAuth } from "../../../ProtectedRoute/_context/AuthContext";
import Leaderboard from "../../../Leaderboard/Leaderboard.jsx";

const REFRESH_INTERVAL_MS = 60_000;

const LeaderboardApp = () => {
    const { user } = useAuth();
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        const loadLeaderboard = async ({ silent = false } = {}) => {
            if (!silent) {
                setLoading(true);
            }

            try {
                const data = await getLeaderboardGroups();

                if (!cancelled) {
                    setGroups(Array.isArray(data) ? data : []);
                    setError(null);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(
                        err?.message ||
                        "Het leaderboard kon niet worden geladen."
                    );
                }
            } finally {
                if (!cancelled && !silent) {
                    setLoading(false);
                }
            }
        };

        loadLeaderboard();

        const intervalId = window.setInterval(() => {
            loadLeaderboard({ silent: true });
        }, REFRESH_INTERVAL_MS);

        return () => {
            cancelled = true;
            window.clearInterval(intervalId);
        };
    }, []);

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
