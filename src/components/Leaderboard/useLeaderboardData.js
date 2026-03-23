import { useEffect, useState } from "react";
import { getLeaderboardGroups } from "../../api/groups";

const DEFAULT_REFRESH_INTERVAL_MS = 60_000;

export function useLeaderboardData(refreshIntervalMs = DEFAULT_REFRESH_INTERVAL_MS) {
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
        }, refreshIntervalMs);

        return () => {
            cancelled = true;
            window.clearInterval(intervalId);
        };
    }, [refreshIntervalMs]);

    return { groups, loading, error };
}
