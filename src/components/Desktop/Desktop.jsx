import { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./_context/GameContext";
import { triggerHackerAnimation } from "./_helpers/dossierHelpers";
import AppDesktopShell from "../_shared/AppDesktopShell/AppDesktopShell";
import Notification from "./Notification/Notification";
import { buildDesktopIcons, renderConfiguredApp } from "../_shared/appConfig";
import {
    trainingAppConfig,
    trainingAppOrder,
    getTrainingMenuApps,
} from "./appConfig.jsx";
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

    const renderAppContent = (appName) =>
        renderConfiguredApp(trainingAppConfig, appName, {
            puzzleStep,
            setPuzzleStep,
            handleStepComplete,
            autoRunVirusSignal,
            openTrainingApp,
        });

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

    const trainingProgress = {
        terminalDone: progress?.terminalDone || dossierUnlocked,
        dossierDone: progress?.dossierDone || editorUnlocked,
        virusExecutionSimulated:
            progress?.virusExecutionSimulated || newTeamUnlocked,
    };

    const menuApps = getTrainingMenuApps(trainingProgress);

    const desktopIcons = buildDesktopIcons(trainingAppConfig, trainingAppOrder, {
        isVisible: (app) => menuApps.some((menuApp) => menuApp.key === app.key),
        getBadge: (app) => app.key === "mail" && unreadMails > 0,
    });

    return (
        <AppDesktopShell
            className="desktop-environment"
            iconsClassName="desktop-icons"
            icons={desktopIcons}
            openWindows={openWindows}
            openApp={openTrainingApp}
            bringToFront={bringTrainingAppToFront}
            closeWindow={closeWindow}
            minimizeWindow={minimizeWindow}
            renderWindowContent={(windowItem) => renderAppContent(windowItem.app)}
            menuApps={menuApps}
            watermark={{
                src: "/svgs/interpol-logo.svg",
                className: "desktop-watermark",
                alt: "Interpol Watermark",
            }}
        >
            <Notification
                show={showNotification}
                subject={lastMailSubject}
                onClick={() => {
                    openTrainingApp("mail");
                    setShowNotification(false);
                }}
            />
        </AppDesktopShell>
    );
};

export default Desktop;
