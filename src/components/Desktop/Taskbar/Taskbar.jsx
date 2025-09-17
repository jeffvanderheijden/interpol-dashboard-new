import './Taskbar.scss';

const Taskbar = ({ openWindows, bringToFront }) => {
    const now = new Date();

    // Vind actieve window (hoogste z-index)
    const activeWindow = openWindows.reduce((prev, curr) => (!prev || curr.z > prev.z ? curr : prev), null);

    return (
        <div className="taskbar">
            <div className="taskbar__start">[Start]</div>

            <div className="taskbar__windows">
                {openWindows.map(win => (
                    <button
                        key={win.id}
                        className={`taskbar__window-button ${activeWindow?.id === win.id ? 'active' : ''}`}
                        onClick={() => bringToFront(win.id)}
                    >
                        {win.app}
                    </button>
                ))}
            </div>

            <div className="taskbar__clock">
                {now.toLocaleTimeString()} | {now.toLocaleDateString()}
            </div>
        </div>
    );
};

export default Taskbar;
