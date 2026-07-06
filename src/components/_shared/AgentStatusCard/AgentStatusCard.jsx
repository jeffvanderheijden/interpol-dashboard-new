import { useAuth } from "../../ProtectedRoute/_context/AuthContext";
import "./AgentStatusCard.scss";

function buildAgentLabel(user) {
    if (!user?.username) {
        return "Onbekend";
    }

    return String(user.name || user.username).trim();
}

export default function AgentStatusCard({ mode = "training" }) {
    const { user } = useAuth();

    const isDashboard = mode === "dashboard";
    const operationLabel = isDashboard
        ? "Active Case Dashboard"
        : "Training Protocol";
    const clearanceLabel = user?.teamId ? "Field Agent" : "Trainee";
    const assignmentLabel = user?.teamId
        ? `Unit #${user.teamId}`
        : "Nog niet toegewezen";
    const statusLabel = user ? "Secure session actief" : "Lokale trainingsmodus";

    return (
        <aside className="agent-status-card" aria-label="Interpol agent status">
            <p className="agent-status-card__eyebrow">Interpol Secure Network</p>
            <h2>Agent Status</h2>

            <dl className="agent-status-card__grid">
                <div>
                    <dt>Agent</dt>
                    <dd>{buildAgentLabel(user)}</dd>
                </div>
                <div>
                    <dt>Clearance</dt>
                    <dd>{clearanceLabel}</dd>
                </div>
                <div>
                    <dt>Operatie</dt>
                    <dd>{operationLabel}</dd>
                </div>
                <div>
                    <dt>Toewijzing</dt>
                    <dd>{assignmentLabel}</dd>
                </div>
            </dl>

            <p className="agent-status-card__footer">
                <span className="agent-status-card__dot" aria-hidden="true" />
                {statusLabel}
            </p>
        </aside>
    );
}
