import { useEffect, useMemo, useRef } from "react";
import {
    completeStudentChallenge,
    startStudentChallenge,
} from "../api/challenges";
import { useChallengeAccess } from "../components/ProtectedRoute/_context/ChallengeAccessContext";
import { useAuth } from "../components/ProtectedRoute/_context/AuthContext";

export function useChallengeTracking(challengeRoute) {
    const { user } = useAuth();
    const { loading, getChallengeByRoute } = useChallengeAccess();
    const startedRef = useRef(false);
    const completedRef = useRef(false);

    const challenge = useMemo(
        () => getChallengeByRoute?.(challengeRoute) || null,
        [challengeRoute, getChallengeByRoute]
    );

    useEffect(() => {
        if (loading || !challenge || user?.role !== "student" || startedRef.current) {
            return;
        }

        startedRef.current = true;
        startStudentChallenge(challenge.id).catch((err) => {
            console.error("Challenge start failed", err);
            startedRef.current = false;
        });
    }, [challenge, loading, user?.role]);

    async function complete() {
        if (!challenge || user?.role !== "student") {
            return null;
        }

        if (completedRef.current) {
            return null;
        }

        completedRef.current = true;

        try {
            return await completeStudentChallenge(challenge.id);
        } catch (err) {
            completedRef.current = false;
            throw err;
        }
    }

    return {
        challenge,
        complete,
        loading,
    };
}
