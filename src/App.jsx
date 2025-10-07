import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from "./components/Desktop/_context/GameContext";
import "./styles/_reset.scss";
import Login from './pages/Login';
import Training from './pages/Training';
import HtmlCss from './pages/HtmlCss';
import Javascript from './pages/Javascript';

const App = () => {
    return (
        <GameProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/html-css" element={<HtmlCss />} />
                    <Route path="/javascript" element={<Javascript />} />
                </Routes>
            </Router>
        </GameProvider>
    );
}

export default App;
