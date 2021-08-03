import React, { useState, useEffect } from 'react';

function Pokemon ( {avatar, name} ) {
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}


export default function HooksAjax () {
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        // ComponentDidmount
        // Si se necesita usar asincronía definir otra funcion (preferiblemente arrow)
        // NUNCA hacer asíncrono el useEffect ( mala práctica )
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json();

            json.results.forEach(async (element) => {
                let res = await fetch(element.url),
                json = await res.json();
                
                let pokemon = {
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default,
                }

                setPokemons((pokemons) => [...pokemons,pokemon]);

            })
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/")
        
    },[])

    return(
        <>
            <h2>AJAX - Peticiones asíncronas en Hooks</h2>
            {pokemons.length === 0
                ? <p>Cargando...</p>
                : pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>)
            }
        </>
    )
}