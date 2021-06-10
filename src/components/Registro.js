import React, { Component } from 'react';

export default class Registro extends Component {
    render() {
        return (
            <div>
                <button>Paso 1</button>
                {console.log(this.props.tablero)}
            </div>
        )
    }
}
