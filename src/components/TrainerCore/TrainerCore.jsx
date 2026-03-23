import React, { useEffect, useRef, useState } from "react";
import StepSidebar from "./Editor/StepSidebar";
import Editor from "./Editor/Editor";
import Preview from "./Editor/Preview";
import { runAllTests } from "./_helpers/validate";
import {
    loadTrainerProgress,
    saveTrainerProgress,
    updateTrainerProgress,
} from "./_data/trainerProgress";
import "./TrainerCore.scss";

function getStarterCode(lesson, step) {
    if (lesson.language === "htmlcss") {
        return {
            html: String(step?.starter?.html || ""),
            css: String(step?.starter?.css || ""),
        };
    }

    return String(step?.starter?.js || step?.starter || "");
}

function removeLessonProgress(lessonId) {
    const currentProgress = loadTrainerProgress();
    const nextProgress = { ...currentProgress };

    delete nextProgress[lessonId];
    saveTrainerProgress(nextProgress);
}

const TrainerCore = ({ lesson, className = "" }) => {
    const iframeRef = useRef(null);

    const [stepIndex, setStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [drafts, setDrafts] = useState({});
    const [results, setResults] = useState([]);

    const step = lesson.steps[stepIndex];
    const code = drafts[step.id] ?? getStarterCode(lesson, step);
    const completedCount = completedSteps.length;
    const progressPercentage = Math.round(
        (completedCount / lesson.steps.length) * 100
    );
    const isCurrentStepCompleted = completedSteps.includes(stepIndex);
    const hasNextStep = stepIndex < lesson.steps.length - 1;
    const isNextStepUnlocked =
        hasNextStep && (isCurrentStepCompleted || completedSteps.includes(stepIndex));

    useEffect(() => {
        const storedProgress = loadTrainerProgress();
        const lessonProgress = storedProgress[lesson.id] || {};

        const completedIndices = lesson.steps.reduce((indices, lessonStep, index) => {
            if (lessonProgress[lessonStep.id]) {
                indices.push(index);
            }

            return indices;
        }, []);

        const nextIndex =
            completedIndices.length === 0
                ? 0
                : Math.min(
                    Math.max(...completedIndices) + 1,
                    lesson.steps.length - 1
                );

        setCompletedSteps(completedIndices);
        setStepIndex(nextIndex);
        setDrafts({});
        setResults([]);
    }, [lesson]);

    useEffect(() => {
        setResults([]);
    }, [step.id]);

    const handleCodeChange = (nextValue) => {
        setDrafts((currentDrafts) => ({
            ...currentDrafts,
            [step.id]: nextValue,
        }));
    };

    const handleRunTests = async () => {
        const nextResults = await runAllTests({
            lesson,
            step,
            code,
            iframeRef,
        });

        setResults(nextResults);

        if (nextResults.every((result) => result.pass)) {
            if (!completedSteps.includes(stepIndex)) {
                updateTrainerProgress(lesson.id, step.id, true);
                setCompletedSteps((currentCompleted) => [
                    ...currentCompleted,
                    stepIndex,
                ]);
            }
        }

        return nextResults;
    };

    const handleSelectStep = (index) => {
        const isUnlocked = index === 0 || completedSteps.includes(index - 1);

        if (isUnlocked) {
            setStepIndex(index);
        }
    };

    const handleResetStep = () => {
        setDrafts((currentDrafts) => ({
            ...currentDrafts,
            [step.id]: getStarterCode(lesson, step),
        }));
        setResults([]);
    };

    const handleResetMission = () => {
        removeLessonProgress(lesson.id);
        setCompletedSteps([]);
        setDrafts({});
        setResults([]);
        setStepIndex(0);
    };

    const handleNextStep = () => {
        if (hasNextStep && (isCurrentStepCompleted || completedSteps.includes(stepIndex))) {
            setStepIndex((currentIndex) => currentIndex + 1);
        }
    };

    return (
        <div className={["trainer-core", className].filter(Boolean).join(" ")}>
            <div className="trainer-window">
                <header className="trainer-window__titlebar">
                    <span>{lesson.title}</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: `${progressPercentage}%` }} />
                    </div>

                    <div className="trainer-body">
                        <StepSidebar
                            steps={lesson.steps}
                            currentIndex={stepIndex}
                            onSelect={handleSelectStep}
                            completedSteps={completedSteps}
                        />

                        <main className="trainer-main">
                            <section className="trainer-briefing">
                                <div className="trainer-briefing__topline">
                                    <span className="trainer-briefing__tag">
                                        Stap {String(stepIndex + 1).padStart(2, "0")}
                                    </span>
                                    <span className="trainer-briefing__tag">
                                        {lesson.language === "javascript"
                                            ? "JavaScript"
                                            : "HTML + CSS"}
                                    </span>
                                </div>

                                <div className="trainer-briefing__header">
                                    <div>
                                        <h2>{step.title}</h2>
                                        <p className="trainer-briefing__objective">
                                            {step.objective}
                                        </p>
                                    </div>

                                    {isCurrentStepCompleted ? (
                                        <div className="trainer-briefing__success">
                                            Voltooid
                                        </div>
                                    ) : null}
                                </div>

                                <div className="trainer-briefing__content">
                                    <p className="trainer-briefing__lead">
                                        {lesson.briefing}
                                    </p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: step.contentHtml,
                                        }}
                                    />
                                    {step.hint ? (
                                        <p className="trainer-briefing__hint">
                                            <strong>Hint:</strong>{" "}
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: step.hint,
                                                }}
                                            />
                                        </p>
                                    ) : null}
                                </div>

                                <div className="trainer-briefing__actions">
                                    <button type="button" onClick={handleResetStep}>
                                        Reset stap
                                    </button>
                                    <button type="button" onClick={handleResetMission}>
                                        Reset training
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        disabled={!isNextStepUnlocked}
                                    >
                                        Volgende stap
                                    </button>
                                </div>
                            </section>

                            <section className="trainer-workbench">
                                <div className="trainer-editors">
                                    {lesson.language === "htmlcss" ? (
                                        <>
                                            <Editor
                                                language="html"
                                                value={code.html}
                                                onChange={(nextValue) =>
                                                    handleCodeChange({
                                                        ...code,
                                                        html: nextValue,
                                                    })
                                                }
                                                label="HTML"
                                            />
                                            <Editor
                                                language="css"
                                                value={code.css}
                                                onChange={(nextValue) =>
                                                    handleCodeChange({
                                                        ...code,
                                                        css: nextValue,
                                                    })
                                                }
                                                label="CSS"
                                            />
                                        </>
                                    ) : (
                                        <Editor
                                            language="javascript"
                                            value={code}
                                            onChange={handleCodeChange}
                                            label="JavaScript"
                                        />
                                    )}
                                </div>

                                <Preview
                                    code={code}
                                    lesson={lesson}
                                    iframeRef={iframeRef}
                                    runTests={handleRunTests}
                                    results={results}
                                />
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerCore;
