import { useEffect, useState } from "react";
import { getAdminGroups, deleteAdminGroup } from "./../../api/groups";

import AdminEditTeam from "./AdminEditTeam/AdminEditTeam";
import AdminEditTeamImage from "./AdminEditTeam/AdminEditTeamImage";
import AdminCreateTeam from "./AdminCreateTeam/AdminCreateTeam";
import AdminChallengeControl from "./AdminChallengeControl/AdminChallengeControl";

import "./AdminPanel.scss";

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState("teams"); // ⭐ tabs

    const [groups, setGroups] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const [editImage, setEditImage] = useState(null);
    const [editTeam, setEditTeam] = useState(null);
    const [createTeam, setCreateTeam] = useState(false);

    const [search, setSearch] = useState("");
    const [classFilter, setClassFilter] = useState("all");

    // -------------------------------------------
    // Load groups
    // -------------------------------------------
    const loadGroups = () => {
        getAdminGroups().then((data) => {
            setGroups(data);
            setFiltered(data);
        });
    };

    useEffect(() => {
        loadGroups();
    }, []);

    const refreshGroups = () => loadGroups();

    // -------------------------------------------
    // Filtering (alleen voor team-tab)
    // -------------------------------------------
    useEffect(() => {
        if (activeTab !== "teams") return;

        let data = [...groups];

        if (search.trim() !== "") {
            const s = search.toLowerCase();
            data = data.filter((g) =>
                g.name.toLowerCase().includes(s) ||
                g.class.toLowerCase().includes(s) ||
                (g.members || []).some(
                    (m) =>
                        m.name.toLowerCase().includes(s) ||
                        m.student_number.toLowerCase().includes(s)
                )
            );
        }

        if (classFilter !== "all") {
            data = data.filter((g) => g.class === classFilter);
        }

        setFiltered(data);
    }, [search, classFilter, groups, activeTab]);

    // -------------------------------------------
    // Delete group
    // -------------------------------------------
    const handleDelete = async (id) => {
        if (!confirm("Weet je zeker dat je dit team wilt verwijderen?")) return;
        await deleteAdminGroup(id);
        setGroups((prev) => prev.filter((g) => g.id !== id));
    };

    return (
        <div className="admin-panel">

            {/* ---------------------------- */}
            {/* TABS */}
            {/* ---------------------------- */}
            <div className="admin-tabs">
                <button
                    className={activeTab === "teams" ? "active" : ""}
                    onClick={() => setActiveTab("teams")}
                >
                    Teambeheer
                </button>

                <button
                    className={activeTab === "challenges" ? "active" : ""}
                    onClick={() => setActiveTab("challenges")}
                >
                    Challengebeheer
                </button>
            </div>

            {/* ===================================================== */}
            {/* TAB: TEAMBEHEER */}
            {/* ===================================================== */}
            {activeTab === "teams" && (
                <>
                    {/* HEADER + FILTERS */}
                    <div className="admin-header">
                        <h1>Teambeheer</h1>

                        <div className="admin-filters">
                            <input
                                type="text"
                                placeholder="Zoeken…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <select
                                value={classFilter}
                                onChange={(e) =>
                                    setClassFilter(e.target.value)
                                }
                            >
                                <option value="all">Alle klassen</option>
                                {[...new Set(groups.map((g) => g.class))].map(
                                    (cls) => (
                                        <option key={cls} value={cls}>
                                            {cls}
                                        </option>
                                    )
                                )}
                            </select>

                            <button
                                className="new-team-btn"
                                onClick={() => setCreateTeam(true)}
                            >
                                + Nieuw team
                            </button>
                        </div>
                    </div>

                    {/* TEAM LIST */}
                    <div className="team-list">
                        {filtered.map((group) => (
                            <div className="team-card" key={group.id}>
                                <div className="team-left">
                                    <img
                                        className="team-avatar"
                                        src={
                                            group.image_url ||
                                            "/icons/default-team.png"
                                        }
                                        alt={group.name}
                                        onClick={() => setEditImage(group)}
                                        style={{ cursor: "pointer" }}
                                    />

                                    <div className="team-info">
                                        <h2>{group.name}</h2>
                                        <p className="team-meta">
                                            {group.class} •{" "}
                                            {group.members?.length || 0} leden
                                        </p>

                                        <p className="team-members">
                                            {group.members?.length
                                                ? group.members
                                                    .map(
                                                        (m) =>
                                                            `${m.name} (${m.student_number})`
                                                    )
                                                    .join(", ")
                                                : "—"}
                                        </p>
                                    </div>
                                </div>

                                <div className="team-right">
                                    <div className="team-score">
                                        <span>Punten</span>
                                        <strong>
                                            {group.total_points ?? 0}
                                        </strong>
                                    </div>

                                    <div className="team-actions">
                                        <button
                                            className="view-btn"
                                            onClick={() =>
                                                setEditTeam(group)
                                            }
                                        >
                                            Bewerken
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDelete(group.id)
                                            }
                                        >
                                            Verwijderen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* ===================================================== */}
            {/* TAB: CHALLENGEBEHEER */}
            {/* ===================================================== */}
            {activeTab === "challenges" && (
                <AdminChallengeControl />
            )}

            {/* ---------------------------- */}
            {/* MODALS (global) */}
            {/* ---------------------------- */}
            {createTeam && (
                <AdminCreateTeam
                    onClose={() => setCreateTeam(false)}
                    onSaved={() => {
                        setCreateTeam(false);
                        refreshGroups();
                    }}
                />
            )}

            {editTeam && (
                <AdminEditTeam
                    team={editTeam}
                    onClose={() => setEditTeam(null)}
                    onSaved={() => {
                        setEditTeam(null);
                        refreshGroups();
                    }}
                />
            )}

            {editImage && (
                <AdminEditTeamImage
                    team={editImage}
                    onClose={() => setEditImage(null)}
                    onSaved={() => {
                        setEditImage(null);
                        refreshGroups();
                    }}
                />
            )}
        </div>
    );
}
