// Helper utilities for Desktop window management
export function sizeForApp(appName) {
    switch (appName) {
        case 'mail':
            return { width: 700, height: 450 };
        case 'terminal':
            return { width: 600, height: 360 };
        case 'dossier':
            return { width: 600, height: 400 };
        default:
            return { width: 500, height: 300 };
    }
}

export function createWindowObject(appName, zIndex) {
    const size = sizeForApp(appName);
    return {
        id: `${appName}-${Date.now()}`,
        app: appName,
        z: zIndex,
        width: size.width,
        height: size.height,
    };
}

// Returns unchanged array if already open; otherwise returns new array with window appended
export function addWindowIfNotOpen(openWindows, appName, zIndex) {
    const alreadyOpen = openWindows.some((w) => w.app === appName);
    if (alreadyOpen) return openWindows;
    return [...openWindows, createWindowObject(appName, zIndex)];
}

export function removeWindow(openWindows, winId) {
    return openWindows.filter((w) => w.id !== winId);
}

export function bringToFront(openWindows, winId, newZ) {
    return openWindows.map((w) => (w.id === winId ? { ...w, z: newZ } : w));
}