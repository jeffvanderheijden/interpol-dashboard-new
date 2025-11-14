import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from "./components/Desktop/_context/GameContext";
import { AuthProvider } from "./components/ProtectedRoute/_context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./styles/_reset.scss";
import Login from './pages/Login';
import Training from './pages/Training';
import HtmlCss from './pages/HtmlCss';
import Javascript from './pages/Javascript';

const App = () => {
    return (
        <GameProvider>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/training" caseSensitive={false} element={<ProtectedRoute><Training /></ProtectedRoute>} />
                        <Route path="/html-css" caseSensitive={false} element={<ProtectedRoute><HtmlCss /></ProtectedRoute>} />
                        <Route path="/javascript" caseSensitive={false} element={<ProtectedRoute><Javascript /></ProtectedRoute>} />
                        {/* TODO: Maak 404 pagina */}
                        <Route path="*" element={<div>Pagina niet gevonden</div>} /> 
                    </Routes>
                </AuthProvider>
            </Router>
        </GameProvider>
    );
}

export default App;
