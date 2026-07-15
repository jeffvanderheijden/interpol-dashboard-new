/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getStudentChallenges } from "../../../api/challenges";
import { useAuth } from "./AuthContext";

const ChallengeAccessContext = createContext();

function normalizeChallenge(challenge) {
    if (!challenge) {
        return challenge;
    }

    const isDesign1Challenge =
        Number(challenge.id) === 1 ||
        challenge.component === "Design1" ||
        challenge.route === "/creative-coding";

    if (!isDesign1Challenge) {
        return challenge;
    }

    return {
        ...challenge,
        title: "Design1",
        route: "/design1",
        component: "Design1",
    };
}

export function ChallengeAccessProvider({ children }) {
    const { user, loading: authLoading } = useAuth();
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authLoading) {
            return;
        }

        if (!user || user.role !== "student" || !user.teamId) {
            setChallenges([]);
            setLoading(false);
            return;
        }

        let cancelled = false;
        setLoading(true);

        getStudentChallenges()
            .then((data) => {
                if (cancelled) {
                    return;
                }

                setChallenges(
                    Array.isArray(data.challenges)
                        ? data.challenges.map(normalizeChallenge)
                        : []
                );
            })
            .catch(() => {
                if (!cancelled) {
                    setChallenges([]);
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [authLoading, user]);

    const challengesByRoute = useMemo(
        () =>
            new Map(
                challenges
                    .filter((challenge) => challenge?.route)
                    .map((challenge) => [challenge.route, challenge])
            ),
        [challenges]
    );

    const value = useMemo(
        () => ({
            challenges,
            loading: authLoading || loading,
            getChallengeByRoute(route) {
                return challengesByRoute.get(route) || null;
            },
            hasAccessToRoute(route) {
                if (!user || user.role !== "student") {
                    return true;
                }

                return challengesByRoute.has(route);
            },
        }),
        [authLoading, challenges, challengesByRoute, loading, user]
    );

    return (
        <ChallengeAccessContext.Provider value={value}>
            {children}
        </ChallengeAccessContext.Provider>
    );
}

export function useChallengeAccess() {
    return useContext(ChallengeAccessContext);
}
