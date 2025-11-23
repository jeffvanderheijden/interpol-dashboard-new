import { API_BASE } from "./_config";

// --------------------------------------------------
// STUDENT API
// --------------------------------------------------

// CREATE GROUP (student)
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

// GET TEAM (student)
export async function getTeam(teamId) {
    const res = await fetch(`${API_BASE}/api/groups/${teamId}`, {
        credentials: "include"
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("getTeam failed");
    }

    return res.json();
}



// --------------------------------------------------
// ADMIN API
// --------------------------------------------------

// GET ALL GROUPS (admin)
export async function getAdminGroups() {
    const res = await fetch(`${API_BASE}/api/admin/groups`, {
        credentials: "include"
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("getAdminGroups failed");
    }

    const data = await res.json();
    return data.groups || [];
}


// CREATE GROUP (admin)
export async function createAdminGroup(name, className) {
    const res = await fetch(`${API_BASE}/api/admin/groups`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, className })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("createAdminGroup failed");
    }

    return res.json();
}


// UPDATE GROUP (admin)
export async function updateAdminGroup(id, name, className) {
    const res = await fetch(`${API_BASE}/api/admin/groups/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, className })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("updateAdminGroup failed");
    }

    return res.json();
}


// DELETE GROUP (admin)
export async function deleteAdminGroup(id) {
    const res = await fetch(`${API_BASE}/api/admin/groups/${id}`, {
        method: "DELETE",
        credentials: "include"
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("deleteAdminGroup failed");
    }

    return res.json();
}
