import { useState, useRef, useCallback } from "react";
import { createWindow } from "../components/_shared/desktopHelpers";

export function useWindowManager() {
    const [openWindows, setOpenWindows] = useState([]);
    const zIndexRef = useRef(1);

    const nextTopZ = useCallback(() => {
        zIndexRef.current += 1;
        return zIndexRef.current;
    }, []);

    const openApp = useCallback(
        (appName, config) => {
            if (!config) return;
            const topZ = nextTopZ();
            setOpenWindows((prev) => {
                const existing = prev.find((w) => w.app === appName);
                if (existing) {
                    return prev.map((w) =>
                        w.app === appName
                            ? { ...w, minimized: false, z: topZ }
                            : w
                    );
                }
                return [...prev, createWindow(appName, config, topZ)];
            });
        },
        [nextTopZ]
    );

    const bringToFront = useCallback(
        (id) => {
            const topZ = nextTopZ();
            setOpenWindows((prev) =>
                prev.map((w) =>
                    w.id === id ? { ...w, minimized: false, z: topZ } : w
                )
            );
        },
        [nextTopZ]
    );

    const closeWindow = useCallback((id) => {
        setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    }, []);

    const minimizeWindow = useCallback((id) => {
        setOpenWindows((prev) =>
            prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
        );
    }, []);

    return {
        openWindows,
        setOpenWindows,
        openApp,
        bringToFront,
        closeWindow,
        minimizeWindow,
    };
}
