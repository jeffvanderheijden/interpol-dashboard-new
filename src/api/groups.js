import { API_BASE } from "./_config";

// -------------------------------
// CREATE
// -------------------------------
export async function createGroup(teamPhoto, members, teamName, className) {
    const res = await fetch(`${API_BASE}/api/groups`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            teamPhoto,
            members,
            teamName,
            className
        })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("CreateGroup failed");
    }

    return res.json();
}

// -------------------------------
// UPDATE
// -------------------------------


// -------------------------------
// DELETE
// -------------------------------
