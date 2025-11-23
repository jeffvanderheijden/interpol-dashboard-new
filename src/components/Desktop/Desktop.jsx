import { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./_context/GameContext";
import { triggerHackerAnimation } from "./_helpers/dossierHelpers";

import Icon from "./Icon/Icon";
import Window from "./Window/Window";
import TerminalApp from "./apps/TerminalApp/TerminalApp";
import MailApp from "./apps/MailApp/MailApp";
import DossierApp from "./apps/DossierApp/DossierApp";
import EditorApp from "./apps/EditorApp/EditorApp";
import NewTeamApp from "./apps/NewTeamApp/NewTeamApp";
import Taskbar from "./Taskbar/Taskbar";
import Notification from "./Notification/Notification";


import {
    ensureWindowOpen,
    removeWindowById,
    bringToFrontById,
    getAppTitle,
    deltaNewMails,
    handleConditionalVirusDownload,
} from "./_helpers/desktopHelpers";

import "./Desktop.scss";

const appConfig = {
    terminal: { width: 520, height: 340, title: "MS-DOS Prompt" },
    mail: { width: 680, height: 500, title: "Inbox - E-mail Client" },
    dossier: { width: 600, height: 480, title: "Dossier Viewer" },
    editor: { width: 900, height: 500, title: "Notepad" },
    newteam: { width: 480, height: 680, title: "Nieuw Team" },
};

const Desktop = () => {
    const {
        mails,
        showNotification,
        setShowNotification,
        lastMailSubject,
        unlockMail,
        progress,
    } = useContext(GameContext);

    const [openWindows, setOpenWindows] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(1);
    const [unreadMails, setUnreadMails] = useState(0);
    const [puzzleStep, setPuzzleStep] = useState(0);

    // unlock states
    const [dossierUnlocked, setDossierUnlocked] = useState(
        () => !!progress.terminalDone
    );
    const [editorUnlocked, setEditorUnlocked] = useState(
        () => !!progress.dossierDone
    );
    const [newTeamUnlocked, setNewTeamUnlocked] = useState(
        () => !!progress.virusExecutionSimulated
    );

    // auto-run signal for virus simulation in Terminal
    const [autoRunVirusSignal, setAutoRunVirusSignal] = useState(null);
    const autoRunConsumedRef = useRef(false);

    const prevMailCount = useRef(0);

    // ongelezen mails badge (t.o.v. vorige count)
    useEffect(() => {
        const add = deltaNewMails(mails.length, prevMailCount.current);
        if (add > 0) setUnreadMails((prev) => prev + add);
        prevMailCount.current = mails.length;
    }, [mails]);

    // sync unlocks bij refresh / context update
    useEffect(() => {
        if (progress.terminalDone) setDossierUnlocked(true);
        if (progress.dossierDone) setEditorUnlocked(true);
        if (progress.virusExecutionSimulated) setNewTeamUnlocked(true);
    }, [progress]);

    // auto-open terminal en trigger autoRunVirus na virusAnalyzed
    useEffect(() => {
        if (progress?.virusAnalyzed) {
            openApp("terminal");
            if (!autoRunConsumedRef.current) {
                setAutoRunVirusSignal(Date.now());
                autoRunConsumedRef.current = true;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress?.virusAnalyzed]);

    useEffect(() => {
        (async () => {
            await handleConditionalVirusDownload(unlockMail);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Volgende top z-index veilig bepalen
    const nextTopZ = () => {
        setZIndexCounter((prev) => prev + 1);
        return zIndexCounter + 1;
    };

    // open single-instance app + mail badge/reset logica
    const openApp = (appName) => {
        const config = appConfig[appName];
        if (!config) return;

        const topZ = nextTopZ();
        setOpenWindows((prev) => ensureWindowOpen(prev, appName, config, topZ));

        if (appName === "mail") {
            setUnreadMails(0);
            setShowNotification(false);
        }
    };

    // breng venster naar voren + mail badge reset als nodig
    const bringToFront = (id) => {
        const topZ = nextTopZ();
        setOpenWindows((prev) => bringToFrontById(prev, id, topZ));

        const win = openWindows.find((w) => w.id === id);
        if (win?.app === "mail") {
            setShowNotification(false);
            setUnreadMails(0);
        }
    };

    // per-app content
    const renderAppContent = (appName) => {
        switch (appName) {
            case "terminal":
                return (
                    <TerminalApp
                        step={puzzleStep}
                        setStep={setPuzzleStep}
                        onStepComplete={handleStepComplete}
                        autoRunVirusSignal={autoRunVirusSignal}
                    />
                );
            case "mail":
                return <MailApp />;
            case "editor":
                return <EditorApp />;
            case "dossier":
                return (
                    <DossierApp
                        openApp={openApp}
                        onStepComplete={handleStepComplete}
                    />
                );
            case "newteam":
                return (
                    <NewTeamApp
                        onSubmit={(data) => {
                            console.log("Team aangemaakt:", data);
                        }}
                    />
                );
            default:
                return <div>App niet gevonden</div>;
        }
    };

    // unlock flow & mail-triggers
    function handleStepComplete(trigger) {
        if (trigger === "terminalDone" && !dossierUnlocked) {
            setDossierUnlocked(true);
            unlockMail?.(trigger);
        }
        if (trigger === "dossierDone" && !editorUnlocked) {
            triggerHackerAnimation();
            setEditorUnlocked(true);
            unlockMail?.(trigger);
        }

        if (trigger === "virusExecutionSimulated" && !newTeamUnlocked) {
            setNewTeamUnlocked(true);
            unlockMail?.(trigger);
        }
    }

    return (
        <div className="desktop-environment">
            {/* Desktop icons */}
            <div className="desktop-icons">
                <Icon label="Terminal" icon="/icons/terminal.ico" onDoubleClick={() => openApp("terminal")} />
                <Icon
                    label="E-mail"
                    icon="/icons/email.ico"
                    onDoubleClick={() => openApp("mail")}
                    badge={unreadMails > 0}
                />
                {dossierUnlocked && (
                    <Icon label="Dossiers" icon="/icons/documents.ico" onDoubleClick={() => openApp("dossier")} />
                )}
                {editorUnlocked && (
                    <Icon label="Editor" icon="/icons/notepad.ico" onDoubleClick={() => openApp("editor")} />
                )}
                {newTeamUnlocked && (
                    <Icon label="Nieuw Team" icon="/icons/team.ico" onDoubleClick={() => openApp("newteam")} />
                )}
            </div>

            {/* Windows */}
            {openWindows
                .filter((win) => !win.minimized)
                .map((win) => (
                    <Window
                        key={win.id}
                        title={getAppTitle(appConfig, win.app)}
                        zIndex={win.z}
                        width={win.width}
                        height={win.height}
                        onClose={() => setOpenWindows((prev) => removeWindowById(prev, win.id))}
                        onMinimize={() =>
                            setOpenWindows((prev) =>
                                prev.map((w) => (w.id === win.id ? { ...w, minimized: true } : w))
                            )
                        }
                        onClick={() => bringToFront(win.id)}
                    >
                        {renderAppContent(win.app)}
                    </Window>
                ))
            }

            <Notification
                show={showNotification}
                subject={lastMailSubject}
                onClick={() => {
                    openApp("mail");
                    setShowNotification(false);
                }}
            />

            <Taskbar 
                mode="training"
                openWindows={openWindows} 
                bringToFront={bringToFront} 
                openApp={openApp} 
            />

            {/* Watermark */}
            <img
                src="/svgs/interpol-logo.svg"
                className="desktop-watermark"
                alt="Interpol Watermark"
            />
        </div>
    );
};

export default Desktop;
