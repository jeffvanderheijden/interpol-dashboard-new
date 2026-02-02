import { useState } from "react";
import Icon from "../Desktop/Icon/Icon";
import Window from "../_shared/Window/Window";
import Taskbar from "../_shared/Taskbar/Taskbar";

import TeamInfoApp from "./apps/TeamInfoApp/TeamInfoApp";
import ChallengesApp from "./apps/ChallengesApp/ChallengesApp";
import LeaderboardApp from "./apps/LeaderboardApp/LeaderboardApp";
import MailApp from "./apps/MailApp/MailApp";

import "./StudentDashboard.scss";

const dashboardApps = {
    teaminfo: { width: 520, height: 400, title: "Team Info" },
    challenges: { width: 700, height: 500, title: "Challenges" },
    leaderboard: { width: 700, height: 500, title: "Leaderboard" },
    mail: { width: 720, height: 520, title: "Mail" },
};

export default function StudentDashboard({ team }) {
    const [openWindows, setOpenWindows] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(1);

    const nextTopZ = () => {
        setZIndexCounter((prev) => prev + 1);
        return zIndexCounter + 1;
    };

    const openApp = (appName) => {
        const config = dashboardApps[appName];
        if (!config) return;

        if (!openWindows.find((w) => w.app === appName)) {
            const topZ = nextTopZ();
            setOpenWindows((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    app: appName,
                    title: config.title,
                    width: config.width,
                    height: config.height,
                    z: topZ,
                    minimized: false,
                },
            ]);
        }
    };

    const bringToFront = (id) => {
        const topZ = nextTopZ();
        setOpenWindows((prev) =>
            prev.map((w) =>
                w.id === id
                    ? { ...w, minimized: false, z: topZ }
                    : w
            )
        );
    };

    const closeWindow = (id) => {
        setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    };

    const renderContent = (win) => {
        switch (win.app) {
            case "teaminfo":
                return <TeamInfoApp team={team} />;
            case "challenges":
                return <ChallengesApp team={team} />;
            case "leaderboard":
                return <LeaderboardApp />;
            case "mail":
                return <MailApp />;
            default:
                return <div>Onbekende app</div>;
        }
    };

    return (
        <div className="dashboard">
            <div className="dashboard-icons">
                <Icon
                    label="Team Info"
                    icon="/icons/team.ico"
                    onDoubleClick={() => openApp("teaminfo")}
                />

                <Icon
                    label="Challenges"
                    icon="/icons/challenges.ico"
                    onDoubleClick={() => openApp("challenges")}
                />

                <Icon
                    label="Leaderboard"
                    icon="/icons/leaderboard.ico"
                    onDoubleClick={() => openApp("leaderboard")}
                />

                <Icon
                    label="Mail"
                    icon="/icons/email.ico"
                    onDoubleClick={() => openApp("mail")}
                />
            </div>

            {/* Windows */}
            {openWindows
                .filter((w) => !w.minimized)
                .map((w) => (
                    <Window
                        key={w.id}
                        title={w.title}
                        zIndex={w.z}
                        width={w.width}
                        height={w.height}
                        onClose={() => closeWindow(w.id)}
                        onMinimize={() =>
                            setOpenWindows((prev) =>
                                prev.map((win) =>
                                    win.id === w.id
                                        ? { ...win, minimized: true }
                                        : win
                                )
                            )
                        }
                        onClick={() => bringToFront(w.id)}
                    >
                        {renderContent(w)}
                    </Window>
                ))}

            <Taskbar
                mode="dashboard"
                openWindows={openWindows}
                openApp={openApp}
                bringToFront={bringToFront}
            />
        </div>
    );
}
