import { useState, useRef, useEffect } from 'react';
import './TerminalApp.scss';

const TerminalApp = ({ step = 0, setStep = () => {}, onStepComplete = () => {} }) => {
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

    const [fs, setFs] = useState({
        '/': ['home'],
        '/home': ['agent'],
        '/home/agent': ['training'],
        '/home/agent/training': ['readme.txt', 'instructions.sh'],
    });

    const [fileContents, setFileContents] = useState({
        '/home/agent/training/readme.txt': `Goed bezig, agent.\n\nGebruik het commando in instructions.sh om de verdachtenlijst te downloaden.`,
        '/home/agent/training/instructions.sh': `#!/bin/bash\n# Gebruik dit commando:\ncurl -o suspects.txt https://interpol.int/api/suspects`,
    });

    const pushLog = (entry) => {
        setLog(prev => [...prev, entry]);
    };

    const normalizePath = (base, target) => {
        if (!target) return base;
        if (target.startsWith('/')) return target.replace(/\/+/g, '/').replace(/\/+$/, '') || '/';
        const combined = `${base}/${target}`.replace(/\/+/g, '/');
        const cleaned = combined.replace(/\/+$/, '') || '/';
        return cleaned;
    };

    const handleCommand = (cmdRaw) => {
        const cmd = (cmdRaw || '').trim();
        if (!cmd) return;
        const parts = cmd.split(' ').filter(Boolean);
        const command = parts[0];
        let output = '';
        const currentDirChildren = fs[path] || [];

        switch (command) {
            case 'ls': {
                if (parts[1]) {
                    const target = normalizePath(path, parts[1]);
                    const children = fs[target];
                    output = children ? children.join('  ') : `Map ${parts[1]} niet gevonden.`;
                } else {
                    output = currentDirChildren.join('  ');
                }
                break;
            }
            case 'pwd': {
                output = path;
                break;
            }
            case 'cd': {
                const dest = parts[1];
                if (!dest) {
                    output = 'Gebruik: cd <mapnaam>';
                    break;
                }
                if (dest === '..') {
                    if (path === '/') { output = '/'; break; }
                    const segs = path.split('/');
                    segs.pop();
                    const newPath = segs.join('/') || '/';
                    setPath(newPath);
                    output = '';
                    break;
                }
                const target = normalizePath(path, dest);
                if (fs[target]) {
                    setPath(target);
                    output = '';
                } else {
                    output = `Map ${dest} bestaat niet.`;
                }
                break;
            }
            case 'cat': {
                const fileName = parts[1];
                if (!fileName) {
                    output = 'Gebruik: cat <bestandsnaam>';
                    break;
                }
                const filePath = normalizePath(path, fileName);
                const content = fileContents[filePath];
                if (content !== undefined) {
                    output = content;
                    if (step === 0 && filePath === '/home/agent/training/readme.txt') {
                        setStep(1);
                        pushLog('Hint: cat instructions.sh');
                    } else if (step === 1 && filePath === '/home/agent/training/instructions.sh') {
                        setStep(2);
                        pushLog('Hint: voer het curl-commando uit om suspects.txt te downloaden.');
                    }
                } else {
                    output = `Bestand ${fileName} niet gevonden.`;
                }
                break;
            }
            case 'curl': {
                if (parts[1] === '-o' && parts.length >= 4) {
                    const outFile = parts[2];
                    const url = parts.slice(3).join(' ');
                    if (path !== '/home/agent/training') {
                        output = `curl uitgevoerd, maar je moet in /home/agent/training zijn om het bestand correct te plaatsen.`;
                    } else if (!url.startsWith('http')) {
                        output = 'Ongeldige URL.';
                    } else {
                        const filePath = `${path}/${outFile}`.replace(/\/+/g, '/');
                        setFileContents(prev => ({ ...prev, [filePath]: `Suspects list downloaded from ${url}\n\n1) Docent P\n2) Student X\n` }));
                        setFs(prev => ({ ...prev, [path]: [...(prev[path] || []), outFile] }));
                        output = `Bestand '${outFile}' succesvol gedownload.`;
                        if (step === 2) {
                            setStep(3);
                            onStepComplete && onStepComplete('terminalDone');
                        }
                    }
                } else {
                    output = 'Gebruik: curl -o <uitvoerbestand> <url>';
                }
                break;
            }
            default:
                output = `Onbekend commando: ${command}`;
        }
        pushLog(`$ ${cmd}`);
        if (output) pushLog(output);
        setInput('');
    };

    return (
        <div className="terminal-app" ref={logRef}>
            {log.map((line, idx) => <div key={idx} className="terminal-line">{line}</div>)}
            <div className="terminal-input-container">
                <form onSubmit={e => { e.preventDefault(); handleCommand(input); }} className="terminal-input">
                    <span className="prompt">{path} $ </span>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        autoFocus
                        className="terminal-textinput"
                        placeholder="Type a command (ls, cd, cat, pwd, curl -o ... )"
                    />
                </form>
            </div>
        </div>
    );
};

export default TerminalApp;