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
        videoUrl: "/videos/terminal_intro.mp4"
    },
    {
        id: "terminal_done",
        subject: "Goed gedaan, Agent! Dossier Viewer geactiveerd",
        body: `Je hebt succesvol de verdachtenlijst gedownload. De Dossier Viewer is nu beschikbaar op je desktop. Open deze app om de verdachte docenten te bekijken.
        
Tijdens het onderzoek zie je hier ook welke verdachten je al hebt uitgesloten.`,
        trigger: "terminalDone",
    },
    {
        id: "editor_done",
        subject: "Nieuwe aanwijzing!",
        body: "Plaats bewijs via de FTP-app.",
        trigger: "editorDone",
    },
];

export default questMails;
