import { useState, useRef, useEffect } from 'react';
import './TerminalApp.scss';

const TerminalApp = ({ onStepComplete = () => { }, autoRunVirusSignal = null }) => {
    const [log, setLog] = useState([
        'Welkom, Agent. Open de training directory en volg de instructies.'
    ]);
    const [input, setInput] = useState('');
    const [path, setPath] = useState('/home/agent');
    const logRef = useRef(null);

    // Guard zodat auto-run slechts één keer per signal gebeurt
    const lastRunSignalRef = useRef(null);

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [log]);

    useEffect(() => {
        // If autoRunVirusSignal changes and is new, start fake execution
        if (autoRunVirusSignal && lastRunSignalRef.current !== autoRunVirusSignal) {
            lastRunSignalRef.current = autoRunVirusSignal;
            simulateVirusExecution();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoRunVirusSignal]);

    const [fs] = useState({
        '/': ['home'],
        '/home': ['agent'],
        '/home/agent': ['training'],
        '/home/agent/training': ['readme.txt', 'instructions.sh'],
    });

    const [fileContents] = useState({
        '/home/agent/training/readme.txt': `Goed bezig, agent.\n\nGebruik het commando in instructions.sh om de verdachtenlijst te downloaden.`,
        '/home/agent/training/instructions.sh': `#!/bin/bash\n# Gebruik dit commando:\ncurl -o suspects.txt https://interpol.int/api/suspects`,
    });

    const pushLog = (entry) => {
        setLog(prev => [...prev, entry]);
    };

    const handleCommand = (cmd) => {
        const parts = cmd.trim().split(' ');
        const command = parts[0];

        switch (command) {
            case 'ls': {
                const contents = fs[path] || [];
                pushLog(contents.join('  '));
                break;
            }
            case 'cd': {
                const target = parts[1];
                if (!target) {
                    pushLog('Gebruik: cd <map>');
                    break;
                }
                let newPath;
                if (target === '..') {
                    newPath = path.substring(0, path.lastIndexOf('/')) || '/';
                } else {
                    newPath = path === '/' ? `/${target}` : `${path}/${target}`;
                }
                if (fs[newPath]) {
                    setPath(newPath);
                } else {
                    pushLog(`cd: map '${target}' bestaat niet`);
                }
                break;
            }
            case 'cat': {
                const file = parts[1];
                if (!file) {
                    pushLog('Gebruik: cat <bestand>');
                    break;
                }
                const filePath = path === '/' ? `/${file}` : `${path}/${file}`;
                if (fileContents[filePath]) {
                    pushLog(fileContents[filePath]);
                } else {
                    pushLog(`cat: ${file}: Bestand niet gevonden`);
                }
                break;
            }
            case 'curl': {
                const correct = 'curl -o suspects.txt https://interpol.int/api/suspects';
                if (cmd.trim() === correct) {
                    pushLog('Download gestart...');
                    simulateDownloadThenComplete();
                } else {
                    pushLog('curl: onbekend of incorrect commando');
                }
                break;
            }
            case 'help': {
                pushLog('Beschikbare commando’s: ls, cd, cat, curl, help, clear');
                break;
            }
            case 'clear': {
                setLog([]);
                break;
            }
            default:
                pushLog(`${command}: commando niet gevonden`);
        }
    };

    const simulateDownloadThenComplete = () => {
        const steps = [10, 30, 55, 80, 100];
        let i = 0;
        const tick = () => {
            if (i >= steps.length) {
                pushLog('Download voltooid. Verdachtenlijst opgeslagen als suspects.txt.');
                onStepComplete('terminalDone');
                return;
            }
            pushLog(`Downloading... ${steps[i]}%`);
            i++;
            setTimeout(tick, 450);
        };
        tick();
    };

    const simulateVirusExecution = () => {
        // Simuleer veilige 'uitvoering' in de terminal voor didactisch effect
        pushLog('');
        pushLog('*** SYSTEM NOTICE: executing analysis sandbox ***');
        pushLog('Loading /downloads/virus.txt into isolated VM...');

        const stages = [
            { text: 'Initializing analysis sandbox...', delay: 600 },
            { text: 'Mounting read-only filesystem...', delay: 700 },
            { text: 'Scanning file for indicators (static-only)...', delay: 900 },
            { text: 'Extracting strings & metadata...', delay: 900 },
            { text: 'Running signature heuristics (no execution)...', delay: 1000 },
        ];

        let idx = 0;
        const runStage = () => {
            if (idx >= stages.length) {
                // final simulated summary
                pushLog('--- STATIC ANALYSIS SUMMARY ---');
                pushLog('File: /downloads/virus.txt');
                pushLog('Verdict: suspicious (contains obfuscated fragments).');
                pushLog('Action: quarantined in analysis VM; no execution performed.');
                pushLog('Recommendation: continue manual forensic analysis in Notepad/Editor.');
                pushLog('*** ANALYSIS COMPLETE ***');
                // optionally inform game that execution-simulation finished
                onStepComplete('virusExecutionSimulated');
                return;
            }
            pushLog(stages[idx].text);
            idx++;
            setTimeout(runStage, stages[idx - 1].delay);
        };
        // start with a tiny delay to let UI update
        setTimeout(runStage, 200);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        pushLog(`$ ${input}`);
        handleCommand(input);
        setInput('');
    };

    return (
        <div className="terminal-app" ref={logRef}>
            <div className="terminal-log">
                {log.map((entry, idx) => (
                    <div key={idx} className="terminal-line">{entry}</div>
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
