/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { getSession, login as apiLogin, logout as apiLogout } from "../../../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check sessie bij opstart
    useEffect(() => {
        getSession()
            .then((data) => {
                setUser(data.user || null);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Check elke 5 minuten of sessie verlopen is
    useEffect(() => {
        const interval = setInterval(() => {
            getSession()
                .then((data) => {
                    if (!data.user) setUser(null);
                })
                .catch(() => {
                    setUser(null);
                });
        }, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    const login = async (username, password) => {
        const data = await apiLogin({ username, password });
        setUser(data.user);
    };

    const logout = async () => {
        await apiLogout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
