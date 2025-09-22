import { useState, useContext, useEffect, useRef } from "react";
import { GameContext } from "./../_context/GameContext";
import "./Taskbar.scss";

const Taskbar = ({ openWindows, bringToFront, openApp }) => {
    const { progress } = useContext(GameContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // sluit menu bij klik buiten start-menu
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    const apps = [
        { key: "terminal", label: "Terminal", icon: "🖥️" },
        { key: "mail", label: "E-mail", icon: "📬" },
        progress.terminalDone && { key: "dossier", label: "Dossiers", icon: "🗂️" },
        progress.dossierDone && { key: "editor", label: "Editor", icon: "📝" },
        progress.virusExecutionSimulated && { key: "newteam", label: "Nieuw Team", icon: "👥" },
    ].filter(Boolean);

    return (
        <div className="taskbar">
            <button
                className="taskbar__start"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                Start
            </button>

            {menuOpen && (
                <div className="taskbar__menu" ref={menuRef}>
                    <ul>
                        {apps.map((app) => (
                            <li
                                key={app.key}
                                onClick={() => {
                                    openApp(app.key);   
                                    setMenuOpen(false); 
                                }}
                                className="taskbar__menu-item"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        openApp(app.key);
                                        setMenuOpen(false);
                                    }
                                }}
                            >
                                <span className="icon">{app.icon}</span>
                                {app.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="taskbar__windows">
                {openWindows.map((w) => (
                    <button
                        key={w.id}
                        className={`taskbar__window-button`}
                        onClick={() => bringToFront(w.id)}
                    >
                        {w.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Taskbar;
