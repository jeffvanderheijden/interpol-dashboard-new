import { API_BASE } from "./_config";

export async function createGroup(teamPhoto, members) {
    const res = await fetch(`${API_BASE}/api/groups`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "include",
        },
        body: JSON.stringify({ teamPhoto, members }),
    });

    if (!res.ok) {
        throw new Error(`API error ${res.status}`);
    }

    return res.json();
}
