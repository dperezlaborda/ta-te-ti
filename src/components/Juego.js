import React, { Component } from 'react';
import Tablero from './Tablero';

export default class Juego extends Component {
    constructor(props){   //Todas las clases de componentes de React que tienen un constructor deben empezar con una llamada a super(props)
        super(props);
        this.state = {  //lo que viene en el componente por default
            tablero: Array(9).fill(null), //se crea un array con 9 index cada uno con valor null
            jugador : 'X',    //se crea el jugador inicial que arranca en X 
            ganador : null,
            ganadorMsj : "",
            history: []
        }
    }

    checkWinner(){ 
        let combinaciones = [   //se crea un array con las combinaciones ganadoras
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["2", "4", "6"],
            ["0", "4", "8"]
        ]
        
        for(let i = 0; i < combinaciones.length; i++){  //se loopea el array
            const [a, b, c] = combinaciones[i];

            if(this.state.tablero[a] && this.state.tablero[a] === this.state.tablero[b] && this.state.tablero[a] === this.state.tablero[c]){
                this.setState({
                    ganador : this.state.jugador,
                    ganadorMsj : "ganaste "+ this.state.jugador 

                })
            }
        }
    }

    handleClick(c){

        let newTablero = this.state.tablero;   //crea una variable para un nuevo estado

        let newJugador = this.state.jugador === "X" ? "O" : "X";

        if(this.state.tablero[c] === null  && !this.state.ganador){  
            newTablero[c] = this.state.jugador; //asigna a cada index una X 
            this.setState({   //setState es una funcion que modifica el estado inicial(this.state)   
                tablero: newTablero,
                jugador: newJugador
            })
            this.checkWinner();
        }
    }

    resetGame(){  //se resetea el juego llamando al state inicial
        this.setState({     
            tablero: Array(9).fill(null), 
            jugador : 'X',
            ganador : null,
            ganadorMsj : ""
        })
    }

    render() {
        
        const Casilla = this.state.tablero.map((casilla,c) => //c = devuelve el valor de index del array
            <div className="box" key={c} 
                onClick={()=> this.handleClick(c)}>{casilla}
            </div>
        )  //se crea cada casilla mapeando el array del state
       
        const reset = <button className="bttn" onClick={() => this.resetGame()}>Comienza el juego!</button>
        return (
            <div>
                <Tablero className="ganaste" Casilla={Casilla} tablero={this.state.tablero} jugador={this.state.jugador} ganador={this.state.ganador} ganadorMsj={this.state.ganadorMsj} reset={reset} />
            </div>
        )
    }
}
