import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import ActionCounter from "./ActionCounter";
import ViewCounter from "./ViewCounter";

class Counter extends Component {
    // Extra Credit
    incrementIfOdd = () => {
      //Implementar una función de incremento que sólo aumenta si el valor del contador es impar
    };
    // Extra Credit
    incrementAsync = () => {
        //  Implementar una función de incremento que aumenta después de esperar un segundo
    };

    render() {
        // Completa las funciones onClick de los botones
        // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
        return (
            <div>
                <ViewCounter />
                <ActionCounter />
                 {/* Si quieres hacer los extra credit puede descomentar las lineas de abajo */}
                {/* <button onClick={this.incrementIfOdd}>
                    incrementa si es impar
                </button>
                <button onClick={this.incrementAsync}>
                    Incrementa despues de un segundos
                </button>  */}
            </div>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.

export default Counter;
