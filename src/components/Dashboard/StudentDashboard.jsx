import Icon from "../Desktop/Icon/Icon";
import Window from "../_shared/Window/Window";
import Taskbar from "../_shared/Taskbar/Taskbar";
import { useWindowManager } from "../../hooks/useWindowManager";
import { dashboardAppConfig, getDashboardMenuApps } from "./appConfig.jsx";

import "./StudentDashboard.scss";

export default function StudentDashboard({ team }) {
    const {
        openWindows,
        openApp,
        bringToFront,
        closeWindow,
        minimizeWindow,
    } = useWindowManager();

    const openDashboardApp = (appName) => {
        const config = dashboardAppConfig[appName];
        if (!config) return;
        openApp(appName, config);
    };

    const renderContent = (win) => {
        const app = dashboardAppConfig[win.app];
        if (!app?.render) return <div>Onbekende app</div>;
        return app.render({ team });
    };

    return (
        <div className="dashboard">
            <div className="dashboard-icons">
                <Icon
                    label="Team Info"
                    icon="/icons/team.ico"
                    onDoubleClick={() => openDashboardApp("teaminfo")}
                />

                <Icon
                    label="Challenges"
                    icon="/icons/challenges.ico"
                    onDoubleClick={() => openDashboardApp("challenges")}
                />

                <Icon
                    label="Leaderboard"
                    icon="/icons/leaderboard.ico"
                    onDoubleClick={() => openDashboardApp("leaderboard")}
                />

                <Icon
                    label="Mail"
                    icon="/icons/email.ico"
                    onDoubleClick={() => openDashboardApp("mail")}
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
                            minimizeWindow(w.id)
                        }
                        onClick={() => bringToFront(w.id)}
                    >
                        {renderContent(w)}
                    </Window>
                ))}

            <Taskbar
                openWindows={openWindows}
                openApp={openDashboardApp}
                bringToFront={bringToFront}
                menuApps={getDashboardMenuApps()}
            />
        </div>
    );
}
