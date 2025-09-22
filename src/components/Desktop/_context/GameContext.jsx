import { createContext, useState, useEffect } from "react";
import questMails from "./../_data/questMails";
import { loadProgress, updateProgress } from "./../_data/progressStorage";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [mails, setMails] = useState([]);
    const [progress, setProgress] = useState(() => loadProgress());
    const [showNotification, setShowNotification] = useState(false);
    const [lastMailSubject, setLastMailSubject] = useState("");

    /**
     * Unlock mails en update progress
     * - Voert niets uit als deze trigger al gezet is
     * - Dedupliceert mails
     */
    const unlockMail = (trigger) => {
        // Guard: skip als al unlocked
        if (progress && progress[trigger]) {
            console.log(`unlockMail(${trigger}): al uitgevoerd, skip`);
            return;
        }

        const newMails = questMails.filter((m) => m.trigger === trigger);

        if (newMails.length > 0) {
            setMails((prev) => {
                const deduped = [...prev];
                newMails.forEach((nm) => {
                    if (!deduped.some((existing) => existing.id === nm.id)) {
                        deduped.push(nm);
                    }
                });
                return deduped;
            });

            setLastMailSubject(newMails[newMails.length - 1].subject || "");
            setShowNotification(true);
        }

        const updated = updateProgress(trigger, true);
        setProgress(updated);
    };

    /**
     * Voeg een losse mail toe (handmatig vanuit apps)
     */
    const addMail = (mail) => {
        if (!mail) return;
        const m = { id: Date.now(), ...mail };
        setMails((prev) => [...prev, m]);
        setLastMailSubject(mail.subject || "");
        setShowNotification(true);
    };

    /**
     * Initialiseer mails bij eerste load
     * - Voeg startmails toe
     * - Voeg mails toe voor alle reeds voltooide triggers
     */
    useEffect(() => {
        let initialMails = questMails.filter((m) => m.startMail);

        Object.keys(progress).forEach((trigger) => {
            if (progress[trigger]) {
                const unlocked = questMails.filter((m) => m.trigger === trigger);
                unlocked.forEach((um) => {
                    if (!initialMails.some((im) => im.id === um.id)) {
                        initialMails.push(um);
                    }
                });
            }
        });

        setMails(initialMails);

        if (initialMails.length > 0) {
            setLastMailSubject(initialMails[initialMails.length - 1].subject || "");
            setShowNotification(true);
        }
    }, []); // run alleen bij eerste render

    // Reset met Ctrl+Shift+R
    useEffect(() => {
        const handleKey = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'r') {
                localStorage.clear();
                setProgress({});
                setMails(questMails.filter(m => m.startMail));
                setLastMailSubject('');
                setShowNotification(false);
                alert('Voortgang gereset!');
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <GameContext.Provider
            value={{
                mails,
                progress,
                setProgress,
                unlockMail,
                addMail,
                showNotification,
                setShowNotification,
                lastMailSubject,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
