import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from "./components/Desktop/_context/GameContext";
import { AuthProvider } from "./components/ProtectedRoute/_context/AuthContext";
import "./styles/_reset.scss";
import {
    publicRoutes,
    protectedRoutes,
    renderRouteElement,
} from "./routes/routeDefinitions";

const App = () => {
    return (
        <GameProvider>
            <Router>
                <AuthProvider>
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
                </AuthProvider>
            </Router>
        </GameProvider>
    );
}

export default App;
