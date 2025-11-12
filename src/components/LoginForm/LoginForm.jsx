import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../ProtectedRoute/_context/AuthContext';
import "./LoginForm.scss";

const LoginForm = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        try {
            await login(username, password);
            navigate('/training'); 
        } catch (err) {
            setError(err.message || 'Incorrect username or password.');
        }
    }

    const cancel = () => {
        setUsername('');
        setPassword('');
    }

    return (
        <div className="page-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__title-bar">
                    <h2 className="form__title-text">Connect to Server</h2>
                </div>

                <div className="form__content">
                    {error && <div className="form__error">⚠️ {error}</div>}

                    <div className="form__group">
                        <label htmlFor="username"><u>U</u>ser name:</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="password"><u>P</u>assword:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form__buttons">
                        <button className="form__button" type="submit">
                            OK
                        </button>
                        <button className="form__button" type="button" onClick={() => cancel()}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;