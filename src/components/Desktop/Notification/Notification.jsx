import { useState, useEffect, useRef } from "react";
import "./Notification.scss";

const Notification = ({ show, subject, onClick }) => {
    const [visible, setVisible] = useState(false);
    const [exiting, setExiting] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (show) {
            // Als show = true → toon notificatie
            clearTimeout(timeoutRef.current);
            setVisible(true);
            setExiting(false);
        } else if (visible) {
            // Als show = false maar notificatie is zichtbaar → animatie exit
            setExiting(true);
            timeoutRef.current = setTimeout(() => {
                setVisible(false);
                setExiting(false);
            }, 300); // moet gelijk zijn aan CSS exit-duration
        }

        return () => clearTimeout(timeoutRef.current);
    }, [show, visible]);

    if (!visible) return null;

    return (
        <div
            className={`desktop-notification ${exiting ? "desktop-notification--exit" : "desktop-notification--enter"}`}
            onClick={onClick}
            role="alert"
        >
            <span>Nieuwe mail ontvangen</span>
            <br />
            <strong>{subject}</strong>
        </div>
    );
};

export default Notification;
