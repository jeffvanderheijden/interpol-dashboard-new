import { API_BASE } from "./_config";

async function parseJson(res) {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "API error");
    return data;
}

export async function getAdminMessages() {
    const res = await fetch(`${API_BASE}/api/admin/messages`, {
        method: "GET",
        credentials: "include",
        headers: { Accept: "application/json" },
    });
    const data = await parseJson(res);
    return data.messages;
}

export async function createAdminMessage({ title, body, mediaFile }) {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("body", body);
    if (mediaFile) fd.append("media", mediaFile);

    const res = await fetch(`${API_BASE}/api/admin/messages`, {
        method: "POST",
        credentials: "include",
        body: fd,
    });
    return parseJson(res);
}

export async function updateAdminMessage(id, { title, body, mediaFile }) {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("body", body);
    if (mediaFile) fd.append("media", mediaFile);

    const res = await fetch(`${API_BASE}/api/admin/messages/${id}`, {
        method: "PATCH",
        credentials: "include",
        body: fd,
    });
    return parseJson(res);
}

export async function deleteAdminMessage(id) {
    const res = await fetch(`${API_BASE}/api/admin/messages/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: { Accept: "application/json" },
    });
    return parseJson(res);
}
