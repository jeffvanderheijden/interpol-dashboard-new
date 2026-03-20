import AppDesktopShell from "../_shared/AppDesktopShell/AppDesktopShell";
import {
    buildDesktopIcons,
    renderConfiguredApp,
} from "../_shared/appConfig";
import { useWindowManager } from "../../hooks/useWindowManager";
import {
    dashboardAppConfig,
    dashboardAppOrder,
    getDashboardMenuApps,
} from "./appConfig.jsx";

import "./StudentDashboard.scss";

export default function StudentDashboard() {
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

    return (
        <AppDesktopShell
            className="dashboard"
            iconsClassName="dashboard-icons"
            icons={buildDesktopIcons(dashboardAppConfig, dashboardAppOrder)}
            openWindows={openWindows}
            openApp={openDashboardApp}
            bringToFront={bringToFront}
            closeWindow={closeWindow}
            minimizeWindow={minimizeWindow}
            renderWindowContent={(windowItem) =>
                renderConfiguredApp(
                    dashboardAppConfig,
                    windowItem.app,
                    undefined,
                    "Onbekende app"
                )
            }
            menuApps={getDashboardMenuApps()}
        />
    );
}
