import { useAuth } from "./../../ProtectedRoute/_context/AuthContext";
import "./AdminIcon.scss";

const AdminIcon = () => {
    const { user } = useAuth();

    if (!user || user.role !== "docent") return null;

    return (
        <a
            href="/admin"
            className="admin-icon desktop-icon"
            title="Ga naar Admin Panel"
        >
            <div className="icon-image">
                <img
                    src="/icons/admin.ico"
                    className="icon-img"
                    alt="Admin Icon"
                />
            </div>
            <div className="icon-label">Admin Panel</div>
        </a>
    );
};

export default AdminIcon;
