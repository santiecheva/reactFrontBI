import React, { useState } from 'react';
import PalabrasClaves from '../../molecules/palabrasClave';
import Aside from '../../templates/aside/aside';
import Header from '../../templates/header/header';

import './cargaArchivos.scss';
function CargaArchivos() {
    const [show,setShow] = useState(false);
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
                    <div className="p-content-text">Palabras clave para cargar los informes 
                    <button type="button" onClick={() => {setShow(!show);}}>Colocar imagen de flecha</button>
                     </div>
                    <div>
                        {show ?(<PalabrasClaves />):<div></div>}
                    </div>
                </div>
                <div className="p-content-palabras p-distancia">
                    Carga archivos desde google<br/>
                    por completar
                </div>
            </div>
        </div>
    );
}

export default CargaArchivos;
