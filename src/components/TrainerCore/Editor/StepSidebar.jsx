import React from "react";

function getStepStatus(index, completedSteps) {
    const isCompleted = completedSteps.includes(index);
    const isUnlocked = index === 0 || completedSteps.includes(index - 1);

    if (isCompleted) {
        return {
            completed: true,
            unlocked: true,
            label: "Voltooid",
            marker: "OK",
        };
    }

    if (isUnlocked) {
        return {
            completed: false,
            unlocked: true,
            label: "Beschikbaar",
            marker: String(index + 1).padStart(2, "0"),
        };
    }

    return {
        completed: false,
        unlocked: false,
        label: "Vergrendeld",
        marker: "--",
    };
}

const StepSidebar = ({
    steps,
    currentIndex,
    onSelect,
    completedSteps = [],
}) => {
    return (
        <aside className="step-sidebar" aria-label="Trainingsstappen">
            <div className="step-sidebar__header">
                <p className="step-sidebar__eyebrow">Trainingsstappen</p>
                <h2>Opdrachten</h2>
                <p>Werk de opdrachten rustig op volgorde af.</p>
            </div>

            <ol className="step-sidebar__list">
                {steps.map((step, index) => {
                    const status = getStepStatus(index, completedSteps);

                    return (
                        <li key={step.id}>
                            <button
                                type="button"
                                className={[
                                    "step-sidebar__item",
                                    index === currentIndex ? "is-active" : "",
                                    status.completed ? "is-completed" : "",
                                    !status.unlocked ? "is-locked" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                onClick={() => status.unlocked && onSelect(index)}
                                disabled={!status.unlocked}
                                aria-current={
                                    index === currentIndex ? "step" : undefined
                                }
                            >
                                <span className="step-sidebar__marker">
                                    {status.marker}
                                </span>

                                <span className="step-sidebar__copy">
                                    <span className="step-sidebar__title">
                                        {step.title}
                                    </span>
                                    <span className="step-sidebar__status">
                                        {status.label}
                                    </span>
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </aside>
    );
};

export default StepSidebar;
