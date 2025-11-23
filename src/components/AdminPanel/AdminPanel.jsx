import { useEffect, useState } from "react";
import { getAdminGroups, deleteAdminGroup } from "./../../api/groups";
import "./AdminPanel.scss";

export default function AdminPanel() {
    const [groups, setGroups] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const [search, setSearch] = useState("");
    const [classFilter, setClassFilter] = useState("all");

    // -------------------------------------------
    // 1. Load all groups from admin API
    // -------------------------------------------
    useEffect(() => {
        getAdminGroups().then((data) => {
            setGroups(data);
            setFiltered(data);
        });
    }, []);

    // -------------------------------------------
    // 2. Filtering logic (search + class)
    // -------------------------------------------
    useEffect(() => {
        let data = [...groups];

        // Search (teamnaam, klas, leden)
        if (search.trim() !== "") {
            const s = search.toLowerCase();
            data = data.filter((g) =>
                (g.name || "").toLowerCase().includes(s) ||
                (g.class || "").toLowerCase().includes(s) ||
                (g.membersString || "").toLowerCase().includes(s)
            );
        }

        // Filter op klas
        if (classFilter !== "all") {
            data = data.filter((g) => g.class === classFilter);
        }

        setFiltered(data);
    }, [search, classFilter, groups]);

    // -------------------------------------------
    // 3. Delete group
    // -------------------------------------------
    const handleDelete = async (id) => {
        if (!confirm("Weet je zeker dat je dit team wilt verwijderen?")) return;

        await deleteAdminGroup(id);

        setGroups((prev) => prev.filter((g) => g.id !== id));
    };

    // -------------------------------------------
    // 4. Open team dashboard (docent view)
    // -------------------------------------------
    const openTeamDashboard = (id) => {
        window.location.href = `/dashboard/${id}?as=docent`;
    };

    return (
        <div className="admin-panel">

            <h1>Teambeheer</h1>

            {/* ------------------------- */}
            {/* FILTERS */}
            {/* ------------------------- */}
            <div className="admin-filters">
                <input
                    type="text"
                    placeholder="Zoek op teamnaam / studentnaam / nummer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={classFilter}
                    onChange={(e) => setClassFilter(e.target.value)}
                >
                    <option value="all">Alle klassen</option>
                    {[...new Set(groups.map((g) => g.class))].map((cls) => (
                        <option key={cls} value={cls}>
                            {cls}
                        </option>
                    ))}
                </select>
            </div>

            {/* ------------------------- */}
            {/* TABEL */}
            {/* ------------------------- */}
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Teamnaam</th>
                        <th>Klas</th>
                        <th>Leden</th>
                        <th>Acties</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map((group) => (
                        <tr key={group.id}>
                            <td>{group.id}</td>
                            <td>{group.name}</td>
                            <td>{group.class}</td>
                            <td>{group.memberCount}</td>

                            <td className="admin-actions">
                                <button onClick={() => openTeamDashboard(group.id)}>
                                    Bekijk
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(group.id)}
                                >
                                    Verwijderen
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
