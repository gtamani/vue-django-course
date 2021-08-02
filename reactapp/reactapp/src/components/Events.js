import React, {Component} from "react";
// Events and binding

/* ES6 Context */
export class EventsES6 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
        // Binding
        this.addOne = this.addOne.bind(this)
        this.sustractOne = this.sustractOne.bind(this)
    }
    addOne(e){
        this.setState({
            counter : this.state.counter + 1
        })
    }
    sustractOne(e){
        this.setState({
            counter : this.state.counter - 1
        })
    }
    render(){
        return(
            <div>
                <h2>Events ES6:</h2>
                <h3>{this.state.counter}</h3>
                <nav>
                    <button onClick={this.addOne}>+</button>
                    <button onClick={this.sustractOne}>-</button>
                </nav>
            </div>
        )
    }
}

/* ES7 Context */
export class EventsES7 extends Component{
    state = {
        counter : 0
    };
    // Arrow Function, heredan el this del contexto en el que se encuentran
    // No hace falta hacer el bindeo
    addOne = (e) => {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    sustractOne = (e) => {
        this.setState({
            counter : this.state.counter - 1
        })
    }
    render(){
        return(
            <div>
                <h2>Events Version ES7:</h2>
                <h3>{this.state.counter}</h3>
                <nav>
                    <button onClick={this.addOne}>+</button>
                    <button onClick={this.sustractOne}>-</button>
                </nav>
            </div>
        )
    }
}

function Button({myOnClick}) {
    return(<button onClick={myOnClick}>Botón hecho componente</button>)
}



export class MoreAboutEvents extends Component{
    handleClick = (e,message) => {
        // Evento nativo - Vanilla Javascript
        console.log(e.nativeEvent)
        // Evento sintético - Synthetic Base Event
        console.log(e)

        console.log(message)

    }
    
    render(){
        return(
            <div>
                <h2>More about events</h2>
                <button onClick={(e) => this.handleClick(e,"This is a message from an arrow function.")}>Saludar</button>    
                {/* onClick no funciona en componentes sino en elementos JSX */}
                {/* Por eso los eventos no se definen en componentes, sino en etiquetas nativas */}
                <Button myOnClick={(e) => this.handleClick(e,"This is a message from an arrow function.")}>Saludar</Button> 
            </div>
        )
    }
}