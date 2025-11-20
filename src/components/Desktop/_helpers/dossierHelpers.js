import React from "react";
import { createRoot } from "react-dom/client";
import HackerWarning from "./../apps/DossierApp/HackerWarning";

// ---------------------
// Naam formatting
// ---------------------

export const formatName = (filename) =>
    filename
        .replace(/\.(jpg|jpeg|png)$/i, "")
        .replace(/-/g, " ");


// ---------------------
// Motive logic
// ---------------------

const motives = [
    "Onverklaarbare stroomkostenstijging thuis — mogelijk mining-apparatuur.",
    "Recent grote uitgaven in crypto-ruilplatformen, buiten salaris om.",
    "Werkt vaak 's nachts (logs / toegangsdata tonen ongebruikelijke uren).",
    "Heeft meerdere ongebruikte USB-apparaten en netwerkscans tonen verbinding met mining-pools.",
    "Onverklaarbare transacties naar een externe wallet gelinkt aan mining-activiteiten.",
    "Meldingen van netwerkbeheer over hoge CPU/GPU-belasting op werkstations.",
    "Vreemd geconfigureerde software op machines (onbekende achtergrondprocessen).",
];

export function generateMotive(name) {
    const seed = name
        .split("")
        .reduce((s, c) => s + c.charCodeAt(0), 0);

    return motives[seed % motives.length];
}


// ---------------------
// HACKER ANIMATION TRIGGER
// ---------------------

let activeRoot = null;

export function triggerHackerAnimation() {
    if (activeRoot) return; // prevent duplicates

    const container = document.createElement("div");
    container.id = "hacker-animation-root";
    container.style.position = "fixed";
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.zIndex = 999999;
    container.style.pointerEvents = "none";
    document.body.appendChild(container);

    activeRoot = createRoot(container);

    const cleanup = () => {
        activeRoot.unmount();
        container.remove();
        activeRoot = null;
    };

    activeRoot.render(
        React.createElement(HackerWarning, { onFinished: cleanup })
    );
}
