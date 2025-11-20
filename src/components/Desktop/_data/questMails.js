const questMails = [
    {
        id: "intro",
        subject: "Training",
        from: "cybercrime@interpol.org",
        body: `Beste rekruut,

Je staat op het punt je eerste stap te zetten binnen het beveiligde Interpol-netwerk. Zoals je misschien al hebt gehoord, zijn er in de afgelopen weken meerdere sporen ontdekt die wijzen op een digitale inbraak op GLR servers.

Voordat je betrokken wordt bij het echte onderzoek, moet je aantonen dat je onze basis-tools kunt gebruiken.

In de terminal leer je navigeren door mappen, bestanden analyseren en data ophalen van externe bronnen. Deze vaardigheden heb je straks nodig om het spoor van de hacker te volgen.

Bekijk de instructievideo en doorloop daarna de opdrachten in de terminal.

Het echte werk begint sneller dan je denkt.

Succes.
Interpol Cybercrime Division`,
        trigger: "gameStart",
        startMail: true,
        attachement: "https://www.youtube.com/watch?v=5XgBd6rjuDQ"
    },
    {
        id: "terminal_done",
        subject: "Dossier app geactiveerd",
        from: "cybercrime@interpol.org",
        body: `Uitstekend werk, rekruut.

De verdachtenlijst is succesvol gedownload en geverifieerd. Je toegang is uitgebreid: de Dossier-app is nu ontgrendeld.

In de komende fase analyseer je personen die mogelijk betrokken zijn bij de digitale inbraak. Ieder dossier bevat aanwijzingen, maar ook dwaalsporen. Blijf alert.

Naarmate je meer sporen oplost zullen er verdachten weggespeelt worden. Check dus regelmatig het dossier.

Open de Dossier-app wanneer je klaar bent voor je eerste onderzoek.`,
        trigger: "terminalDone",
    },
    {
        id: "dossier_done",
        subject: "•‿•",
        from: "h̴̗̬̚a̸̜̓͒c̴̠̯͂̇k̵̛̤͑e̸̦͑̓r̷̥̓̑",
        body: `Je hebt me gevonden… indrukwekkend.

Maar denk je echt dat je dichtbij bent?
Ik heb iets achtergelaten in de Editor-app.
Een klein cadeautje. Een test.

Als je slim genoeg bent, zie je wat erachter verscholen ligt.

Succes, “agent”.`,
        trigger: "dossierDone",
    },
    {
        id: "virus_downloaded_alert",
        from: "cybercrime@interpol.org",
        subject: "⚠️ Verdacht bestand",
        body: `Rekruut,

Er is zojuist een *verdacht bestand* gedetecteerd op jouw werkstation: virus.txt. Dit bestand is mogelijk aangemaakt door dezelfde persoon die het Interpol-netwerk probeert binnen te dringen.

Open het bestand uitsluitend in de veilige omgeving van de Editor-app. Maak hier een nieuw bestand aan en sla het op.

Onze forensische afdeling wacht op jouw analyse.`,
        trigger: "virusDownloaded",
    },
    {
  id: "final_report",
  from: "cybercrime@interpol.org",
  subject: "Training voltooid: Eindrapport",
  body: `Het onderzoek naar virus.txt is afgerond. Dankzij jouw analyse is het bestand geïsoleerd en vormt het geen risico meer voor het netwerk.

Je hebt inmiddels laten zien dat je:

• veilig bestanden kunt downloaden en onderzoeken  
• verdachteninformatie kunt analyseren  
• digitale sporen herkent en volgt  
• kwaadaardige bestanden kunt openen zonder het systeem te besmetten  

Nu is het tijd voor teamwork.

Wacht tot je klasgenoten hun training hebben afgerond en vorm een team. Kies een teamnaam, maak een foto en registreer jullie gegevens in het dashboard.

Vanaf dat moment begint het echte werk.`,
  trigger: "virusExecutionSimulated",
}
];

export default questMails;