import './Icon.scss';

const Icon = ({ label, icon, badge, onDoubleClick }) => {
    return (
        <div className="desktop-icon" onDoubleClick={onDoubleClick} tabIndex="0">
            <div className="icon-image">
                {icon} {/* De emoji wordt hier direct als tekst geplaatst */}
                {badge && <div className="icon-badge">!</div>}
            </div>
            <span className="icon-label">{label}</span>
        </div>
    );
};

export default Icon;