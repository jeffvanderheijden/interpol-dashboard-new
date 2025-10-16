const STORAGE_KEY = "interpol.trainer.progress.v1";

/**
 * Haal voortgang op uit localStorage
 * @returns {object} bv. { "htmlcss-intro": { "html1": true }, "js-intro": { "js1": true } }
 */
export function loadTrainerProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

/**
 * Schrijf voortgang weg naar localStorage
 * @param {object} progress
 */
export function saveTrainerProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/**
 * Werk een specifieke stap bij
 * @param {string} lessonId - bv. "htmlcss-intro"
 * @param {string} stepId - bv. "html1"
 * @param {boolean} [value=true]
 * @returns {object} updated progress object
 */
export function updateTrainerProgress(lessonId, stepId, value = true) {
    const current = loadTrainerProgress();
    const lessonData = current[lessonId] || {};
    const updated = {
        ...current,
        [lessonId]: { ...lessonData, [stepId]: value },
    };
    saveTrainerProgress(updated);
    return updated;
}

/**
 * Check of een bepaalde stap al voltooid is
 * @param {string} lessonId
 * @param {string} stepId
 * @returns {boolean}
 */
export function isTrainerStepCompleted(lessonId, stepId) {
    const progress = loadTrainerProgress();
    return !!progress?.[lessonId]?.[stepId];
}
