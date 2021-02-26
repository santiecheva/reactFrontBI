import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import LinkAside from '../../atoms/link-aside/linkAside';

import './aside.scss';

const Aside = (Props) => {
    function mensaje(){
        alert('En proceso');
    }
    return (
        <div className="t-aside">
            <div>
                <h1>Logo pendiente</h1>
            </div>
            <div className="t-dash-content">Dashboard
                <hr />
            </div>
            <div className="t-content-items">
                <NavLink exact activeClassName="active" to="/cargaArchivos">
                    <LinkAside texto="Cargar archivos" />
                </NavLink>
                <NavLink exact activeClassName="active" to="/prueba">
                    <LinkAside texto="grafica" />
                </NavLink>
                <NavLink exact activeClassName="active" onClick={mensaje} to="/">
                    <LinkAside texto="Generar reportes"/>
                </NavLink>
                <NavLink exact activeClassName="active" to="/">
                    <LinkAside texto="Volver al login" />
                </NavLink>

            </div>
        </div>
    );
}

export default Aside;