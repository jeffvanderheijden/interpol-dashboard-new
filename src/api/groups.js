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
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json",
        },
    });

    const data = await res.json();

    if (!res.ok) {
        console.error("API ERROR:", data);
        throw new Error(data.error || "Failed to load team");
    }

    return data;
}

// --------------------------------------------------
// ADMIN GROUPS API
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
export async function createAdminGroup({ teamPhoto, teamName, className, members }) {
    const res = await fetch(`${API_BASE}/api/admin/groups`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            teamPhoto,
            teamName,
            className,
            members
        })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("createAdminGroup failed");
    }

    return res.json();
}

// UPDATE GROUP (admin)
export async function updateAdminGroup(id, { name, className, image_url }) {
    const res = await fetch(`${API_BASE}/api/admin/groups/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            className,
            image_url
        })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("updateAdminGroup failed");
    }

    return res.json();
}

// UDATE GROUP IMAGE
export async function updateAdminGroupImage(id, image_url) {
    return updateAdminGroup(id, {
        name: undefined,
        className: undefined,
        image_url
    });
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



// --------------------------------------------------
// ADMIN MEMBERS API
// --------------------------------------------------

// ADD MEMBER
export async function addAdminMember(groupId, { name, student_number }) {
    const res = await fetch(`${API_BASE}/api/admin/groups/${groupId}/members`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, student_number })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("addAdminMember failed");
    }

    return res.json();
}


// UPDATE MEMBER
export async function updateAdminMember(groupId, memberId, { name, student_number }) {
    const res = await fetch(`${API_BASE}/api/admin/groups/${groupId}/members/${memberId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, student_number })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("updateAdminMember failed");
    }

    return res.json();
}

// DELETE MEMBER
export async function deleteAdminMember(groupId, memberId) {
    const res = await fetch(`${API_BASE}/api/admin/groups/${groupId}/members/${memberId}`, {
        method: "DELETE",
        credentials: "include"
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("deleteAdminMember failed");
    }

    return res.json();
}
