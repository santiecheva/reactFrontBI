import React from 'react';

import './palabrasClave.scss';
function PalabrasClaves() {
    return (
        <div className="m-content-pagina">
            <div className="m-content-info">
                <h4>Insumos Informes</h4>
                Apartado que describe los insumos necesarios para generar informe
            </div>
            
            <div className="m-content-info">
                <h4>Movimientos contables</h4>
                Auxiliar contable - fuente: Contai
                BD cc nombre de marcas - fuente VAF
            </div>
            
            <div className="m-content-info">
                <h4>Marca Ingresos y Utilidad</h4>
                Tiempos por persona - fuente: VAF<br/>
                Balance de prueba por cuenta - fuente: Contai<br/>
                EEFF Pirani - fuente: VAF
            </div>
            <div className="m-content-info">
                <h4>P&G por Negocio</h4>
                Estado de resultados detallado por centro de costros: VAF<br/>
                Tiempos por persona - fuente: VAF<br/>
                EEFF Pirani - fuente: VAF
            </div>
            <div className="m-content-info">
                <h4>OKR</h4>
                Archivo que se usa para el calculo y proyección de los OKR's
            </div>
            <div className="space"></div>
        </div>
    );
}

export default PalabrasClaves;
