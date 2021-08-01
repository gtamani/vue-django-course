import React, {Component} from "react";
import data from "../helpers/data.json"

function ListItems(props) {
    return(
        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
        </li>
    )
}


export default class ElementsRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            table : ["Spoon","Fork","Knife","Glass"]
        }
    }
    render() {
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <p>In the table we can find:</p>
                <ol>
                    {this.state.table.map((el) => <li key={el}>{el}</li>)}
                </ol>
                <h2>Frameworks Frontend</h2>
                {data.frameworks.map((el)=><ListItems key={el.id} el={el}/>)}
            </div>

        )
    }
}