import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "./_context/AuthContext";

export default function ProtectedRoute({ children, roles = [], teamProtected = false }) {
    const { user, loading } = useAuth();
    const params = useParams();

    if (loading) return <div>Bezig met laden...</div>;
    if (!user) return <Navigate to="/" replace />;

    // Role-based access
    if (roles.length > 0 && !roles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }
    // Team-based access
    if (teamProtected && user.role === "student") {
        const routeTeamId = Number(params.teamId);
        const sessionTeamId = Number(user.teamId);
        console.log(Number(user.teamId), Number(params.teamId));
        console.log(user);

        if (routeTeamId !== sessionTeamId) {
            return <Navigate to="/unauthorized" replace />;
        }
    }

    return children;
}
