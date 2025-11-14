import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from "./components/Desktop/_context/GameContext";
import { AuthProvider } from "./components/ProtectedRoute/_context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./styles/_reset.scss";
import Login from './pages/Login';
import Training from './pages/Training';
import HtmlCss from './pages/HtmlCss';
import Javascript from './pages/Javascript';
import Unauthorized from './pages/Unauthorized';

const App = () => {
    return (
        <GameProvider>
            <Router>
                <AuthProvider>
                    <Routes>
                        {/* STUDENT */}
                        <Route 
                            path="/" 
                            element={<Login />} 
                        />
                        <Route 
                            path="/training"
                            element={
                                <ProtectedRoute roles={["docent", "student"]}>
                                    <Training />
                                </ProtectedRoute>
                            } 
                        />
                        <Route 
                            path="/html-css" 
                            element={
                                <ProtectedRoute roles={["docent", "student"]}>
                                    <HtmlCss />
                                </ProtectedRoute>
                            } 
                        />
                        <Route 
                            path="/javascript" 
                            element={
                                <ProtectedRoute roles={["docent", "student"]}>
                                    <Javascript />
                                </ProtectedRoute>
                            } 
                        />
                        {/* ADMIN */}
                        <Route 
                            path="/admin" 
                            element={
                                <ProtectedRoute roles={["docent"]}>
                                    <Javascript />
                                </ProtectedRoute>
                            } 
                        />
                        {/* TODO: Maak 404 pagina */}
                        <Route path="/unauthorized" element={<Unauthorized />} />
                        <Route path="*" element={<div>Pagina niet gevonden</div>} /> 
                    </Routes>
                </AuthProvider>
            </Router>
        </GameProvider>
    );
}

export default App;
