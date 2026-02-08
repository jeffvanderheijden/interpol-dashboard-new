import { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./_context/GameContext";
import { triggerHackerAnimation } from "./_helpers/dossierHelpers";

import Icon from "./Icon/Icon";
import Window from "./../_shared/Window/Window";
import Taskbar from "./../_shared/Taskbar/Taskbar";
import Notification from "./Notification/Notification";
import { trainingAppConfig, getTrainingMenuApps } from "./appConfig.jsx";
import { useWindowManager } from "../../hooks/useWindowManager";


import {
    deltaNewMails,
    handleConditionalVirusDownload,
} from "../_shared/desktopHelpers";

import "./Desktop.scss";

const Desktop = () => {
    const {
        mails,
        showNotification,
        setShowNotification,
        lastMailSubject,
        unlockMail,
        progress,
    } = useContext(GameContext);

    const {
        openWindows,
        openApp,
        bringToFront,
        closeWindow,
        minimizeWindow,
    } = useWindowManager();
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
            openTrainingApp("terminal");
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

    // open single-instance app + mail badge/reset logica
    const openTrainingApp = (appName) => {
        const config = trainingAppConfig[appName];
        if (!config) return;

        openApp(appName, config);

        if (appName === "mail") {
            setUnreadMails(0);
            setShowNotification(false);
        }
    };

    // breng venster naar voren + mail badge reset als nodig
    const bringTrainingAppToFront = (id) => {
        bringToFront(id);

        const win = openWindows.find((w) => w.id === id);
        if (win?.app === "mail") {
            setShowNotification(false);
            setUnreadMails(0);
        }
    };

    const renderAppContent = (appName) => {
        const app = trainingAppConfig[appName];
        if (!app?.render) return <div>App niet gevonden</div>;
        return app.render({
            puzzleStep,
            setPuzzleStep,
            handleStepComplete,
            autoRunVirusSignal,
            openTrainingApp,
        });
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
                <Icon label="Terminal" icon="/icons/terminal.ico" onDoubleClick={() => openTrainingApp("terminal")} />
                <Icon
                    label="E-mail"
                    icon="/icons/email.ico"
                    onDoubleClick={() => openTrainingApp("mail")}
                    badge={unreadMails > 0}
                />
                {dossierUnlocked && (
                    <Icon label="Dossiers" icon="/icons/documents.ico" onDoubleClick={() => openTrainingApp("dossier")} />
                )}
                {editorUnlocked && (
                    <Icon label="Editor" icon="/icons/notepad.ico" onDoubleClick={() => openTrainingApp("editor")} />
                )}
                {newTeamUnlocked && (
                    <Icon label="Nieuw Team" icon="/icons/team.ico" onDoubleClick={() => openTrainingApp("newteam")} />
                )}
            </div>

            {/* Windows */}
            {openWindows
                .filter((win) => !win.minimized)
                .map((win) => (
                    <Window
                        key={win.id}
                        title={win.title}
                        zIndex={win.z}
                        width={win.width}
                        height={win.height}
                        onClose={() => closeWindow(win.id)}
                        onMinimize={() =>
                            minimizeWindow(win.id)
                        }
                        onClick={() => bringTrainingAppToFront(win.id)}
                    >
                        {renderAppContent(win.app)}
                    </Window>
                ))
            }

            <Notification
                show={showNotification}
                subject={lastMailSubject}
                onClick={() => {
                    openTrainingApp("mail");
                    setShowNotification(false);
                }}
            />

            <Taskbar 
                openWindows={openWindows} 
                bringToFront={bringTrainingAppToFront} 
                openApp={openTrainingApp}
                menuApps={getTrainingMenuApps({
                    terminalDone: progress?.terminalDone,
                    dossierDone: progress?.dossierDone,
                    virusExecutionSimulated: progress?.virusExecutionSimulated,
                })}
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
