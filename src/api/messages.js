import { apiRequest, createFormData } from "./request";

export async function getAdminMessages() {
    const data = await apiRequest("/api/admin/messages");
    return data.messages;
}

export async function getStudentMessages() {
    const data = await apiRequest("/api/messages");
    return data.messages;
}

export async function createAdminMessage({ title, body, mediaFile, publish_at }) {
    return apiRequest("/api/admin/messages", {
        method: "POST",
        body: createFormData({
            title,
            body,
            publish_at,
            media: mediaFile,
        }),
    });
}

export async function updateAdminMessage(id, { title, body, mediaFile, publish_at }) {
    return apiRequest(`/api/admin/messages/${id}`, {
        method: "PATCH",
        body: createFormData({
            title,
            body,
            publish_at,
            media: mediaFile,
        }),
    });
}

export async function deleteAdminMessage(id) {
    return apiRequest(`/api/admin/messages/${id}`, {
        method: "DELETE",
    });
}
