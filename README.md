# 🕵️ Interpol Training Dashboard

Een **gamified onboarding/puzzelomgeving** voor studenten van het Grafisch Lyceum Rotterdam.  
De setting: studenten worden trainee-agenten bij Interpol en moeten een hacker ontmaskeren door het oplossen van verschillende puzzels.  

Dit project combineert **educatie, storytelling en retro UI** in een interactieve dashboard-omgeving.

---

## 🚀 Features

- **Windows 95 geïnspireerde desktopomgeving**
  - Bureaublad met iconen  
  - Startmenu en taakbalk  
  - Vensters die geopend, geminimaliseerd en gesloten kunnen worden  

- **Apps binnen de desktop**
  - 📬 **MailApp**: ontvang missies, hints en verhaalelementen  
  - 🖥️ **TerminalApp**: voer commando’s uit (o.a. `ls`, `cd`, `cat`, `curl`) en los code-puzzels op  
  - 🗂️ **DossierApp**: blader door verdachten (docenten) met foto’s, markeer ze af en vind verborgen aanwijzingen  
  - 📝 **EditorApp**: ingebouwde code-editor (Monaco) voor taken zoals het analyseren van bestanden (bv. `virus.txt`)  
  - 👥 **NewTeamApp**: maak een team aan met medestudenten, inclusief webcamfoto en studentgegevens  

- **Narratieve voortgang**
  - Puzzels en hints komen stap voor stap beschikbaar  
  - Vooruitgang wordt opgeslagen in **LocalStorage** (later ook via API/database)  
  - Elke stap triggert nieuwe mails en unlockt apps  

- **Pixel-art hacker logo**
  - Een herkenbaar “beeldmerk” dat in alle puzzels terugkomt  

---

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- **Styling**: SCSS (Win95 look & feel met borders, knoppen en retro kleuren)  
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)  
- **State Management**: React Context (`GameContext`)  
- **Persistence**: LocalStorage (API-integratie in voorbereiding)  
- **Assets**: Verdachtenfoto’s in `src/assets/dossiers/`, retro icons, pixel-art hacker logo  

---

---

## ▶️ Development

```bash
# Dependencies installeren
npm install

# Start development server
npm run dev

# Build voor productie
npm run build