import { createContext, useState, useEffect } from "react";
import questMails from "./../data/questMails";
import { loadProgress, updateProgress } from "./../data/progressStorage";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [mails, setMails] = useState([]);
    const [progress, setProgress] = useState(() => loadProgress());
    const [showNotification, setShowNotification] = useState(false);
    const [lastMailSubject, setLastMailSubject] = useState('');

    const unlockMail = (trigger) => {
        const newMails = questMails.filter(m => m.trigger === trigger);
        if (newMails.length > 0) {
            setMails(prev => [...prev, ...newMails]);
            setLastMailSubject(newMails[newMails.length - 1].subject || '');
            setShowNotification(true);
        }
        const updated = updateProgress(trigger, true);
        setProgress(updated);
    };

    const addMail = (mail) => {
        if (!mail) return;
        const m = { id: Date.now(), ...mail };
        setMails(prev => [...prev, m]);
        setLastMailSubject(mail.subject || '');
        setShowNotification(true);
    };

    // ✅ Bij eerste load: voeg startmails + mails van alle voltooide stappen
    useEffect(() => {
        let initialMails = questMails.filter(m => m.startMail);

        Object.keys(progress).forEach(trigger => {
            if (progress[trigger]) {
                const unlocked = questMails.filter(m => m.trigger === trigger);
                initialMails = [...initialMails, ...unlocked];
            }
        });

        setMails(initialMails);

        if (initialMails.length > 0) {
            setLastMailSubject(initialMails[initialMails.length - 1].subject || '');
            setShowNotification(true);
        }
    }, []);

    // ✅ Reset met Ctrl+Shift+R
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
