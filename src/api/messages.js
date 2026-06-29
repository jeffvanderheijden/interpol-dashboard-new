import { apiRequest, withJsonBody } from "./request";

export async function getAdminMessages() {
    const data = await apiRequest("/api/admin/messages");
    return data.messages;
}

export async function getStudentMessages() {
    const data = await apiRequest("/api/messages");
    return data.messages;
}

export async function createAdminMessage({
    title,
    body,
    mediaFile,
    mediaUrl,
    mediaType,
    publish_at,
}) {
    if (mediaFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("publish_at", publish_at || "");
        formData.append("media_url", mediaUrl || "");
        formData.append("media_type", mediaType || "");
        formData.append("media", mediaFile);

        return apiRequest("/api/admin/messages", {
            method: "POST",
            body: formData,
        });
    }

    return apiRequest("/api/admin/messages", {
        method: "POST",
        ...withJsonBody({
            title,
            body,
            publish_at,
            media_url: mediaUrl || "",
            media_type: mediaType || "",
        }),
    });
}

export async function updateAdminMessage(
    id,
    { title, body, mediaFile, mediaUrl, mediaType, clearMedia, publish_at }
) {
    if (mediaFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("publish_at", publish_at || "");
        formData.append("media_url", mediaUrl || "");
        formData.append("media_type", mediaType || "");
        formData.append("clear_media", clearMedia ? "1" : "0");
        formData.append("media", mediaFile);

        return apiRequest(`/api/admin/messages/${id}`, {
            method: "PATCH",
            body: formData,
        });
    }

    return apiRequest(`/api/admin/messages/${id}`, {
        method: "PATCH",
        ...withJsonBody({
            title,
            body,
            publish_at,
            media_url: mediaUrl || "",
            media_type: mediaType || "",
            clear_media: clearMedia ? "1" : "0",
        }),
    });
}

export async function deleteAdminMessage(id) {
    return apiRequest(`/api/admin/messages/${id}`, {
        method: "DELETE",
    });
}
