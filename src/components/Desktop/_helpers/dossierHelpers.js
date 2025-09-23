// helpers voor DossierApp
export const formatName = (filename) =>
    filename
        .replace(/\.(jpg|jpeg|png)$/i, "")
        .replace(/-/g, " ");

const motives = [
    // voorbeelden; je kunt deze uitbreiden of per-achtergrond conditionals toevoegen
    "Onverklaarbare stroomkostenstijging thuis — mogelijk mining-apparatuur.",
    "Recent grote uitgaven in crypto-ruilplatformen, buiten salaris om.",
    "Werkt vaak 's nachts (logs / toegangsdata tonen ongebruikelijke uren).",
    "Heeft meerdere ongebruikte USB-apparaten en netwerkscans tonen verbinding met mining-pools.",
    "Onverklaarbare transacties naar een externe wallet gelinkt aan mining-activiteiten.",
    "Meldingen van netwerkbeheer over hoge CPU/GPU-belasting op werkstations.",
    "Vreemd geconfigureerde software op machines (onbekende achtergrondprocessen).",
];

export function generateMotive(name) {
    // deterministic-ish keuze op basis van naam (zodat het reproduceerbaar is)
    const seed = name
        .split("")
        .reduce((s, c) => s + c.charCodeAt(0), 0);
    return motives[seed % motives.length];
}