import React, {Component} from 'react';

// Child Component
function StateToChild(props) {
    return(
        <div><p>{props.seconds} seconds</p></div>
    )
}


// Parent Componrnt
export default class State extends Component {
    constructor(props) {
        super(props) // Constructor del objeto que hereda
        this.state = {
            counter : 0
        }

        setInterval(() => {
            this.setState({
                counter: this.state.counter+1
            })
        },1000)
    }
    render() {
        return (
            <div>
                <h4>
                    Seconds you spent in this page
                </h4>
                    <StateToChild seconds = {this.state.counter}/>
            </div>
        );
    }
}