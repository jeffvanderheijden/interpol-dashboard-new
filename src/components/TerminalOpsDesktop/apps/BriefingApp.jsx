import "./BriefingApp.scss";

const tutorials = [
    {
        kind: "Mac",
        title: "Apple: Terminal User Guide",
        href: "https://support.apple.com/guide/terminal/welcome/mac",
    },
    {
        kind: "Windows",
        title: "Microsoft: Windows command-line shells",
        href: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    },
    {
        kind: "Video",
        title: "YouTube: command line basics for absolute beginners",
        href: "https://www.youtube.com/results?search_query=command+line+basics+for+absolute+beginners",
    },
    {
        kind: "Video",
        title: "YouTube: PowerShell basics for beginners",
        href: "https://www.youtube.com/results?search_query=powershell+basics+for+beginners",
    },
];

export default function BriefingApp() {
    return (
        <div className="terminal-ops-briefing">
            <p className="terminal-ops-briefing__eyebrow">Mission Briefing</p>
            <h2>Signal Hunt</h2>

            <p>
                In deze challenge werk je in een live terminalomgeving zoals in
                de training. Het doel is niet om alles uit je hoofd te kennen,
                maar om rustig te leren kijken, navigeren en bestanden te
                gebruiken.
            </p>

            <div className="terminal-ops-briefing__panel">
                <h3>Wat je leert</h3>
                <ul>
                    <li>je huidige map opvragen</li>
                    <li>mapinhoud bekijken</li>
                    <li>naar een andere map gaan</li>
                    <li>tekstbestanden uitlezen</li>
                    <li>een map maken en een bestand kopieren</li>
                </ul>
            </div>

            <div className="terminal-ops-briefing__panel">
                <h3>Mac en Windows</h3>
                <p>
                    De logica is hetzelfde, maar sommige commando&apos;s hebben
                    een andere naam.
                </p>
                <ul>
                    <li>
                        Mac / PowerShell: <code>ls</code>, <code>cat</code>,{" "}
                        <code>cp</code>
                    </li>
                    <li>
                        Windows CMD: <code>dir</code>, <code>type</code>,{" "}
                        <code>copy</code>
                    </li>
                    <li>
                        Op alle systemen werkt <code>cd</code> om van map te
                        wisselen
                    </li>
                </ul>
            </div>

            <div className="terminal-ops-briefing__panel">
                <h3>Missiedoel</h3>
                <p>
                    Vind in de terminal het geldige signaalbestand en lees het
                    codewoord uit. De briefing in de terminal zelf vertelt je
                    welke stappen je daarvoor moet zetten.
                </p>
            </div>

            <div className="terminal-ops-briefing__panel">
                <h3>Hulp en tutorials</h3>
                <div className="terminal-ops-briefing__links">
                    {tutorials.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-ops-briefing__link"
                        >
                            <span>{item.kind}</span>
                            <strong>{item.title}</strong>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
