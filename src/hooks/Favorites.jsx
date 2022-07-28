import React, {useState} from 'react'

export const useFavorites = () => {
    const [favoritos, setFavoritos]=useState([  ])
    
    const agregarAFavoritos=(elem)=>{
        !favoritos.includes(elem) && setFavoritos([...favoritos, elem])
    }

    return {
        favoritos,
        agregarAFavoritos
    }
}
