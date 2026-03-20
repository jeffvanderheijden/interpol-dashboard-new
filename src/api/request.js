import { API_BASE } from "./_config";

async function parseResponse(response) {
    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson
        ? await response.json().catch(() => ({}))
        : await response.text().catch(() => "");

    if (!response.ok) {
        const message =
            typeof data === "string"
                ? data
                : data.message || data.error || "Request failed";

        throw new Error(message || "Request failed");
    }

    return data;
}

export async function apiRequest(path, options = {}) {
    const response = await fetch(`${API_BASE}${path}`, {
        credentials: "include",
        ...options,
        headers: {
            Accept: "application/json",
            ...options.headers,
        },
    });

    return parseResponse(response);
}

export function withJsonBody(body) {
    return {
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    };
}

export function createFormData(fields) {
    const formData = new FormData();

    Object.entries(fields).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            formData.append(key, value);
        }
    });

    return formData;
}
