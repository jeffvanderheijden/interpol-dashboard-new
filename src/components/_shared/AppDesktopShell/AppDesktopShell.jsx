import Icon from "../../Desktop/Icon/Icon";
import Window from "../Window/Window";
import Taskbar from "../Taskbar/Taskbar";

export default function AppDesktopShell({
    className,
    iconsClassName,
    icons,
    openWindows,
    openApp,
    bringToFront,
    closeWindow,
    minimizeWindow,
    renderWindowContent,
    menuApps,
    children,
    watermark,
}) {
    return (
        <div className={className}>
            <div className={iconsClassName}>
                {icons.map((icon) => (
                    <Icon
                        key={icon.key}
                        label={icon.label}
                        icon={icon.icon}
                        badge={icon.badge}
                        onDoubleClick={() => openApp(icon.key)}
                    />
                ))}
            </div>

            {openWindows
                .filter((windowItem) => !windowItem.minimized)
                .map((windowItem) => (
                    <Window
                        key={windowItem.id}
                        title={windowItem.title}
                        zIndex={windowItem.z}
                        width={windowItem.width}
                        height={windowItem.height}
                        onClose={() => closeWindow(windowItem.id)}
                        onMinimize={() => minimizeWindow(windowItem.id)}
                        onClick={() => bringToFront(windowItem.id)}
                    >
                        {renderWindowContent(windowItem)}
                    </Window>
                ))}

            {children}

            <Taskbar
                openWindows={openWindows}
                bringToFront={bringToFront}
                openApp={openApp}
                menuApps={menuApps}
            />

            {watermark ? (
                <img
                    src={watermark.src}
                    className={watermark.className}
                    alt={watermark.alt}
                />
            ) : null}
        </div>
    );
}
