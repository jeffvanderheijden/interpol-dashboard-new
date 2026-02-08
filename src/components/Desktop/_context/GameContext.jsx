/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useMemo } from "react";
import questMails from "./../_data/questMails";
import { loadProgress, updateProgress } from "./../_data/progressStorage";

export const GameContext = createContext();

const buildInitialMails = (progress) => {
    const initialMails = questMails.filter((m) => m.startMail);

    Object.keys(progress || {}).forEach((trigger) => {
        if (progress[trigger]) {
            const unlocked = questMails.filter((m) => m.trigger === trigger);
            unlocked.forEach((um) => {
                if (!initialMails.some((im) => im.id === um.id)) {
                    initialMails.push(um);
                }
            });
        }
    });

    return initialMails;
};

export const GameProvider = ({ children }) => {
    const initialProgress = useMemo(() => loadProgress(), []);
    const initialMails = useMemo(
        () => buildInitialMails(initialProgress),
        [initialProgress]
    );

    const [mails, setMails] = useState(initialMails);
    const [progress, setProgress] = useState(initialProgress);
    const [showNotification, setShowNotification] = useState(
        initialMails.length > 0
    );
    const [lastMailSubject, setLastMailSubject] = useState(
        initialMails.length > 0
            ? initialMails[initialMails.length - 1].subject || ""
            : ""
    );

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
