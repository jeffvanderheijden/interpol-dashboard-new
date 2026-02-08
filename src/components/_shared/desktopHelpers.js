// Pure helpers for desktop-like interactions.

// Unieke ID generator (module-scope counter + timestamp)
let __winCounter = 0;
export const uniqueId = (prefix = "win") => {
    __winCounter += 1;
    return `${prefix}-${Date.now()}-${__winCounter}`;
};

// Maak een nieuw windowobject op basis van appConfig
export const createWindow = (appName, config, zIndex) => ({
    id: uniqueId(appName),
    app: appName,
    title: config.title ?? "Application",
    z: zIndex,
    width: config.width ?? 600,
    height: config.height ?? 480,
    minimized: false,
});

// Bereken toename ongelezen mails t.o.v. vorige count
export const deltaNewMails = (currentCount, previousCount) =>
    Math.max(0, currentCount - previousCount);

// Querystring-gestuurde download van /downloads/virus.txt
// Voorkomt dubbele runs (StrictMode) door meteen de query te strippen.
export const handleConditionalVirusDownload = async (unlockMail) => {
    const params = new URLSearchParams(window.location.search);
    const shouldDownload =
        params.get("download-file") === "true" || params.get("downloadfile") === "true";
    if (!shouldDownload) return;

    const url = new URL(window.location.href);
    url.searchParams.delete("download-file");
    url.searchParams.delete("downloadfile");
    window.history.replaceState({}, document.title, url.toString());

    try {
        const res = await fetch("/downloads/virus.txt");
        if (!res.ok) {
            console.error("Download mislukt:", res.status);
            return;
        }
        const blob = await res.blob();
        const objUrl = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = objUrl;
        a.download = "virus.txt";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objUrl);

        unlockMail?.("virusDownloaded");
    } catch (err) {
        console.error("Download mislukt:", err);
    }
};
