import React, { useState } from 'react'
import useFavorites from '../hooks/useFavorites'
function Estrella({nombre}) {
    const {favoritos}=useFavorites()
    const [estado,setEstado]=useState(false)
    favoritos.find(e=>e===nombre) && setEstado(true)

    return (
    <img  src={estado?`https://s2.svgbox.net/hero-solid.svg?ic=star&color=1c71d8`:`https://s2.svgbox.net/hero-outline.svg?ic=star&color=1c71d8`} alt="fav" />
    )
}

export default Estrella