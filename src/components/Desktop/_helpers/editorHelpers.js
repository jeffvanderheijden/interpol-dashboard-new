/**
 * Maak het encoded clue-bestand aan.
 * Encode een URL naar base64.
 */
export function makeClueFile() {
    try {
        const url = `${window.location.origin}/training?download-file=true`;
        return btoa(url); // base64 encode
    } catch {
        return ""; // fallback als window niet bestaat
    }
}

/**
 * Bestanden inladen uit localStorage
 */
export function loadFiles(defaultFiles, storageKey) {
    try {
        const raw = localStorage.getItem(storageKey);
        if (raw) return JSON.parse(raw);
    } catch {
        console.warn("Kon bestanden niet laden uit localStorage");
    }
    return { ...defaultFiles };
}

/**
 * Bestanden opslaan naar localStorage
 */
export function saveFilesToStorage(fs, storageKey) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(fs));
    } catch (err) {
        console.error("Opslaan naar localStorage mislukt:", err);
    }
}
