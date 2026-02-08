import TerminalApp from "./apps/TerminalApp/TerminalApp";
import MailApp from "./apps/MailApp/MailApp";
import DossierApp from "./apps/DossierApp/DossierApp";
import EditorApp from "./apps/EditorApp/EditorApp";
import NewTeamApp from "./apps/NewTeamApp/NewTeamApp";

export const trainingAppConfig = {
    terminal: {
        key: "terminal",
        title: "MS-DOS Prompt",
        icon: "/icons/terminal.ico",
        width: 520,
        height: 340,
        render: ({ puzzleStep, setPuzzleStep, handleStepComplete, autoRunVirusSignal }) => (
            <TerminalApp
                step={puzzleStep}
                setStep={setPuzzleStep}
                onStepComplete={handleStepComplete}
                autoRunVirusSignal={autoRunVirusSignal}
            />
        ),
    },
    mail: {
        key: "mail",
        title: "Inbox - E-mail Client",
        icon: "/icons/email.ico",
        width: 680,
        height: 500,
        render: () => <MailApp />,
    },
    dossier: {
        key: "dossier",
        title: "Dossier Viewer",
        icon: "/icons/documents.ico",
        width: 600,
        height: 480,
        render: ({ openTrainingApp, handleStepComplete }) => (
            <DossierApp
                openApp={openTrainingApp}
                onStepComplete={handleStepComplete}
            />
        ),
    },
    editor: {
        key: "editor",
        title: "Notepad",
        icon: "/icons/notepad.ico",
        width: 900,
        height: 500,
        render: () => <EditorApp />,
    },
    newteam: {
        key: "newteam",
        title: "Nieuw Team",
        icon: "/icons/team.ico",
        width: 480,
        height: 680,
        render: () => (
            <NewTeamApp
                onSubmit={(data) => {
                    console.log("Team aangemaakt:", data);
                }}
            />
        ),
    },
};

const trainingMenuOrder = ["terminal", "mail", "dossier", "editor", "newteam"];

const trainingUnlocks = {
    dossier: (p) => !!p.terminalDone,
    editor: (p) => !!p.dossierDone,
    newteam: (p) => !!p.virusExecutionSimulated,
};

export function getTrainingMenuApps(progress = {}) {
    return trainingMenuOrder
        .filter((key) => {
            const gate = trainingUnlocks[key];
            return gate ? gate(progress) : true;
        })
        .map((key) => trainingAppConfig[key])
        .filter(Boolean)
        .map((app) => ({
            key: app.key,
            label: app.key === "mail" ? "E-mail" : app.title,
            icon: app.icon,
        }));
}
