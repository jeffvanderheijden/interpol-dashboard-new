import React, { useState, useRef } from "react";
import StepSidebar from "./Editor/StepSidebar";
import Editor from "./Editor/Editor";
import Preview from "./Editor/Preview";
import { runAllTests } from "./_helpers/validate";
import "./TrainerCore.scss";

const TrainerCore = ({ lesson, onClose }) => {
    const [stepIndex, setStepIndex] = useState(0);
    const step = lesson.steps[stepIndex];
    const iframeRef = useRef(null);

    const [code, setCode] = useState(step.starter);
    const [testResults, setTestResults] = useState([]);

    const runTests = async () => {
        const results = await runAllTests({
            lesson,
            step,
            code,
            iframeRef,
        });
        setTestResults(results);
    };

    return (
        <div className="trainer-core">
            <header className="trainer-header">
                <h3>{lesson.title}</h3>
                <button onClick={onClose}>X</button>
            </header>

            <div className="trainer-body">
                {/* Sidebar */}
                <StepSidebar
                    steps={lesson.steps}
                    currentIndex={stepIndex}
                    onSelect={setStepIndex}
                />

                {/* Main area */}
                <div className="trainer-main">
                    {/* Explanation */}
                    <div className="trainer-explanation">
                        <h4>{step.title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: step.contentHtml }} />
                    </div>

                    {/* Editors */}
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

                    {/* Preview */}
                    <Preview
                        code={code}
                        lesson={lesson}
                        step={step}
                        iframeRef={iframeRef}
                        testResults={testResults}
                        runTests={runTests}
                    />
                </div>
            </div>
        </div>
    );
};

export default TrainerCore;
