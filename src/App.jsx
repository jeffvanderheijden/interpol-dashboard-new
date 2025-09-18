import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Login from './pages/Login';
import Training from './pages/Training';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/training" element={<Training />} />
            </Routes>
        </Router>
    );
}

export default App;
