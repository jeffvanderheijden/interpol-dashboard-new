import { useState, useEffect } from 'react';
import './Notification.scss';

const Notification = ({ show, subject, onClick }) => {
    const [isRendered, setIsRendered] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (show) {
            setIsRendered(true);
            setAnimationClass('notification-enter');
        } else if (isRendered) {
            setAnimationClass('notification-exit');
            setTimeout(() => {
                setIsRendered(false);
            }, 300);
        }
    }, [show, isRendered]);

    if (!isRendered) {
        return null;
    }

    return (
        <div
            className={`desktop-notification ${animationClass}`}
            onClick={onClick}
        >
            <span>Nieuwe mail ontvangen</span>
            <br />
            <strong>{subject}</strong>
        </div>
    );
};

export default Notification;