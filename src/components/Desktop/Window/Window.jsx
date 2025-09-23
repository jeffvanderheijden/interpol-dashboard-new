import { useDraggable } from "./../../../hooks/useDraggable";
import "./Window.scss";

const Window = ({
    title,
    children,
    onClose,
    onClick,
    onMinimize,
    zIndex,
    width = 500,
    height = 300,
}) => {
    const { elementRef, position, handleMouseDown } = useDraggable({
        x: 200,
        y: 100,
    });

    return (
        <div
            ref={elementRef}
            onMouseDown={onClick}
            className="window"
            style={{
                left: position.x,
                top: position.y,
                width,
                height,
                zIndex,
            }}
        >
            <div className="window__header" onMouseDown={handleMouseDown}>
                <span className="window__title">{title}</span>
                <div className="window__controls">
                    <button
                        type="button"
                        aria-label="Minimize window"
                        onClick={(e) => {
                            e.stopPropagation();
                            onMinimize();
                        }}
                    >
                        —
                    </button>
                    <button
                        type="button"
                        aria-label="Close window"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                    >
                        ✕
                    </button>
                </div>
            </div>
            <div className="window__content">{children}</div>
        </div>
    );
};

export default Window;
