import { useState } from "react";
import Icon from "../Desktop/Icon/Icon";
import Window from "../Desktop/Window/Window";
import Taskbar from "../Desktop/Taskbar/Taskbar";
import TeamInfoApp from "./apps/TeamInfoApp/TeamInfoApp";
import ChallengesApp from "./apps/ChallengesApp/ChallengesApp";
import LeaderboardApp from "./apps/LeaderboardApp/LeaderboardApp";

import "./StudentDashboard.scss";

const dashboardApps = {
    teaminfo: { width: 520, height: 400, title: "Team Info" },
    challenges: { width: 700, height: 500, title: "Challenges" },
    leaderboard: { width: 700, height: 500, title: "Leaderboard" },
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

    const renderContent = (app) => {
        switch (app.app) {
            case "teaminfo":
                return <TeamInfoApp team={team} />;
            case "challenges":
                return <ChallengesApp team={team} />;
            case "leaderboard":
                return <LeaderboardApp />;
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
                                    win.id === w.id ? { ...win, minimized: true } : win
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
