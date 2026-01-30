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
    const [saving, setSaving] = useState(null); // key: `${challengeId}-${className}`

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await getAdminChallengesByClass();
            setClasses(Array.isArray(data.classes) ? data.classes : []);
            setChallenges(Array.isArray(data.challenges) ? data.challenges : []);
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
            await toggleChallengeForClass(challengeId, className, !currentValue);

            // Optimistische update
            setChallenges(prev =>
                prev.map(ch =>
                    ch.id !== challengeId
                        ? ch
                        : {
                            ...ch,
                            perClass: {
                                ...(ch.perClass || {}),
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

    const gridCols = `1fr repeat(${classes.length}, minmax(70px, 1fr))`;

    return (
        <>
            <div className="challenge-header">
                <h1>Challengebeheer</h1>
            </div>
            <div className="challenge-table">
                {/* Header */}            
                <div className="challenge-row header" style={{ gridTemplateColumns: gridCols }}>
                    <div className="challenge-name">Challenge</div>
                    {classes.map((c) => {
                        const cls = typeof c === "string" ? c : c?.class;
                        return (
                            <div key={cls} className="challenge-col">
                                {(cls || "").toUpperCase()}
                            </div>
                        );
                    })}
                </div>

                {/* Rows */}
                {challenges.map((ch) => (
                    <div key={ch.id} className="challenge-row" style={{ gridTemplateColumns: gridCols }}>
                        <div className="challenge-name">
                            {ch.title || "(zonder naam)"}
                        </div>

                        {classes.map((c) => {
                            const cls = typeof c === "string" ? c : c?.class;
                            const active = !!(ch.perClass && cls ? ch.perClass[cls] : false);
                            const key = `${ch.id}-${cls}`;
                            const disabled = saving === key;

                            return (
                                <div key={cls} className="challenge-col">
                                    <input
                                        type="checkbox"
                                        checked={active}
                                        disabled={disabled}
                                        onChange={() => handleToggle(ch.id, cls, active)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
}
