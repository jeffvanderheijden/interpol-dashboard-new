import { apiRequest, createFormData, withJsonBody } from "./request";

export async function getAdminDossiers() {
    const data = await apiRequest("/api/admin/dossiers");
    return data.dossiers;
}

export async function getStudentDossiers() {
    const data = await apiRequest("/api/dossiers");
    return data.dossiers;
}

export async function createAdminDossier({
    name,
    description,
    imageFile,
    videoUrl,
    is_suspect,
    is_eliminated,
}) {
    if (imageFile) {
        const formData = createFormData({
            name,
            description,
            image: imageFile,
            is_suspect,
            is_eliminated,
        });
        formData.append("video_url", videoUrl || "");

        return apiRequest("/api/admin/dossiers", {
            method: "POST",
            body: formData,
        });
    }

    return apiRequest("/api/admin/dossiers", {
        method: "POST",
        ...withJsonBody({
            name,
            description,
            video_url: videoUrl || "",
            is_suspect,
            is_eliminated,
        }),
    });
}

export async function updateAdminDossier(
    id,
    { name, description, imageFile, videoUrl, is_suspect, is_eliminated }
) {
    if (imageFile) {
        const formData = createFormData({
            name,
            description,
            image: imageFile,
            is_suspect,
            is_eliminated,
        });
        formData.append("video_url", videoUrl || "");

        return apiRequest(`/api/admin/dossiers/${id}`, {
            method: "PATCH",
            body: formData,
        });
    }

    return apiRequest(`/api/admin/dossiers/${id}`, {
        method: "PATCH",
        ...withJsonBody({
            name,
            description,
            video_url: videoUrl || "",
            is_suspect,
            is_eliminated,
        }),
    });
}

export async function deleteAdminDossier(id) {
    return apiRequest(`/api/admin/dossiers/${id}`, {
        method: "DELETE",
    });
}
