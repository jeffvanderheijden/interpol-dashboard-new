import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from "./components/Desktop/_context/GameContext";
import { AuthProvider } from "./components/ProtectedRoute/_context/AuthContext";
import { ChallengeAccessProvider } from "./components/ProtectedRoute/_context/ChallengeAccessContext";
import { publicAsset } from "./utils/publicAsset";
import "./styles/_reset.scss";
import {
    publicRoutes,
    protectedRoutes,
    renderRouteElement,
} from "./routes/routeDefinitions";

const App = () => {
    useEffect(() => {
        document.body.style.cursor = `url("${publicAsset("/icons/arrow.cur")}"), auto`;

        return () => {
            document.body.style.removeProperty("cursor");
        };
    }, []);

    return (
        <GameProvider>
            <Router>
                <AuthProvider>
                    <ChallengeAccessProvider>
                        <Routes>
                            {protectedRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={renderRouteElement(route)}
                                />
                            ))}
                            {publicRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={route.element}
                                />
                            ))}
                        </Routes>
                    </ChallengeAccessProvider>
                </AuthProvider>
            </Router>
        </GameProvider>
    );
}

export default App;
