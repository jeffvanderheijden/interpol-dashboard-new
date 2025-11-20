import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/ProtectedRoute/_context/AuthContext";
import LoginForm from "./../components/LoginForm/LoginForm";

const Login = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;

        if (user) {
            // Als gebruiker al in een team zit → dashboard
            if (user.teamId) {
                navigate(`/dashboard/${user.teamId}`);
            } else {
                // Zo niet → training voortzetten
                navigate("/training");
            }
        }
    }, [user, loading, navigate]);

    if (loading) return <div>Even geduld...</div>;

    return <LoginForm />;
};

export default Login;
