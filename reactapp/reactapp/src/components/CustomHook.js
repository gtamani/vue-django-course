import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function CustomHooks () {
    /*
    console.log("CustomHook")
    console.log(useFetch)
    */
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let {data, resolved, error} = useFetch(url)

    return(
        <>
            <h2>Hooks personalizados</h2>
            <h2> Resolved: {JSON.stringify(resolved)} - Error: {JSON.stringify(error)}</h2>
            <h3>
                {/* Los estilos inline hay que pasarlos como un objeto */}
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>
                        {JSON.stringify(data)}
                    </code>
                </pre>
            </h3>
        </>
    )
}