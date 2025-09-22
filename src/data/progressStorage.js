const STORAGE_KEY = "interpol.progress.v1";

export function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

export function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateProgress(step, value = true) {
    const current = loadProgress();
    const updated = { ...current, [step]: value };
    saveProgress(updated);
    return updated;
}
