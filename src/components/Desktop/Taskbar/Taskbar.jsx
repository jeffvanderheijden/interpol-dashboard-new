import { useState, useContext, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "./../_context/GameContext"; // alleen gebruikt in training mode
import { useAuth } from "./../../ProtectedRoute/_context/AuthContext";

import "./Taskbar.scss";

export default function Taskbar({
    openWindows,
    bringToFront,
    openApp,
    mode = "training" // 👈 NIEUW: bepaalt welke apps zichtbaar zijn
}) {
    const navigate = useNavigate();
    const { logout } = useAuth();

    // Alleen training mode gebruikt GameContext
    const trainingProgress = mode === "training" ? useContext(GameContext)?.progress : null;

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // -------------------------------
    // Startmenu sluiten bij klik buiten
    // -------------------------------
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

    // -------------------------------
    // App-lijst afhankelijk van MODE
    // -------------------------------
    const availableApps = useCallback(() => {
        if (mode === "dashboard") {
            return [
                { key: "teaminfo", label: "Team Info", icon: "/icons/team.ico" },
                { key: "challenges", label: "Challenges", icon: "/icons/challenges.ico" },
                { key: "leaderboard", label: "Leaderboard", icon: "/icons/leaderboard.ico" },
            ];
        }

        // Training mode apps (zoals vroeger)
        const apps = [
            { key: "terminal", label: "Terminal", icon: "/icons/terminal.ico" },
            { key: "mail", label: "E-mail", icon: "/icons/email.ico" },
        ];

        if (trainingProgress?.terminalDone) {
            apps.push({ key: "dossier", label: "Dossiers", icon: "/icons/documents.ico" });
        }
        if (trainingProgress?.dossierDone) {
            apps.push({ key: "editor", label: "Editor", icon: "/icons/notepad.ico" });
        }
        if (trainingProgress?.virusExecutionSimulated) {
            apps.push({ key: "newteam", label: "Nieuw Team", icon: "/icons/team.ico" });
        }

        return apps;
    }, [mode, trainingProgress]);

    // -------------------------------
    // Log out actie
    // -------------------------------
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (err) {
            console.error("Logout mislukt:", err);
        }
    };

    // -------------------------------
    // RENDER
    // -------------------------------
    return (
        <div className="taskbar">
            {/* Start button */}
            <button
                className="taskbar__start"
                aria-haspopup="true"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((p) => !p)}
            >
                Start
            </button>

            {/* Start Menu */}
            {menuOpen && (
                <div className="taskbar__menu" ref={menuRef} role="menu">
                    <ul>
                        {availableApps().map((app) => (
                            <li
                                key={app.key}
                                className="taskbar__menu-item"
                                onClick={() => {
                                    openApp(app.key);
                                    setMenuOpen(false);
                                }}
                            >
                                <img
                                    src={app.icon}
                                    alt=""
                                    className="taskbar__menu-icon"
                                />
                                {app.label}
                            </li>
                        ))}

                        <hr className="taskbar__separator" />

                        {/* LOGOUT */}
                        <li
                            className="taskbar__menu-item taskbar__menu-item--logout"
                            onClick={() => {
                                handleLogout();
                                setMenuOpen(false);
                            }}
                        >
                            Log out
                        </li>
                    </ul>
                </div>
            )}

            {/* Buttons for minimized windows */}
            <div className="taskbar__windows">
                {openWindows.map((win) => (
                    <button
                        key={win.id}
                        className={`taskbar__window-button ${win.minimized ? "" : "taskbar__window-button--active"
                            }`}
                        onClick={() => bringToFront(win.id)}
                    >
                        {win.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
