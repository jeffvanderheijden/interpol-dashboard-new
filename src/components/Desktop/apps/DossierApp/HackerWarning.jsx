import { useEffect, useRef } from "react";
import "./HackerWarning.scss";

export default function HackerWarning({ onFinished }) {
    const rootRef = useRef(null);

    useEffect(() => {
        const el = rootRef.current;

        // Fade-out after 3s
        const timeout = setTimeout(() => {
            el.classList.add("hacker-skull--fade-out");
            setTimeout(() => onFinished?.(), 700);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [onFinished]);

    return (
        <div ref={rootRef} className="hacker-skull-overlay">

            {/* glitching warning text */}
            <div className="glitch" data-text="INTRUDER DETECTED">
                INTRUDER DETECTED
            </div>

            <div className="glitch small" data-text="ACCESS OVERRIDE">
                ACCESS OVERRIDE
            </div>

        </div>
    );
}
