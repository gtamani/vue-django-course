/*
Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren en 3 fases:

Montaje.
constructor, render, componentDidMount

Actualización.
render, componentDidUpdate

Desmontaje
componentWillUnmount
*/

import React, {Component} from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount(){
        // Tareas a realizar después de eliminar EL COMPONENTE.
        console.log(3,"El componente ha sido eliminado del DOM")
    }

    render() {
        return(
            <h3>{this.props.hour}</h3>
        )
    }
}



export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        // Vue --> created, beforeMounted
        console.log(0,"MOUNTED - El componente se inicializa, aún no está en el DOM")
        this.state = {
            date : new Date().toLocaleTimeString(),
            show : false
        }

        this.clock = null
    }

    componentDidMount() {
        // Acá conviene realizar las peticiones AJAX
        console.log(1,"El componente ya se encuentra en el DOM")
    }

    componentDidUpdate(previousProps,previousState) {
        // Estado previo antes de actualizar el nuevo estado
        console.log(2, "El estado o las props del componente han cambiado")
        console.log(previousProps)
        console.log(previousState)
    }


    init = () => { 
        this.ticTac() 
        this.setState({
            show : true
        })
    }
    stop = () => { 
        clearInterval(this.clock)  
        this.setState({
            show : false
        })
    }

    ticTac = () => { 
        this.clock = setInterval(() => {
            this.setState({
                date:new Date().toLocaleTimeString()
            })
        },1000
    ) }
    
    render() {
        console.log(4,"El componente se (re)dibuja")
        return(
            <>
            <h2>Ciclo de vida de los componentes de clase</h2>
            {this.state.show && <Clock hour={this.state.date}/> }
            <button onClick = {this.init} >Iniciar</button>
            <button onClick = {this.stop} >Detener</button>
            </>
        )
    }
}