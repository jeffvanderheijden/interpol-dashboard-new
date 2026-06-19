import { apiRequest, withJsonBody } from "./request";

export async function getStudentChallenges() {
    return apiRequest("/api/challenges");
}

export async function completeTutorialProgress() {
    return apiRequest("/api/challenges/tutorial/complete", {
        method: "POST",
        ...withJsonBody({}),
    });
}

export async function startStudentChallenge(challengeId) {
    return apiRequest(`/api/challenges/${challengeId}/start`, {
        method: "POST",
        ...withJsonBody({}),
    });
}

export async function completeStudentChallenge(challengeId) {
    return apiRequest(`/api/challenges/${challengeId}/complete`, {
        method: "POST",
        ...withJsonBody({}),
    });
}

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
