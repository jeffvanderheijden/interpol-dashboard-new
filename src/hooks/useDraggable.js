import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Generic hook om een element draggable te maken.
 * Retourneert positie, ref en handlers.
 */
export function useDraggable(initial = { x: 200, y: 100 }) {
    const [position, setPosition] = useState(initial);
    const [dragging, setDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });
    const elementRef = useRef(null);

    const handleMouseDown = useCallback((e) => {
        const rect = elementRef.current.getBoundingClientRect();
        offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        setDragging(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!dragging) return;
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        };
        const handleMouseUp = () => setDragging(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging]);

    return { elementRef, position, handleMouseDown };
}
