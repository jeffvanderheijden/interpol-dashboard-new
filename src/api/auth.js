import { API_BASE } from "./_config";

export async function login({ username, password }) {
    const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            gebruikersnaam: username,
            wachtwoord: password
        })
    });

    if (!response.ok) {
        let error = {};
        try {
            error = await response.json();
        } catch (e) {
            throw new Error('Login failed: server sent no JSON');
        }

        throw new Error(error.message || 'Login failed');
    }

    return response.json();
}