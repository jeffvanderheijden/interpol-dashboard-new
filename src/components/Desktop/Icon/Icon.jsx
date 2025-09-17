import './Icon.scss';

const Icon = ({ label, icon, onDoubleClick, x, y, badge }) => {
    return (
        <div 
            className="icon" 
            style={{ left: x, top: y }} 
            onDoubleClick={onDoubleClick}
        >
            <div className="icon__symbol">{icon}</div>
            <div className="icon__label">{label}</div>

            {badge > 0 && <span className="icon__badge">{badge}</span>}
        </div>
    );
};

export default Icon;
