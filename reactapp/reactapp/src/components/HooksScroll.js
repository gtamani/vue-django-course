import React, { useState, useEffect } from 'react';
/* useEffect()
Pueden usarse tanto como se necesiten



return () => {} - Fase de desmontaje del componente
el mejor lugar para hacer desconecciones.

Dependencias - En el segundo parametro se específican. 
Indican que variables del estado debe observar la funcion useEffect definida.
[] - vacías --> fase de montaje.
... - sin nisiquiera definir - componentDidUpdate 
*/
export default function HooksScroll () {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log("Fase de Montaje")
        const detectScroll = () => setScrollY(window.pageYOffset)
        window.addEventListener("scroll",detectScroll);
        return () => {
            console.log("Fase de desmontaje")
            window.removeEventListener("scroll",detectScroll);
        }
    }, []);


    return(
        <>
            <h2>Scroll con useEffect()</h2>
            <p>Scroll en Y: {scrollY}px </p>
        </>
    )
}