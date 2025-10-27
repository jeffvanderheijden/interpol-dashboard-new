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
             <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/training" element={<ProtectedRoute><Training /></ProtectedRoute>} />
                        <Route path="/html-css" element={<ProtectedRoute><HtmlCss /></ProtectedRoute>} />
                        <Route path="/javascript" element={<ProtectedRoute><Javascript /></ProtectedRoute>} />
                    </Routes>
                </Router>
            </AuthProvider>
        </GameProvider>
    );
}

export default App;
