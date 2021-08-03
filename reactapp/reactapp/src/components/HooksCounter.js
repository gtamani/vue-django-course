import React, { useState } from 'react';

/* Antes de la llegada de los hooks, las funciones eran componentes tontos,
sólo minicomponentes de presentación cuya lógica se manejaba dentro de una clase */

/* Tipos de hooks

--> useState
--> useEffect

*/

/*
La función useState() devuelve dos valores:
1 - el valor.
2 - la función que va a actualizar dicho valor.
Por ende... hay que hacer el destructuring en la definición

const [counter, setCounter] = useState(0);

Recibe como parametro el valor inicial de la variable. En este caso, cero.

*/

export default function HooksCounter (props) {
    const [counter, setCounter] = useState(0);
    const addOne = () => setCounter(counter+1)
    const sustractOne = () => setCounter(counter-1)
    return(
        <>
            <h2>Hooks - useState </h2>
            <h2>Contador de {props.title} - {counter}</h2>
            <nav>
                <button onClick={addOne}> + </button>
                <button onClick={sustractOne}> - </button>
            </nav>
        </>
    )
}

HooksCounter.defaultProps = {
    title : "seguidores"
}
// Propiedades por defecto.
