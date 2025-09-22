import { useState, useRef, useEffect } from 'react';
import './TerminalApp.scss';

const TerminalApp = ({ onStepComplete = () => { } }) => {
    const [log, setLog] = useState([
        'Welkom, Agent. Open de training directory en volg de instructies.'
    ]);
    const [input, setInput] = useState('');
    const [path, setPath] = useState('/home/agent');
    const logRef = useRef(null);

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [log]);

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
                const url = 'https://interpol.int/api/suspects';
                // Basis check: begint met curl en bevat de juiste url
                if (cmd.includes('curl') && cmd.includes(url)) {
                    pushLog('Download voltooid. Verdachtenlijst opgeslagen als suspects.txt.');
                    onStepComplete && onStepComplete('terminalDone');
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