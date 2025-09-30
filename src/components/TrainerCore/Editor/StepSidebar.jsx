import React from "react";

const StepSidebar = ({ steps, currentIndex, onSelect }) => {
    return (
        <ul className="step-sidebar">
            {steps.map((s, i) => (
                <li
                    key={s.id}
                    className={i === currentIndex ? "active" : ""}
                    onClick={() => onSelect(i)}
                >
                    {i + 1}. {s.title}
                </li>
            ))}
        </ul>
    );
};

export default StepSidebar;
