import {useState} from 'react'

const useFavorites = () => {
    const [favoritos, setFavoritos]=useState ([])
    const agregarAFavoritos=(elem)=>{
        if(favoritos.includes(elem)){
            console.log("Ya esta, huevon")
            console.log(favoritos)
        } else {
            console.log("deberia agregarlo")
            setFavoritos(favoritos=>[...favoritos, elem])
        }
        console.log(favoritos)
    }

    return {
        agregarAFavoritos,
        favoritos
    }
}
export default useFavorites