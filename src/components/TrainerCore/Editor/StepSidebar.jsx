import React from "react";

const StepSidebar = ({ steps, currentIndex, onSelect, completedSteps = [] }) => {
    return (
        <div className="step-sidebar">
            <h4>Training</h4>
            <ul>
                {steps.map((s, i) => {
                    const isUnlocked = i === 0 || completedSteps.includes(i - 1);
                    const isCompleted = completedSteps.includes(i);
                    return (
                        <li
                            key={s.id}
                            className={`${i === currentIndex ? "active" : ""} ${isCompleted ? "completed" : ""
                                } ${!isUnlocked ? "locked" : ""}`}
                            onClick={() => isUnlocked && onSelect(i)}
                        >
                            {isCompleted ? "✅ " : isUnlocked ? "▶ " : "🔒 "}
                            {s.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default StepSidebar;
