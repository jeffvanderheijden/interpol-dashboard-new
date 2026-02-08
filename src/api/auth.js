import { API_BASE } from "./_config";

async function parseJson(res) {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        throw new Error(data.message || data.error || "Request failed");
    }
    return data;
}

export async function getSession() {
    const res = await fetch(`${API_BASE}/api/session`, {
        credentials: "include",
    });
    return parseJson(res);
}

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

    return parseJson(response);
}

export async function logout() {
    const res = await fetch(`${API_BASE}/api/logout`, {
        method: "POST",
        credentials: "include",
    });
    return parseJson(res);
}
