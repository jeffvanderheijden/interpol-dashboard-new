import "./Icon.scss";

const Icon = ({ label, icon, onDoubleClick, badge }) => {
    const isImage = icon.endsWith(".ico") || icon.endsWith(".png") || icon.endsWith(".jpg");

    return (
        <div className="desktop-icon" onDoubleClick={onDoubleClick} tabIndex={0}>
            <div className="icon-image">
                {isImage ? (
                    <img src={icon} alt={label} className="icon-img" />
                ) : (
                    <span>{icon}</span>
                )}
                {badge && <div className="icon-badge">!</div>}
            </div>
            <div className="icon-label">{label}</div>
        </div>
    );
};

export default Icon;