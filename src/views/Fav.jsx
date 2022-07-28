import React, {useState} from 'react'
import Card from '../components/Card.jsx'

export const Fav = () => {
    const [favoritos, setFavoritos]=useState([  ])
    
    return (
        <section className='w-11/12 mx-auto min-h-screen'>
            <h2 className='font-bold text-5xl pt-5 mb-5 text-[#0296D6]'>Favoritos</h2>
                {!favoritos.length?
                    <section className='mt-10'>
                        <h4 className='font-bold text-3xl  mt-5 text-gray-100'>Al parecer usted no ha seleccionado favoritos.</h4>
                        <h5 className='font-bold text-xl  mt-5 text-gray-50'>Explore nuestra biblioteca y seleccionelos para mostrarlos aqui.</h5>
                    </section>:
                    <section>
                        {favoritos.map(e=><Card data={e} key={e.imdbID}/>)}
                    </section>
                }
        </section>
    )
}
