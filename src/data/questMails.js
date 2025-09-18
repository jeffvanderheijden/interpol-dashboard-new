// src/data/questMails.js
const questMails = [
    {
        id: "intro",
        subject: "Stap 1 - Terminal Training",
        from: "admin@interpol.sd-lab.nl",
        body: `Beste agent in opleiding,

Welkom bij je Interpol-training. Bekijk de bijgevoegde video en volg de instructies in de terminal. Je leert basiscommando's zoals cd, ls, cat en curl. 

Veel succes.`,
        trigger: "gameStart",
        startMail: true,
        videoUrl: "/videos/terminal-intro.mp4"
    },
    {
        id: "terminal_done",
        subject: "Goed gedaan, Agent! Dossier Viewer geactiveerd",
        body: `Je hebt succesvol de verdachtenlijst gedownload. De Dossier Viewer is nu beschikbaar op je desktop. Open deze app en zoek naar een verborgen aanwijzing.`,
        trigger: "terminalDone",
    },
    {
        id: "dossier_done",
        subject: "Nieuwe aanwijzing gevonden! Ga naar de Tekst Editor",
        body: `Je hebt de gecodeerde aanwijzing in het dossier gevonden. De code is automatisch geopend in de Tekst Editor op je bureaublad. Analyseer de code om je volgende stap te bepalen.`,
        trigger: "dossierDone",
    },
];

export default questMails;