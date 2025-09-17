import { useState, useRef, useEffect } from 'react';
import './Window.scss';

const Window = ({ title, children, onClose, onClick, onMinimize, zIndex, width = 500, height = 300 }) => {
    const windowRef = useRef(null);
    const [position, setPosition] = useState({ x: 200, y: 100 });
    const [dragging, setDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
            if (!dragging) return;
            setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
        }
        function handleMouseUp() { setDragging(false); }
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    function handleMouseDown(e) {
        const rect = windowRef.current.getBoundingClientRect();
        offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        setDragging(true);
    }

    return (
        <div
            ref={windowRef}
            onMouseDown={onClick}
            className="window"
            style={{
                left: position.x,
                top: position.y,
                width: `${width}px`,
                height: `${height}px`,
                zIndex,
            }}
        >
            <div
                className="window__header"
                onMouseDown={handleMouseDown}
            >
                <span>{title}</span>
                <div>
                    <button onClick={(e) => { e.stopPropagation(); onMinimize(); }} style={{ cursor: 'pointer', marginRight: 4 }}>—</button>
                    <button onClick={(e) => { e.stopPropagation(); onClose(); }} style={{ cursor: 'pointer' }}>X</button>
                </div>
            </div>
            <div className="window__content">{children}</div>
        </div>
    );
};

export default Window;
