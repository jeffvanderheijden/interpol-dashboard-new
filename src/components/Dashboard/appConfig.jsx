import TeamInfoApp from "./apps/TeamInfoApp/TeamInfoApp";
import ChallengesApp from "./apps/ChallengesApp/ChallengesApp";
import LeaderboardApp from "./apps/LeaderboardApp/LeaderboardApp";
import MailApp from "./apps/MailApp/MailApp";
import { buildMenuApps } from "../_shared/appConfig";

export const dashboardAppConfig = {
    teaminfo: {
        key: "teaminfo",
        title: "Team Info",
        desktopLabel: "Team Info",
        icon: "/icons/team.ico",
        width: 520,
        height: 400,
        render: () => <TeamInfoApp />,
    },
    challenges: {
        key: "challenges",
        title: "Challenges",
        desktopLabel: "Challenges",
        icon: "/icons/challenges.ico",
        width: 700,
        height: 500,
        render: () => <ChallengesApp />,
    },
    leaderboard: {
        key: "leaderboard",
        title: "Leaderboard",
        desktopLabel: "Leaderboard",
        icon: "/icons/leaderboard.ico",
        width: 700,
        height: 500,
        render: () => <LeaderboardApp />,
    },
    mail: {
        key: "mail",
        title: "Mail",
        desktopLabel: "Mail",
        icon: "/icons/email.ico",
        width: 720,
        height: 520,
        render: () => <MailApp />,
    },
};

export const dashboardAppOrder = ["teaminfo", "challenges", "leaderboard", "mail"];

export function getDashboardMenuApps() {
    return buildMenuApps(dashboardAppConfig, dashboardAppOrder);
}
