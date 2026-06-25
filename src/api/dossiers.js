import { apiRequest, createFormData } from "./request";

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
    is_suspect,
    is_eliminated,
}) {
    return apiRequest("/api/admin/dossiers", {
        method: "POST",
        body: createFormData({
            name,
            description,
            image: imageFile,
            is_suspect,
            is_eliminated,
        }),
    });
}

export async function updateAdminDossier(
    id,
    { name, description, imageFile, is_suspect, is_eliminated }
) {
    return apiRequest(`/api/admin/dossiers/${id}`, {
        method: "PATCH",
        body: createFormData({
            name,
            description,
            image: imageFile,
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
