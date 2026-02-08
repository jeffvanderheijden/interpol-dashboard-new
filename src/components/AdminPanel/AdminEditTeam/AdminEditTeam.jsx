import { useState } from "react";
import {
    updateAdminGroup,
    addAdminMember,
    updateAdminMember,
    deleteAdminMember
} from "../../../api/groups";

import "./AdminEditTeam.scss";

export default function AdminEditTeam({ team, onClose, onSaved }) {
    const [name, setName] = useState(team.name);
    const [className, setClassName] = useState(team.class);
    const [image] = useState(team.image_url);

    const [members, setMembers] = useState(
        team.members.map(m => ({
            ...m,
            existing: true
        }))
    );

    const [removedMembers, setRemovedMembers] = useState([]);

    const [newMemberName, setNewMemberName] = useState("");
    const [newMemberNum, setNewMemberNum] = useState("");

    // NEW MEMBER
    const handleAddMember = () => {
        if (!newMemberName.trim() || !newMemberNum.trim()) return;

        setMembers(prev => [
            ...prev,
            {
                id: "new_" + Math.random(),
                name: newMemberName,
                student_number: newMemberNum,
                existing: false
            }
        ]);

        setNewMemberName("");
        setNewMemberNum("");
    };

    const handleRemoveMember = (member) => {
        if (member.existing) {
            setRemovedMembers(prev => [...prev, member.id]);
        }
        setMembers(prev => prev.filter((m) => m.id !== member.id));
    };

    const updateMemberField = (id, field, value) => {
        setMembers(prev =>
            prev.map((m) =>
                m.id === id ? { ...m, [field]: value } : m
            )
        );
    };

    // SAVE ALL CHANGES
    const handleSave = async () => {
        // 1. Team info
        await updateAdminGroup(team.id, {
            name,
            className,
            image_url: image
        });

        // 2. Delete members
        for (let id of removedMembers) {
            await deleteAdminMember(team.id, id);
        }

        // 3. Add/update members
        for (let m of members) {
            if (m.existing) {
                await updateAdminMember(team.id, m.id, {
                    name: m.name,
                    student_number: m.student_number
                });
            } else {
                await addAdminMember(team.id, {
                    name: m.name,
                    student_number: m.student_number
                });
            }
        }

        onSaved();
    };

    return (
        <div className="team-edit-modal-backdrop">
            <div className="team-edit-modal">

                <h2>Team bewerken</h2>

                <div className="modal-section-half">
                    <div className="modal-section">
                        <label>Teamnaam</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="modal-section">
                        <label>Klas</label>
                        <input value={className} onChange={(e) => setClassName(e.target.value)} />
                    </div>
                </div>

                <h3>Teamleden</h3>

                {members.map((m) => (
                    <div key={m.id} className="member-row">
                        <input
                            value={m.name}
                            onChange={(e) => updateMemberField(m.id, "name", e.target.value)}
                            placeholder="Naam"
                        />
                        <input
                            value={m.student_number}
                            onChange={(e) => updateMemberField(m.id, "student_number", e.target.value)}
                            placeholder="Studentnummer"
                        />
                        <button className="delete" onClick={() => handleRemoveMember(m)}>X</button>
                    </div>
                ))}

                <h4>Nieuw lid toevoegen</h4>

                <div className="member-add">
                    <input
                        placeholder="Naam"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                    />
                    <input
                        placeholder="Studentnummer"
                        value={newMemberNum}
                        onChange={(e) => setNewMemberNum(e.target.value)}
                    />
                    <button onClick={handleAddMember}>Toevoegen</button>
                </div>

                <div className="modal-footer">
                    <button onClick={onClose}>Annuleren</button>
                    <button className="save-btn" onClick={handleSave}>Opslaan</button>
                </div>

            </div>
        </div>
    );
}
