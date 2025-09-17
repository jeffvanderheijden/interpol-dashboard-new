import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        try {
            await login({ username, password });
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div style={{ maxWidth: '400px', margin: '10vh auto', padding: '2rem', border: '1px solid #ccc' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Username<br />
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            style={{ width: '100%' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password<br />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            style={{ width: '100%' }}
                        />
                    </label>
                </div>
                {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Log In</button>
            </form>
        </div>
    );
}

export default Login;