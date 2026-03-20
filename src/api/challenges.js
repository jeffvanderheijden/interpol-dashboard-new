import { apiRequest, withJsonBody } from "./request";

// ---------------------------------------------
// ADMIN – CHALLENGE PER KLAS
// ---------------------------------------------

export async function getAdminChallengesByClass() {
    return apiRequest("/api/admin/challenges");
}

export async function toggleChallengeForClass(challengeId, className, isOpen) {
    return apiRequest(`/api/admin/challenges/${challengeId}`, {
        method: "PUT",
        ...withJsonBody({
            class_name: className,
            is_open: isOpen,
        }),
    });
}
