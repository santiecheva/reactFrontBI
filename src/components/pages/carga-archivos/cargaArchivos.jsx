import React, { useState } from 'react';
import Images from '../../atoms/images/images';
import PalabrasClaves from '../../molecules/palabrasClave';
import Aside from '../../templates/aside/aside';
import Header from '../../templates/header/header';

import FlechaAbajo from '../../../images/a.png';

import './cargaArchivos.scss';
function CargaArchivos() {
    const [show, setShow] = useState(false);
    return (
        <div className="p-content-pagina">
            <div className="s-content-aside">
                <Aside />
                {/* <div className="azul"></div> */}
            </div>

            <div className="p-content-container">
                <div className="p-content-header p-distancia">
                    <Header />
                </div>
                <div className="p-content-palabras p-distancia">
                    <div className="p-content-text">
                        <div className="p-text">Palabras clave para cargar los informes</div>
                        <div className="p-content-image">
                            <button type="button" onClick={() => { setShow(!show); }}><Images Imagen={FlechaAbajo} /></button>
                        </div>
                    </div>
                    <div>
                        {show ? (<PalabrasClaves />) : <div></div>}
                    </div>
                </div>
                <div className="p-content-palabras p-distancia">
                    Carga archivos desde google<br />
                    por completar
                </div>
            </div>
        </div>
    );
}

export default CargaArchivos;
