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
        
Ik heb iets achtergelaten in de Editor-app. Succes met de speurtocht.. "Agent".`,
        trigger: "dossierDone",
    },
    {
        id: "virus_downloaded_alert",
        from: "admin@interpol.sd-lab.nl",
        subject: "⚠️ Interne waarschuwing: Verdacht bestand gedownload",
        body: `Agent,

Onze monitoring heeft gedetecteerd dat er zojuist een mogelijk gevaarlijk bestand is gedownload op het Interpol-netwerk: virus.txt.

Dit kan onderdeel zijn van de hacker zijn sporen. Open het bestand in de Editor. Vind en vervang het IP-adress met het volgende IP van de hacker: 192.168.1.1. 

Vergeet niet het bestand op te slaan.`,
        trigger: "virusDownloaded",
    },
    {
  id: "final_report",
  from: "admin@interpol.sd-lab.nl",
  subject: "Training voltooid: Eindrapport",
  body: `Agent,

Je hebt het verdachte bestand virus.txt succesvol onderzocht in een veilige omgeving.
Dankzij jouw analyse is het bestand **geïsoleerd** en vormt het geen gevaar meer voor het netwerk.

Samenvatting van je trainingstraject:
- Je hebt bestanden in de terminal opgehaald en geanalyseerd.
- Je hebt dossiers van verdachten bestudeerd.
- Je hebt geleerd om bestanden te openen en decoderen in een editor.
- Je hebt een kwaadaardig bestand geïdentificeerd en veilig onderzocht.

Volgende stap: wacht op een aantal van je klasgenoten. Zodra iedereen klaar is maakt 1 van jullie een team aan.

Maak een foto van je team, geef je team een naam en vul zowel het studentennummer als de naam van alle teamleden in.

Zodra dit alles gedaan is kun je het dashboard gebruiken om het dossier te bekijken, de leaderboards te zien en hints te volgen via de mail.
  `,
  trigger: "virusExecutionSimulated",
}
];

export default questMails;