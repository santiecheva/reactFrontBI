import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import LinkAside from '../../atoms/link-aside/linkAside';

import './aside.scss';

const Aside = (Props) => {
    return (
        <div className="t-aside">
            <div>
                <h1>Logo oendiente</h1>
            </div>
            <div className="t-dash-content">Dashboard
                <hr />
            </div>
            <div className="t-content-items">
                <NavLink exact activeClassName="active" to="/prueba">
                    <LinkAside texto="grafica" />
                </NavLink>
                <NavLink exact activeClassName="active" to="/pagina">
                    <LinkAside texto="prueba" />
                </NavLink>
                <NavLink exact activeClassName="active" to="/">
                    <LinkAside texto="Este es el aside" />
                </NavLink>

            </div>
        </div>
    );
}

export default Aside;