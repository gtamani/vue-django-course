import React from "react";
import PropTypes from "prop-types"

export default function Properties(props) {
    return(
        <div>
            <h2>{props.default}</h2>
            <p>Props can be {props.string}, numbers ({props.number}) or boolean ({props.boolean})</p>
            <p>Also can be arrays, like [{props.array.join(",")}]</p>
            <p>Object values as well! {props.object.blog} - {props.object.user}</p>
            {props.reactElement}
            <p>What about a square function? [{props.array.join(",")}] ** 2 = [{props.array.map(props.function).join(",")}]</p>
            <p>To end with, it addmits a Component: <br/>"{props.component}"</p>
            <p>A component within a component</p>
        </div>
    )
}

Properties.defaultProps = {
    default : "Default prop",
}

Properties.propTypes = {
    number : PropTypes.number
}