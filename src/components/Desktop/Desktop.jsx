import { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./../../context/GameContext";
import Icon from "./Icon/Icon";
import Window from "./Window/Window";
import TerminalApp from "./apps/TerminalApp/TerminalApp";
import MailApp from "./apps/MailApp/MailApp";
import DossierApp from "./apps/DossierApp/DossierApp";
import EditorApp from "./apps/EditorApp/EditorApp";
import Taskbar from "./Taskbar/Taskbar";
import Notification from './Notification/Notification';
import './Desktop.scss';

const appConfig = {
    terminal: { width: 520, height: 340, title: "MS-DOS Prompt" },
    mail: { width: 680, height: 500, title: "Inbox - E-mail Client" },
    dossier: { width: 600, height: 480, title: "Dossier Viewer" },
    editor: { width: 550, height: 400, title: "Notepad" }
};

const Desktop = () => {
    const { mails, showNotification, setShowNotification, lastMailSubject, unlockMail, progress } = useContext(GameContext);

    const [openWindows, setOpenWindows] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(1);
    const [unreadMails, setUnreadMails] = useState(0);
    const [puzzleStep, setPuzzleStep] = useState(0);

    // ✅ Initialiseer unlocks vanuit localStorage progress
    const [dossierUnlocked, setDossierUnlocked] = useState(() => !!progress.terminalDone);
    const [editorUnlocked, setEditorUnlocked] = useState(() => !!progress.dossierDone);

    const prevMailCount = useRef(0);

    useEffect(() => {
        const newMails = mails.length - prevMailCount.current;
        if (newMails > 0) {
            setUnreadMails(prev => prev + newMails);
        }
        prevMailCount.current = mails.length;
    }, [mails]);

    // ✅ Sync unlocks met progress context bij refresh
    useEffect(() => {
        if (progress.terminalDone) setDossierUnlocked(true);
        if (progress.dossierDone) setEditorUnlocked(true);
    }, [progress]);

    const openApp = (appName) => {
        const existingWindow = openWindows.find(w => w.app === appName);
        if (existingWindow) {
            bringToFront(existingWindow.id);
            return;
        }

        const config = appConfig[appName];
        if (!config) return;

        const newWindow = {
            id: `${appName}-${Date.now()}`,
            app: appName,
            title: config.title,
            z: zIndexCounter,
            width: config.width,
            height: config.height,
            minimized: false
        };

        setOpenWindows(prev => [...prev, newWindow]);
        setZIndexCounter(prev => prev + 1);

        if (appName === "mail") {
            setUnreadMails(0);
            setShowNotification(false);
        }
    };

    const bringToFront = (id) => {
        setOpenWindows(prev => prev.map(w =>
            w.id === id ? { ...w, z: zIndexCounter, minimized: false } : w
        ));
        setZIndexCounter(prev => prev + 1);
        const windowToBringForward = openWindows.find(w => w.id === id);
        if (windowToBringForward && windowToBringForward.app === "mail") {
            setShowNotification(false);
            setUnreadMails(0);
        }
    };

    const removeWindow = (openWindows, winId) => {
        return openWindows.filter((w) => w.id !== winId);
    };

    const handleStepComplete = (trigger) => {
        if (trigger === "terminalDone" && !dossierUnlocked) {
            setDossierUnlocked(true);
            unlockMail?.(trigger);
        }
        if (trigger === "dossierDone" && !editorUnlocked) {
            setEditorUnlocked(true);
            unlockMail?.(trigger);
        }
    };

    const getAppTitle = (appName) => appConfig[appName]?.title || "Application";

    const renderAppContent = (appName) => {
        switch (appName) {
            case "terminal":
                return <TerminalApp step={puzzleStep} setStep={setPuzzleStep} onStepComplete={handleStepComplete} />;
            case "mail":
                return <MailApp />;
            case "dossier":
                return <DossierApp openApp={openApp} onStepComplete={handleStepComplete} />;
            case "editor":
                return <EditorApp />;
            default:
                return <div>App niet gevonden</div>;
        }
    };

    return (
        <div className="desktop-environment">
            <div className="desktop-icons">
                <Icon label="Terminal" icon="🖥️" onDoubleClick={() => openApp("terminal")} />
                <Icon label="E-mail" icon="📬" onDoubleClick={() => openApp("mail")} badge={unreadMails > 0} />
                {dossierUnlocked && <Icon label="Dossiers" icon="🗂️" onDoubleClick={() => openApp("dossier")} />}
                {editorUnlocked && <Icon label="Notepad" icon="📝" onDoubleClick={() => openApp("editor")} />}
            </div>

            {openWindows.filter(win => !win.minimized).map(win => (
                <Window key={win.id} title={getAppTitle(win.app)} zIndex={win.z} width={win.width} height={win.height}
                    onClose={() => setOpenWindows(prev => removeWindow(prev, win.id))}
                    onMinimize={() => setOpenWindows(prev => prev.map(w => w.id === win.id ? { ...w, minimized: true } : w))}
                    onClick={() => bringToFront(win.id)}
                >
                    {renderAppContent(win.app)}
                </Window>
            ))}

            <Notification
                show={showNotification}
                subject={lastMailSubject}
                onClick={() => {
                    openApp("mail");
                    setShowNotification(false);
                }}
            />

            <Taskbar openWindows={openWindows} bringToFront={bringToFront} />
            <img src="/svgs/interpol_logo.svg" className="desktop-watermark" alt="Interpol Watermark" />
        </div>
    );
};

export default Desktop;