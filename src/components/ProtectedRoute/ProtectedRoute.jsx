import { Navigate } from "react-router-dom";
import { useAuth } from "./_context/AuthContext";

export default function ProtectedRoute({ children, roles = [] }) {
    const { user, loading } = useAuth();

    if (loading) return <div>Bezig met laden...</div>;
    if (!user) return <Navigate to="/" replace />;

    if (roles.length > 0 && !roles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}
