import { Navigate } from "react-router-dom";
import { useAuth } from "./_context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <div>Bezig met laden...</div>;
    if (!user) return <Navigate to="/" replace />;

    return children;
}
