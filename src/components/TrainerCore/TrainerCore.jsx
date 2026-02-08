import React, { useState, useRef, useEffect, useCallback } from "react";
import StepSidebar from "./Editor/StepSidebar";
import Editor from "./Editor/Editor";
import Preview from "./Editor/Preview";
import { runAllTests } from "./_helpers/validate";
import {
    loadTrainerProgress,
    updateTrainerProgress
} from "./_data/trainerProgress";
import "./TrainerCore.scss";

const TrainerCore = ({ lesson }) => {
    const [stepIndex, setStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const iframeRef = useRef(null);
    const step = lesson.steps[stepIndex];

    // -----------------------------
    // INIT: laad voortgang uit localStorage
    // -----------------------------
    useEffect(() => {
        const stored = loadTrainerProgress();
        const lessonProgress = stored[lesson.id] || {};
        const completedIds = Object.keys(lessonProgress).filter(
            (key) => lessonProgress[key]
        );

        // Map step ids naar indices
        const completedIndices = lesson.steps
            .map((s, i) => (completedIds.includes(s.id) ? i : null))
            .filter((i) => i !== null);

        setCompletedSteps(completedIndices);

        // 🪄 spring automatisch naar laatste vrijgespeelde of volgende stap
        if (completedIndices.length > 0) {
            const lastCompleted = Math.max(...completedIndices);
            const nextIndex =
                lastCompleted + 1 < lesson.steps.length
                    ? lastCompleted + 1
                    : lastCompleted;
            setStepIndex(nextIndex);
        } else {
            // Nog niks voltooid → start bij stap 0
            setStepIndex(0);
        }
    }, [lesson.id, lesson.steps]);

    // -----------------------------
    // Helpers
    // -----------------------------
    const getInitialCode = useCallback((step) => {
        if (lesson.language === "htmlcss") {
            return {
                html: String(step?.starter?.html || ""),
                css: String(step?.starter?.css || "")
            };
        }
        if (lesson.language === "javascript") {
            return String(step?.starter?.js || step?.starter || "");
        }
        return "";
    }, [lesson.language]);

    const [code, setCode] = useState(getInitialCode(step));

    // Reset code bij stapwissel
    useEffect(() => {
        setCode(getInitialCode(step));
    }, [step, getInitialCode]);

    // -----------------------------
    // Tests uitvoeren
    // -----------------------------
    const handleRunTests = async () => {
        const results = await runAllTests({ lesson, step, code, iframeRef });

        if (Array.isArray(results) && results.every((t) => t.pass)) {
            // ✅ Markeer als voltooid
            if (!completedSteps.includes(stepIndex)) {
                updateTrainerProgress(lesson.id, step.id, true);
                setCompletedSteps((prev) => [...prev, stepIndex]);
            }
        }
        return results;
    };

    // -----------------------------
    // Alleen volgende stap vrijspelen
    // -----------------------------
    const handleSelectStep = (index) => {
        if (index === 0 || completedSteps.includes(index - 1)) {
            setStepIndex(index);
        } else {
            alert("🔒 Deze opdracht is nog vergrendeld. Rond eerst de vorige af!");
        }
    };

    // -----------------------------
    // Render
    // -----------------------------
    return (
        <div className="trainer-core">
            <div className="trainer-body">
                <StepSidebar
                    steps={lesson.steps}
                    currentIndex={stepIndex}
                    onSelect={handleSelectStep}
                    completedSteps={completedSteps}
                />

                <div className="trainer-main">
                    <div className="trainer-explanation">
                        <h4>{step.title}</h4>
                        <div
                            dangerouslySetInnerHTML={{ __html: step.contentHtml }}
                        />
                    </div>

                    <div className="trainer-editors">
                        {lesson.language === "htmlcss" ? (
                            <>
                                <Editor
                                    language="html"
                                    value={code.html}
                                    onChange={(v) =>
                                        setCode({ ...code, html: v })
                                    }
                                    label="HTML"
                                />
                                <Editor
                                    language="css"
                                    value={code.css}
                                    onChange={(v) =>
                                        setCode({ ...code, css: v })
                                    }
                                    label="CSS"
                                />
                            </>
                        ) : (
                            <Editor
                                language="javascript"
                                value={code}
                                onChange={setCode}
                                label="JavaScript"
                            />
                        )}
                    </div>

                    <Preview
                        code={code}
                        lesson={lesson}
                        iframeRef={iframeRef}
                        runTests={handleRunTests}
                    />
                </div>
            </div>
        </div>
    );
};

export default TrainerCore;
