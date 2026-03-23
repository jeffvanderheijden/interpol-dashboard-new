import { apiRequest, withJsonBody } from "./request";

// --------------------------------------------------
// STUDENT API
// --------------------------------------------------

// CREATE GROUP (student)
export async function createGroup(teamPhoto, members, teamName, className) {
    return apiRequest("/api/groups", {
        method: "POST",
        ...withJsonBody({
            teamPhoto,
            members,
            teamName,
            className,
        }),
    });
}

// GET TEAM (student)
export async function getTeam(teamId) {
    return apiRequest(`/api/groups/${teamId}`);
}

// GET LEADERBOARD (student/docent)
export async function getLeaderboardGroups() {
    const data = await apiRequest("/api/groups/leaderboard");
    return data.groups || [];
}

// --------------------------------------------------
// ADMIN GROUPS API
// --------------------------------------------------

// GET ALL GROUPS (admin)
export async function getAdminGroups() {
    const data = await apiRequest("/api/admin/groups");
    return data.groups || [];
}

// CREATE GROUP (admin)
export async function createAdminGroup({ teamPhoto, teamName, className, members }) {
    return apiRequest("/api/admin/groups", {
        method: "POST",
        ...withJsonBody({
            teamPhoto,
            teamName,
            className,
            members,
        }),
    });
}

// UPDATE GROUP (admin)
export async function updateAdminGroup(id, { name, className, image_url }) {
    return apiRequest(`/api/admin/groups/${id}`, {
        method: "PUT",
        ...withJsonBody({
            name,
            className,
            image_url,
        }),
    });
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
    return apiRequest(`/api/admin/groups/${id}`, {
        method: "DELETE",
    });
}



// --------------------------------------------------
// ADMIN MEMBERS API
// --------------------------------------------------

// ADD MEMBER
export async function addAdminMember(groupId, { name, student_number }) {
    return apiRequest(`/api/admin/groups/${groupId}/members`, {
        method: "POST",
        ...withJsonBody({ name, student_number }),
    });
}


// UPDATE MEMBER
export async function updateAdminMember(groupId, memberId, { name, student_number }) {
    return apiRequest(`/api/admin/groups/${groupId}/members/${memberId}`, {
        method: "PUT",
        ...withJsonBody({ name, student_number }),
    });
}

// DELETE MEMBER
export async function deleteAdminMember(groupId, memberId) {
    return apiRequest(`/api/admin/groups/${groupId}/members/${memberId}`, {
        method: "DELETE",
    });
}
