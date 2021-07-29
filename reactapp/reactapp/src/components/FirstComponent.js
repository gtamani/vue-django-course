import React, {Component} from "react"

class FirstComponent extends Component{
    render(){
        return <h2>Hola {this.props.name}, soy un componente</h2>
    }
}

export default FirstComponent;