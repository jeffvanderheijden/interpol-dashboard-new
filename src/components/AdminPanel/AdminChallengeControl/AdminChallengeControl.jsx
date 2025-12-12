import { useEffect, useState } from "react";
import {
    getAdminChallengesByClass,
    toggleChallengeForClass
} from "../../../api/challenges";

import "./AdminChallengeControl.scss";

export default function AdminChallengeControl() {
    const [classes, setClasses] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(null); // {challengeId, class}

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await getAdminChallengesByClass();
            setClasses(data.classes);
            setChallenges(data.challenges);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = async (challengeId, className, currentValue) => {
        const key = `${challengeId}-${className}`;
        setSaving(key);

        try {
            await toggleChallengeForClass(
                challengeId,
                className,
                !currentValue
            );

            // Optimistische update
            setChallenges(prev =>
                prev.map(ch =>
                    ch.id !== challengeId
                        ? ch
                        : {
                            ...ch,
                            perClass: {
                                ...ch.perClass,
                                [className]: !currentValue
                            }
                        }
                )
            );
        } catch (err) {
            console.error(err);
            alert("Kon challenge niet wijzigen.");
        } finally {
            setSaving(null);
        }
    };

    if (loading) {
        return <div className="admin-challenges">Laden…</div>;
    }

    return (
        <div className="admin-challenges">

            <h2>Challengebeheer</h2>

            <div className="challenge-table">

                {/* Header */}
                <div className="challenge-row header">
                    <div className="challenge-name">Challenge</div>
                    {classes.map(c => (
                        <th key={c.class}>
                            {c.class.toUpperCase()}
                        </th>
                    ))}
                </div>

                {/* Rows */}
                {challenges.map(ch => (
                    <div key={ch.id} className="challenge-row">
                        <div className="challenge-name">
                            {ch.title}
                        </div>

                        {classes.map(cls => {
                            const checked = ch.perClass[cls];
                            const isSaving =
                                saving === `${ch.id}-${cls}`;

                            return (
                                <div
                                    key={cls}
                                    className="challenge-class"
                                >
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        disabled={isSaving}
                                        onChange={() =>
                                            handleToggle(
                                                ch.id,
                                                cls,
                                                checked
                                            )
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}

            </div>
        </div>
    );
}
