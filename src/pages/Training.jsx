import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/ProtectedRoute/_context/AuthContext";
import AdminIcon from "../components/AdminPanel/AdminIcon/AdminIcon";
import Desktop from "./../components/Desktop/Desktop";

const Training = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;

        // Niet ingelogd → laat desktop/training zien
        if (!user) return;

        // Student zit al in een team → redirect
        if (user.teamId) {
            navigate(`/dashboard/${user.teamId}`);
        }

    }, [loading, user, navigate]);

    if (loading) {
        return <div>Even geduld...</div>;
    }

    return (
        <>
            <AdminIcon />
            <Desktop />
        </>
    );
};

export default Training;
