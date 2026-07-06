import { useEffect, useState } from "react";
import AppDesktopShell from "../_shared/AppDesktopShell/AppDesktopShell";
import AgentStatusCard from "../_shared/AgentStatusCard/AgentStatusCard";
import {
    buildDesktopIcons,
    buildMenuApps,
    renderConfiguredApp,
} from "../_shared/appConfig";
import { useWindowManager } from "../../hooks/useWindowManager";
import { useChallengeTracking } from "../../hooks/useChallengeTracking";
import LiveTerminalOpsApp from "./apps/LiveTerminalOpsApp";
import BriefingApp from "./apps/BriefingApp";
import "../Desktop/Desktop.scss";
import "./TerminalOpsDesktop.scss";

const terminalOpsAppConfig = {
    briefing: {
        key: "briefing",
        title: "Mission Briefing",
        desktopLabel: "Briefing",
        icon: "/icons/notepad.ico",
        width: 520,
        height: 520,
        render: () => <BriefingApp />,
    },
    terminal: {
        key: "terminal",
        title: "MS-DOS Prompt",
        desktopLabel: "Terminal",
        icon: "/icons/terminal.ico",
        width: 620,
        height: 420,
        render: ({ onMissionComplete, isCompleted }) => (
            <LiveTerminalOpsApp
                onMissionComplete={onMissionComplete}
                isCompleted={isCompleted}
            />
        ),
    },
};

const terminalOpsOrder = ["briefing", "terminal"];

export default function TerminalOpsDesktop() {
    const { openWindows, openApp, bringToFront, closeWindow, minimizeWindow } =
        useWindowManager();
    const { complete } = useChallengeTracking("/terminal-ops");
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        openApp("terminal", terminalOpsAppConfig.terminal);
    }, [openApp]);

    const handleMissionComplete = async () => {
        if (isCompleted) {
            return;
        }

        setIsCompleted(true);

        try {
            await complete();
        } catch (error) {
            console.error("Terminal Ops completion failed", error);
            setIsCompleted(false);
        }
    };

    const icons = buildDesktopIcons(terminalOpsAppConfig, terminalOpsOrder);
    const menuApps = buildMenuApps(terminalOpsAppConfig, terminalOpsOrder);

    return (
        <AppDesktopShell
            className="desktop-environment terminal-ops-desktop"
            iconsClassName="desktop-icons"
            icons={icons}
            openWindows={openWindows}
            openApp={(appKey) => openApp(appKey, terminalOpsAppConfig[appKey])}
            bringToFront={bringToFront}
            closeWindow={closeWindow}
            minimizeWindow={minimizeWindow}
            renderWindowContent={(windowItem) =>
                renderConfiguredApp(terminalOpsAppConfig, windowItem.app, {
                    onMissionComplete: handleMissionComplete,
                    isCompleted,
                })
            }
            menuApps={menuApps}
            watermark={{
                src: "/svgs/interpol-logo.svg",
                className: "desktop-watermark",
                alt: "Interpol Watermark",
            }}
        >
            <AgentStatusCard mode="training" />
        </AppDesktopShell>
    );
}
