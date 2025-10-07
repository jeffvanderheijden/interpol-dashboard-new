import React, { useState, useRef, useEffect } from "react";
import StepSidebar from "./Editor/StepSidebar";
import Editor from "./Editor/Editor";
import Preview from "./Editor/Preview";
import { runAllTests } from "./_helpers/validate";
import "./TrainerCore.scss";

const TrainerCore = ({ lesson }) => {
    const [stepIndex, setStepIndex] = useState(0);
    const step = lesson.steps[stepIndex];
    const iframeRef = useRef(null);

    // Veilige initiële state afhankelijk van het les-type
    const getInitialCode = (step) => {
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
    };


    const [code, setCode] = useState(getInitialCode(step));

    // update code wanneer een nieuwe step wordt gekozen
    useEffect(() => {
        setCode(getInitialCode(step));
    }, [stepIndex]);

    const runTests = async () => {
        const results = await runAllTests({
            lesson,
            step,
            code,
            iframeRef,
        });
        return results;
    };

    return (
        <div className="trainer-core">
            <div className="trainer-body">
                <StepSidebar
                    steps={lesson.steps}
                    currentIndex={stepIndex}
                    onSelect={setStepIndex}
                />

                <div className="trainer-main">
                    <div className="trainer-explanation">
                        <h4>{step.title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: step.contentHtml }} />
                    </div>

                    <div className="trainer-editors">
                        {lesson.language === "htmlcss" ? (
                            <>
                                <Editor
                                    language="html"
                                    value={code.html}
                                    onChange={(v) => setCode({ ...code, html: v })}
                                    label="HTML"
                                />
                                <Editor
                                    language="css"
                                    value={code.css}
                                    onChange={(v) => setCode({ ...code, css: v })}
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
                        runTests={runTests}
                    />
                </div>
            </div>
        </div>
    );
};

export default TrainerCore;
