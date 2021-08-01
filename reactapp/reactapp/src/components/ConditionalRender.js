import React, {Component} from 'react';

function LogIn () {
    return (
        <div>Login</div>
    )
}

function LogOut () {
    return (
        <div>Logout</div>
    )
}

// Parent Componrnt
export default class ConditionalRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session : true
        }
    }
    render() {
        return (
            <div>
                <h4>
                    Renderizado condicional
                    {this.state.session ? <LogIn/> : <LogOut/>}
                </h4>
            </div>
        );
    }
}