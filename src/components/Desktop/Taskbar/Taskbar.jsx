import { useState, useContext, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "./../_context/GameContext";
import { useAuth } from "./../../ProtectedRoute/_context/AuthContext";
import "./Taskbar.scss";

const Taskbar = ({ openWindows, bringToFront, openApp }) => {
    const { progress } = useContext(GameContext);
    const { logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    // Sluit menu bij klik buiten start-menu
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("pointerdown", handleClickOutside);
        } else {
            document.removeEventListener("pointerdown", handleClickOutside);
        }

        return () => document.removeEventListener("pointerdown", handleClickOutside);
    }, [menuOpen]);

    // Apps afhankelijk van progress
    const availableApps = useCallback(() => {
        const baseApps = [
            { key: "terminal", label: "Terminal", icon: "/icons/terminal.ico" },
            { key: "mail", label: "E-mail", icon: "/icons/email.ico" },
        ];
        if (progress.terminalDone) {
            baseApps.push({ key: "dossier", label: "Dossiers", icon: "/icons/documents.ico" });
        }
        if (progress.dossierDone) {
            baseApps.push({ key: "editor", label: "Editor", icon: "/icons/notepad.ico" });
        }
        if (progress.virusExecutionSimulated) {
            baseApps.push({ key: "newteam", label: "Nieuw Team", icon: "/icons/team.ico" });
        }
        return baseApps;
    }, [progress]);

    // Uitlogactie
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/"); // terug naar login
        } catch (err) {
            console.error("Logout mislukt:", err);
        }
    };

    return (
        <div className="taskbar">
            <button
                className="taskbar__start"
                aria-haspopup="true"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                Start
            </button>

            {menuOpen && (
                <div
                    className="taskbar__menu"
                    ref={menuRef}
                    role="menu"
                    aria-label="Start menu"
                >
                    <ul>
                        {availableApps().map((app) => (
                            <li
                                key={app.key}
                                className="taskbar__menu-item"
                                role="menuitem"
                                tabIndex={0}
                                onClick={() => {
                                    openApp(app.key);
                                    setMenuOpen(false);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        openApp(app.key);
                                        setMenuOpen(false);
                                    }
                                }}
                            >
                                <span className="icon" aria-hidden="true">
                                    <img src={app.icon} alt="" className="taskbar__menu-icon" />
                                </span>
                                {app.label}
                            </li>
                        ))}

                        <hr className="taskbar__separator" />

                        <li
                            className="taskbar__menu-item taskbar__menu-item--logout"
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => {
                                handleLogout();
                                setMenuOpen(false);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleLogout();
                                    setMenuOpen(false);
                                }
                            }}
                        >
                            {/* <span className="icon" aria-hidden="true">
                                <img src="/icons/shutdown.ico" alt="" className="taskbar__menu-icon" />
                            </span> */}
                            Log out
                        </li>
                    </ul>
                </div>
            )}

            <div className="taskbar__windows">
                {openWindows.map((w) => (
                    <button
                        key={w.id}
                        className={`taskbar__window-button ${w.minimized ? "" : "taskbar__window-button--active"
                            }`}
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
