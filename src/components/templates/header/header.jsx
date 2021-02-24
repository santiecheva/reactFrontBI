
import './header.scss';

const Header = (Props) => {
    return (
        <div className="t-content-header">
            <div className="t-aling-items">
                <div>
                    <div className="t-content-name">
                        Hola Santiago,
                </div>
                    <div className="t-content-text">
                        Bienvenido al informe financiero de pragma
                </div>
                </div>
            </div>
                <div className="t-content-initials">
                    <div className="initials">
                    S'Z
                    </div>
                 </div>
        </div>
    );
}

export default Header;