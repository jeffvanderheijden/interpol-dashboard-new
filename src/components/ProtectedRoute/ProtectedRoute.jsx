import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "./_context/AuthContext";
import { useChallengeAccess } from "./_context/ChallengeAccessContext";

export default function ProtectedRoute({
    children,
    roles = [],
    teamProtected = false,
    challengeRoute = null,
}) {
    const { user, loading } = useAuth();
    const { loading: challengeLoading, hasAccessToRoute } = useChallengeAccess();
    const params = useParams();

    if (loading) return <div>Bezig met laden...</div>;
    if (!user) return <Navigate to="/" replace />;
    if (challengeRoute && challengeLoading) {
        return <div>Bezig met laden...</div>;
    }

    // Role-based access
    if (roles.length > 0 && !roles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }
    // Team-based access
    if (teamProtected && user.role === "student") {
        const routeTeamId = Number(params.teamId);
        const sessionTeamId = Number(user.teamId);

        if (routeTeamId !== sessionTeamId) {
            return <Navigate to="/unauthorized" replace />;
        }
    }

    if (
        challengeRoute &&
        user.role === "student" &&
        !hasAccessToRoute(challengeRoute)
    ) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}
