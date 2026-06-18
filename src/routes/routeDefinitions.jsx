import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import KijkOpDeWijk from "../components/KijkOpDeWijk/KijkOpDeWijk";
import Step2 from "../components/Creacod1/Step2";
import Step3 from "../components/Creacod1/Step3";
import Login from "../pages/Login";
import Training from "../pages/Training";
import Dashboard from "../pages/Dashboard";
import HtmlCss from "../pages/HtmlCss";
import Javascript from "../pages/Javascript";
import CreativeCoding from "../pages/CreativeCoding";
import Admin from "../pages/Admin";
import LeaderboardScreen from "../pages/LeaderboardScreen";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

const studentRoles = ["docent", "student"];

export const publicRoutes = [
    { path: "/", element: <Login /> },
    { path: "/leaderboard", element: <LeaderboardScreen /> },
    { path: "/unauthorized", element: <Unauthorized /> },
    { path: "*", element: <NotFound /> },
];

export const protectedRoutes = [
    { path: "/training", roles: studentRoles, element: <Training /> },
    {
        path: "/dashboard/:teamId",
        roles: studentRoles,
        teamProtected: true,
        element: <Dashboard />,
    },
    {
        path: "/html-css",
        roles: studentRoles,
        challengeRoute: "/html-css",
        element: <HtmlCss />,
    },
    {
        path: "/javascript",
        roles: studentRoles,
        challengeRoute: "/javascript",
        element: <Javascript />,
    },
    {
        path: "/kijk-op-de-wijk",
        roles: studentRoles,
        challengeRoute: "/kijk-op-de-wijk",
        element: <KijkOpDeWijk />,
    },
    {
        path: "/creative-coding",
        roles: studentRoles,
        challengeRoute: "/creative-coding",
        element: <CreativeCoding />,
    },
    {
        path: "/creative-coding/step2",
        roles: studentRoles,
        challengeRoute: "/creative-coding",
        element: <Step2 />,
    },
    {
        path: "/creative-coding/step3",
        roles: studentRoles,
        challengeRoute: "/creative-coding",
        element: <Step3 />,
    },
    { path: "/admin", roles: ["docent"], element: <Admin /> },
];

export function renderRouteElement(route) {
    if (!route.roles?.length) {
        return route.element;
    }

    return (
        <ProtectedRoute
            roles={route.roles}
            teamProtected={route.teamProtected}
            challengeRoute={route.challengeRoute}
        >
            {route.element}
        </ProtectedRoute>
    );
}
