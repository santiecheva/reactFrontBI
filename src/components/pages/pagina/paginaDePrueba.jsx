import React from 'react';
import Aside from '../../templates/aside/aside';
import Header from '../../templates/header/header';

import './p.scss';
function PaginaPrueba() {
    return (
        <div className="p-content-pagina">
            <div className="s-content-aside">
                <Aside />
            </div>

            <div className="p-content-container">
                <div className="p-content-header">
                    <Header />
                </div>
                <div>Pagina de prueba</div>
            </div>
        </div>
    );
}

export default PaginaPrueba;
