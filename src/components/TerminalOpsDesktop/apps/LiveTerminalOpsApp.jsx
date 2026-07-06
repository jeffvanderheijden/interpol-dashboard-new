import { useEffect, useMemo, useRef, useState } from "react";
import {
    TERMINAL_OPS_INITIAL_LINES,
    TERMINAL_OPS_SCENARIO,
    isTerminalOpsComplete,
} from "../_data/scenario";
import { runTerminalProgram } from "../../TrainerCore/_helpers/terminalRuntime";
import "../../Desktop/apps/TerminalApp/TerminalApp.scss";

export default function LiveTerminalOpsApp({
    onMissionComplete = () => {},
    isCompleted = false,
}) {
    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");
    const logRef = useRef(null);

    const execution = useMemo(
        () =>
            runTerminalProgram({
                code: history.join("\n"),
                scenario: TERMINAL_OPS_SCENARIO,
            }),
        [history]
    );

    const currentPath = execution.currentPath || TERMINAL_OPS_SCENARIO.startPath;
    const lines = useMemo(
        () => [
            ...TERMINAL_OPS_INITIAL_LINES.map((text) => ({
                kind: "output",
                text,
            })),
            ...execution.lines,
            ...(isCompleted
                ? [
                    {
                        kind: "output",
                        text: "*** MISSIE VOLTOOID: punten toegekend ***",
                    },
                ]
                : []),
        ],
        [execution.lines, isCompleted]
    );

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [lines]);

    useEffect(() => {
        if (!isCompleted && isTerminalOpsComplete(execution)) {
            onMissionComplete();
        }
    }, [execution, isCompleted, onMissionComplete]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextCommand = input.trim();

        if (!nextCommand) {
            return;
        }

        setHistory((current) => [...current, nextCommand]);
        setInput("");
    };

    return (
        <div className="terminal-app" ref={logRef} aria-live="polite">
            <div className="terminal-log">
                {lines.map((entry, index) => (
                    <div
                        key={`${entry.kind}-${index}-${entry.text}`}
                        className="terminal-line"
                    >
                        {entry.text}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="terminal-input">
                <span className="prompt">{currentPath}$</span>
                <input
                    type="text"
                    value={input}
                    className="terminal-textinput"
                    onChange={(event) => setInput(event.target.value)}
                    autoFocus
                    spellCheck="false"
                    autoComplete="off"
                />
            </form>
        </div>
    );
}
