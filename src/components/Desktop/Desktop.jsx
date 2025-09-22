import { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./_context/GameContext";
import Icon from "./Icon/Icon";
import Window from "./Window/Window";
import TerminalApp from "./apps/TerminalApp/TerminalApp";
import MailApp from "./apps/MailApp/MailApp";
import DossierApp from "./apps/DossierApp/DossierApp";
import EditorApp from "./apps/EditorApp/EditorApp";
import NewTeam from "./apps/NewTeam/NewTeam";
import Taskbar from "./Taskbar/Taskbar";
import Notification from "./Notification/Notification";
import "./Desktop.scss";

const appConfig = {
    terminal: { width: 520, height: 340, title: "MS-DOS Prompt" },
    mail: { width: 680, height: 500, title: "Inbox - E-mail Client" },
    dossier: { width: 600, height: 480, title: "Dossier Viewer" },
    editor: { width: 680, height: 500, title: "Notepad" },
    newteam: { width: 480, height: 600, title: "Nieuw Team" },
};

const uniqueId = (() => {
    let counter = 0;
    return (prefix = "win") => {
        counter += 1;
        return `${prefix}-${Date.now()}-${counter}`;
    };
})();

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

    useEffect(() => {
        const newMails = mails.length - prevMailCount.current;
        if (newMails > 0) {
            setUnreadMails((prev) => prev + newMails);
        }
        prevMailCount.current = mails.length;
    }, [mails]);

    // sync unlocks bij refresh
    useEffect(() => {
        if (progress.terminalDone) setDossierUnlocked(true);
        if (progress.dossierDone) setEditorUnlocked(true);
        if (progress.virusExecutionSimulated) setNewTeamUnlocked(true);
    }, [progress]);

    useEffect(() => {
        if (progress?.virusAnalyzed) {
            openApp("terminal");                  // kan veilig 2× aangeroepen worden
            if (!autoRunConsumedRef.current) {
                setAutoRunVirusSignal(Date.now());
                autoRunConsumedRef.current = true;  // voorkomt dubbele autorun
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress?.virusAnalyzed]);

    // ✅ Start download via URL param (?download-file=true of ?downloadfile=true)
    //    en unlock daarna de hint (1x, dankzij idempotente unlockMail).
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const shouldDownload =
            params.get("download-file") === "true" || params.get("downloadfile") === "true";
        if (!shouldDownload) return;

        // Verwijder de query meteen om dubbele runs (StrictMode) te voorkomen
        const url = new URL(window.location.href);
        url.searchParams.delete("download-file");
        url.searchParams.delete("downloadfile");
        window.history.replaceState({}, document.title, url.toString());

        (async () => {
            try {
                const res = await fetch("/downloads/virus.txt");
                if (!res.ok) {
                    console.error("Download mislukt:", res.status);
                    return;
                }
                const blob = await res.blob();
                const objUrl = URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = objUrl;
                a.download = "virus.txt";
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(objUrl);

                // 🔓 Volgende hint (GameContext voorkomt dubbele mails)
                unlockMail?.("virusDownloaded");
            } catch (err) {
                console.error("Download mislukt:", err);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openApp = (appName) => {
        const config = appConfig[appName];
        if (!config) return;

        // Idempotent toevoegen: gebruik functionele set en dedupe op appName
        setOpenWindows((prev) => {
            if (prev.some((w) => w.app === appName)) {
                return prev; // al open -> geen tweede venster
            }
            const newWindow = {
                id: uniqueId(appName),
                app: appName,
                title: config.title,
                z: zIndexCounter,         // huidige z
                width: config.width,
                height: config.height,
                minimized: false,
            };
            return [...prev, newWindow];
        });

        // z-index omhoog (los van openWindows-update)
        setZIndexCounter((prev) => prev + 1);

        if (appName === "mail") {
            setUnreadMails(0);
            setShowNotification(false);
        }
    };

    const bringToFront = (id) => {
        setOpenWindows((prev) =>
            prev.map((w) =>
                w.id === id ? { ...w, z: zIndexCounter, minimized: false } : w
            )
        );
        setZIndexCounter((prev) => prev + 1);

        const windowToBringForward = openWindows.find((w) => w.id === id);
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
        if (trigger === "virusExecutionSimulated" && !newTeamUnlocked) {
            setNewTeamUnlocked(true);
            unlockMail?.(trigger);
        }
    };

    const getAppTitle = (appName) => appConfig[appName]?.title || "Application";

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
            case "dossier":
                return (
                    <DossierApp openApp={openApp} onStepComplete={handleStepComplete} />
                );
            case "editor":
                return <EditorApp />;
            case "newteam":
                return (
                    <NewTeam
                        onSubmit={(data) => {
                            console.log("Team aangemaakt:", data);
                        }}
                    />
                );
            default:
                return <div>App niet gevonden</div>;
        }
    };

    return (
        <div className="desktop-environment">
            <div className="desktop-icons">
                <Icon
                    label="Terminal"
                    icon="🖥️"
                    onDoubleClick={() => openApp("terminal")}
                />
                <Icon
                    label="E-mail"
                    icon="📬"
                    onDoubleClick={() => openApp("mail")}
                    badge={unreadMails > 0}
                />
                {dossierUnlocked && (
                    <Icon
                        label="Dossiers"
                        icon="🗂️"
                        onDoubleClick={() => openApp("dossier")}
                    />
                )}
                {editorUnlocked && (
                    <Icon
                        label="Editor"
                        icon="📝"
                        onDoubleClick={() => openApp("editor")}
                    />
                )}
                {newTeamUnlocked && (
                    <Icon
                        label="Nieuw Team"
                        icon="👥"
                        onDoubleClick={() => openApp("newteam")}
                    />
                )}
            </div>

            {openWindows
                .filter((win) => !win.minimized)
                .map((win) => (
                    <Window
                        key={win.id}
                        title={getAppTitle(win.app)}
                        zIndex={win.z}
                        width={win.width}
                        height={win.height}
                        onClose={() =>
                            setOpenWindows((prev) => removeWindow(prev, win.id))
                        }
                        onMinimize={() =>
                            setOpenWindows((prev) =>
                                prev.map((w) =>
                                    w.id === win.id ? { ...w, minimized: true } : w
                                )
                            )
                        }
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

            <Taskbar
                openWindows={openWindows}
                bringToFront={bringToFront}
                openApp={openApp} 
            />
            <img
                src="/svgs/interpol-logo.svg"
                className="desktop-watermark"
                alt="Interpol Watermark"
            />
        </div>
    );
};

export default Desktop;
