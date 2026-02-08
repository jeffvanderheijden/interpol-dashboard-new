import TeamInfoApp from "./apps/TeamInfoApp/TeamInfoApp";
import ChallengesApp from "./apps/ChallengesApp/ChallengesApp";
import LeaderboardApp from "./apps/LeaderboardApp/LeaderboardApp";
import MailApp from "./apps/MailApp/MailApp";

export const dashboardAppConfig = {
    teaminfo: {
        key: "teaminfo",
        title: "Team Info",
        icon: "/icons/team.ico",
        width: 520,
        height: 400,
        render: ({ team }) => <TeamInfoApp team={team} />,
    },
    challenges: {
        key: "challenges",
        title: "Challenges",
        icon: "/icons/challenges.ico",
        width: 700,
        height: 500,
        render: ({ team }) => <ChallengesApp team={team} />,
    },
    leaderboard: {
        key: "leaderboard",
        title: "Leaderboard",
        icon: "/icons/leaderboard.ico",
        width: 700,
        height: 500,
        render: () => <LeaderboardApp />,
    },
    mail: {
        key: "mail",
        title: "Mail",
        icon: "/icons/email.ico",
        width: 720,
        height: 520,
        render: () => <MailApp />,
    },
};

const dashboardMenuOrder = ["teaminfo", "challenges", "leaderboard", "mail"];

export function getDashboardMenuApps() {
    return dashboardMenuOrder
        .map((key) => dashboardAppConfig[key])
        .filter(Boolean)
        .map((app) => ({
            key: app.key,
            label: app.title,
            icon: app.icon,
        }));
}
