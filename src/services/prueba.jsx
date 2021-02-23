import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line, Poe } from 'react-chartjs-2';
import './prueba.css';

class Marcas extends Component {
    constructor(props) {
        const datainfo = null;
        super(props);
        this.a();

        this.datac = {};

        this.state = {
            chatData: {
                labels: ['Familia', 'Pequeñin', 'Tena','Nosotras','SmartFit', 'Genfar S.A', 'Nutresa SAS', 'Almacenes Éxito'],
                datasets: [
                    {
                        label: ['Ingresos'],
                        data: [
                            1.26531998E8,
                            7.7408E7,
                            6406903.0,
                            6.2635559E7,
                            1500000.0,
                            0,
                            756.0,
                            -9350039
                        ],
                        backgroundColor: [
                            'rgb(2 151 164)',
                            'rgb(151 189 160)',
                            'rgb(255 217 138)',
                            '',
                            'rgb(2 151 164)',
                            'rgb(151 189 160)',
                            'rgb(255 217 138)',
                            'rgb(2 151 164)',
                            'rgb(151 189 160)',
                            'rgb(255 217 138)',
                            'rgb(2 151 164)',
                            'rgb(151 189 160)',
                            'rgb(255 217 138)'
                        ]
                    }
                ]
            }
        }
    }

    a() {
        axios.get('https://xrcektwg3l.execute-api.us-east-2.amazonaws.com/develop/marcas')
            .then(result => {
                console.log(result.data)
                this.datainfo = result;
                // this.datac=result.json();
                return result
                // this.data=result;
            })
            .catch(console.log)
    }


    render() {
        return (
            <>
                <center>
                    <div className="grafica">
                        <h1>EL mejor Equipo del mundo mundial</h1>
                        <Bar
                            data={this.state.chatData}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </center>
            </>
        )
    }



}

export default Marcas;