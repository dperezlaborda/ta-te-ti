import React, { Component } from 'react';
import Registro from './Registro';
import '../style/tablero.css';

export default class Tablero extends Component {
    
    render() { 
        console.log(this.props.tablero)
        console.log(this.props.history)
        return (
            <div className="game-container">
                {this.props.ganador ? "" : <h2 className="title"> Siguiente jugador {this.props.jugador}</h2>}
                <h2>{this.props.ganadorMsj}</h2>
                <div className="board-container">
                    {this.props.Casilla}   {/*se imprime las casillas*/}
                </div>
                {this.props.reset}
                <Registro tablero={this.props.tablero}/>
            </div>
        )
    }
}

//onClick: es un componente pre-construido para React.
//handle[Evento] para los métodos que manejan los eventos.