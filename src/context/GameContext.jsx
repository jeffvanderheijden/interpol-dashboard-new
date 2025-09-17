import { createContext, useState, useEffect } from "react";
import questMails from "./../data/questMails";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [mails, setMails] = useState(() => questMails.filter(m => m.startMail) || []);
    const [progress, setProgress] = useState({});
    const [showNotification, setShowNotification] = useState(false);
    const [lastMailSubject, setLastMailSubject] = useState('');

    const unlockMail = (trigger) => {
        const newMails = questMails.filter(m => m.trigger === trigger);
        if (newMails.length > 0) {
            setMails(prev => [...prev, ...newMails]);
            setLastMailSubject(newMails[newMails.length - 1].subject || '');
            setShowNotification(true);
        }
    };

    const addMail = (mail) => {
        if (!mail) return;
        const m = { id: Date.now(), ...mail };
        setMails(prev => [...prev, m]);
        setLastMailSubject(mail.subject || '');
        setShowNotification(true);
    };

    useEffect(() => {
        const startingMails = questMails.filter(m => m.startMail) || [];
        if (startingMails.length > 0) {
            setMails(startingMails);
            setLastMailSubject(startingMails[startingMails.length - 1].subject || '');
            setShowNotification(true);
        }
    }, []);


    return (
        <GameContext.Provider value={{
            mails,
            progress,
            setProgress,
            unlockMail,
            addMail,
            showNotification,
            setShowNotification,
            lastMailSubject
        }}>
            {children}
        </GameContext.Provider>
    );
};
