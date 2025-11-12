import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check sessie bij opstart
    useEffect(() => {
        fetch("https://api.heijden.sd-lab.nl/api/session", {
            credentials: "include",
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.user || null);
                setLoading(false);
                // redirect na sessiecheck
                data.user ? navigate("/training") : navigate("/");
            })
            .catch(() => setLoading(false));
    }, []);

    // Check elke 5 minuten of sessie verlopen is
    useEffect(() => {
        const interval = setInterval(() => {
            fetch("https://api.heijden.sd-lab.nl/api/session", { credentials: "include" })
                .then(res => res.json())
                .then(data => { 
                    if (!data.user) { 
                        setUser(null); 
                        navigate("/");
                    }
                });
        }, 5 * 60 * 1000); // elke 5 minuten
        return () => clearInterval(interval);
    }, []);

    const login = async (username, password) => {
        const res = await fetch("https://api.heijden.sd-lab.nl/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ gebruikersnaam: username, wachtwoord: password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Login mislukt");
        setUser(data.user);
        navigate("/training");
    };

    const logout = async () => {
        await fetch("https://api.heijden.sd-lab.nl/api/logout", {
            method: "POST",
            credentials: "include",
        });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
