import { API_BASE } from "./_config";

// ---------------------------------------------
// ADMIN – CHALLENGE PER KLAS
// ---------------------------------------------

export async function getAdminChallengesByClass() {
    const res = await fetch(`${API_BASE}/api/admin/challenges`, {
        credentials: "include"
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("getAdminChallengesByClass failed");
    }

    return res.json();
}

export async function toggleChallengeForClass(challengeId, className, isOpen) {
    const res = await fetch(
        `${API_BASE}/api/admin/challenges/${challengeId}`,
        {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                class_name: className,
                is_open: isOpen
            })
        }
    );

    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("toggleChallengeForClass failed");
    }

    return res.json();
}
