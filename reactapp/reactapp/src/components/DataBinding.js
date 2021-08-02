import React, {Component} from "react";

/* La comunicación puede darse de 3 formas 
1. Padre -hijo
2. Hijo - padre // Pasando una función del padre como argumento
3. Comunicación entre componentes no relacionados:
    3.1. Patrón Emisor de eventos / Destino / Despachador
    3.2. Patrón publicación / Suscripción
    3.3. Patrón Señales
    3.4. Patrón Portales

Otras herramientas:
1. Redux, reflux - manejo de estado.
2. Context - API para pasar datos en el arbol de componentes sin usar props.
*/

export default class Parent extends Component{

    state = {
        counter: 0
    }

    second = (e) => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render() {
        return(
            <>
                <h2>Comunicación entre componentes</h2>
                {/* Parent --> Child */}
                <Child
                message = "Mensaje de padre a hijo "
                ></Child>
                {/* Child --> Parent */}
                <Child second = {this.second}></Child>
                <p>{this.state.counter}</p>
            </>
        )
    }
}

function Child (props) {
    return (
    <>
        <h2>{props.message}</h2>
        <button onClick = {props.second}> + </button>
    </>
    )
}