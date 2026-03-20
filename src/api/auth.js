import { apiRequest, withJsonBody } from "./request";

export async function getSession() {
    return apiRequest("/api/session");
}

export async function login({ username, password }) {
    return apiRequest("/api/login", {
        method: "POST",
        ...withJsonBody({
            gebruikersnaam: username,
            wachtwoord: password,
        }),
    });
}

export async function logout() {
    return apiRequest("/api/logout", {
        method: "POST",
    });
}
