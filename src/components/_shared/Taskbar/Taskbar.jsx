import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../ProtectedRoute/_context/AuthContext";

import "./Taskbar.scss";

export default function Taskbar({
    openWindows,
    bringToFront,
    openApp,
    menuApps = []
}) {
    const navigate = useNavigate();
    const { logout } = useAuth();

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
                        {menuApps.map((app) => (
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
