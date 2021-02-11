import React, { Component } from 'react';
import axios from 'axios';
import {Bar,Line,Poe} from 'react-chartjs-2';

class Marcas extends Component {
    constructor(props){
        super(props);
        this.a();
        const data_=this.a();
        console.log("datos ", data_)
        this.state={
            chatData:{
                labels:['Medellín','Bogotá','Pereira','','Bucaramanga','Cali','Bello'],
                datasets:[
                    {
                        label:'population',
                        data:[
                            42312412,
                            32412412,
                            13423523,
                            0,
                            23534123,
                            54354345,
                            23423423,
                        ],
                        backgroundColor:[
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
                return result
                // this.data=result;
            })
            .catch(console.log)
    }


    render() {
        return (
            <>
                <h1>Hola mundo</h1>
                <Bar
                data={this.state.chatData}
                options={{
                    maintainAspectRatio:false
                }}
                />
            </>
        )
    }
}

export default Marcas;