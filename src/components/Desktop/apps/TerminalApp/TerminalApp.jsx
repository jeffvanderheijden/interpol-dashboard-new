import { useState, useRef, useEffect } from "react";
import "./TerminalApp.scss";
import {
    pushLogEntry,
    makeCommands,
    simulateVirusExecution,
} from "./../../_helpers/terminalHelpers";

const TerminalApp = ({ onStepComplete = () => { }, autoRunVirusSignal = null }) => {
    const [log, setLog] = useState([
        "Welkom, agent. Gebruik het terminal-commando 'help' voor een lijst met beschikbare commando's.",
    ]);
    const [input, setInput] = useState("");
    const [path, setPath] = useState("/home/agent");
    const logRef = useRef(null);
    const lastRunSignalRef = useRef(null);

    // Scroll altijd naar onder
    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [log]);

    // Auto-run virus analyse bij trigger
    useEffect(() => {
        if (autoRunVirusSignal && lastRunSignalRef.current !== autoRunVirusSignal) {
            lastRunSignalRef.current = autoRunVirusSignal;
            simulateVirusExecution(setLog, onStepComplete);
        }
    }, [autoRunVirusSignal, onStepComplete]);

    const handleCommand = (cmd) => {
        const [command, ...args] = cmd.trim().split(" ");
        const commands = makeCommands({ setLog, path, setPath, onStepComplete });

        if (commands[command]) {
            commands[command](...args);
        } else {
            pushLogEntry(setLog, `${command}: commando niet gevonden`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        pushLogEntry(setLog, `$ ${input}`);
        handleCommand(input);
        setInput("");
    };

    return (
        <div className="terminal-app" ref={logRef} aria-live="polite">
            <div className="terminal-log">
                {log.map((entry, idx) => (
                    <div key={idx} className="terminal-line">
                        {entry}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="terminal-input">
                <span className="prompt">{path}$</span>
                <input
                    type="text"
                    value={input}
                    className="terminal-textinput"
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
    );
};

export default TerminalApp;
