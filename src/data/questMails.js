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
        subject: "Goed gedaan, Agent! Dossier app geactiveerd",
        from: "admin@interpol.sd-lab.nl",
        body: `Je hebt succesvol de verdachtenlijst gedownload. De Dossiers van de verdachte zijn nu beschikbaar op je desktop. 
        
Je zult gedurende deze weken verdachten wegspelen door de puzzels op te lossen. Open de Dossier app en begin met het analyseren van de verdachten.`,
        trigger: "terminalDone",
    },
    {
        id: "dossier_done",
        subject: "•‿•",
        from: "𝖜𝖔𝖒𝖕 𝖜𝖔𝖒𝖕︎",
        body: `Goed gevonden… maar je denkt toch niet dat ik mezelf zomaar laat vangen? 
        
Ik heb iets achtergelaten in de Notepad-app. Succes met de speurtocht.. "Agent".`,
        trigger: "dossierDone",
    },
];

export default questMails;