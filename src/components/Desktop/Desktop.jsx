// src/components/Desktop/Desktop.jsx
import { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./../../context/GameContext";
import Icon from "./Icon/Icon";
import Window from "./Window/Window";
import TerminalApp from "./apps/TerminalApp/TerminalApp";
import MailApp from "./apps/MailApp/MailApp";
import DossierApp from "./apps/DossierApp/DossierApp";
import Taskbar from "./Taskbar/Taskbar";
import { addWindowIfNotOpen, removeWindow } from './_helpers/desktopHelpers';
import './Desktop.scss';

const Desktop = () => {
    const { mails, showNotification, setShowNotification, lastMailSubject, addMail, unlockMail } = useContext(GameContext);

    const [openWindows, setOpenWindows] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(1);
    const [unreadMails, setUnreadMails] = useState(0);
    const [puzzleStep, setPuzzleStep] = useState(0);
    const [dossierUnlocked, setDossierUnlocked] = useState(false);

    const prevMailCount = useRef(0);

    useEffect(() => {
        const newMails = mails.length - prevMailCount.current;
        if (newMails > 0) {
            setUnreadMails(prev => prev + newMails);
        }
        prevMailCount.current = mails.length;
    }, [mails]);


    const openApp = (appName) => {
        let newWindows = addWindowIfNotOpen(openWindows, appName, zIndexCounter);
        if (newWindows === openWindows) return;

        newWindows = newWindows.map(w => ({ ...w, minimized: w.minimized ?? false }));

        setOpenWindows(newWindows);
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
    };

    const handleStepComplete = (trigger) => {
        if (trigger === "terminalDone") {
            setDossierUnlocked(true);
        }
        // Prefer unlockMail if available in context (uses questMails triggers), otherwise add a simple mail
        if (typeof unlockMail === 'function') {
            unlockMail(trigger);
        } else if (typeof addMail === 'function') {
            // fallback mail content
            addMail({
                from: 'system@interpol.int',
                subject: 'Dossier Viewer geactiveerd',
                body: 'Je hebt het verdachte bestand gedownload. De Dossier Viewer is nu beschikbaar.'
            });
        }
    };

    const renderAppContent = (appName) => {
        switch (appName) {
            case "terminal":
                return (
                    <TerminalApp
                        step={puzzleStep}
                        setStep={setPuzzleStep}
                        onStepComplete={handleStepComplete}
                    />
                );
            case "mail":
                return <MailApp />;
            case "dossier":
                return <DossierApp />;
            default:
                return <div>App niet gevonden</div>;
        }
    };

    return (
        <>
            <div className="desktop-root">
                {/* Icons */}
                <Icon label="Terminal" icon="🖥️" onDoubleClick={() => openApp("terminal")} x={40} y={40} />
                <Icon
                    label="Mail"
                    icon="📬"
                    onDoubleClick={() => openApp("mail")}
                    x={40}
                    y={140}
                    badge={unreadMails}
                />
                {dossierUnlocked && (
                    <Icon
                        label="Dossier Viewer"
                        icon="🗂️"
                        onDoubleClick={() => openApp("dossier")}
                        x={40}
                        y={240}
                    />
                )}

                {/* Windows */}
                {openWindows.filter(win => !win.minimized).map(win => (
                    <Window
                        key={win.id}
                        title={win.app}
                        width={win.width}
                        height={win.height}
                        zIndex={win.z}
                        onClose={() => setOpenWindows(prev => removeWindow(prev, win.id))}
                        onMinimize={() => setOpenWindows(prev => prev.map(w => w.id === win.id ? { ...w, minimized: true } : w))}
                        onClick={() => bringToFront(win.id)}
                    >
                        {renderAppContent(win.app)}
                    </Window>
                ))}

                {/* Notification */}
                {showNotification && (
                    <div
                        className="desktop-notification"
                        onClick={() => {
                            openApp("mail");
                            setShowNotification(false);
                        }}
                    >
                        <span>Nieuwe mail ontvangen</span>
                        <br />
                        <strong>{lastMailSubject}</strong>
                    </div>
                )}
                {/* Taskbar */}
                <Taskbar openWindows={openWindows} bringToFront={bringToFront} />
                {/* Background logo */}
                <img src="/svgs/interpol_logo.svg" className="desktop-watermark" />
            </div>
        </>
    );
};

export default Desktop;
