import React, { useState, useEffect } from 'react';


/* Se puede interpretar al useEffect como watchers (vue) */


function Clock({hour}) {
    return <h3>{hour}</h3>
}


export default function HookClock() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Actualización
        let tempo;
        if (show) {
            tempo = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
            },1000)
        } else {
            clearInterval(tempo)
        }

        return () => {
            // Desmontaje al eliminar a Clock
            clearInterval(tempo)
        }
    },[show])


    const ticTac = (value) => setShow(value);

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {show && <Clock hour={hour}/>}
            <button onClick = {() => ticTac(true)} >Iniciar</button>
            <button onClick = {() => ticTac(false)} >Detener</button>
        </>
    )
}