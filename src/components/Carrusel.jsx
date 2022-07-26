import React from 'react'
import { Link } from 'react-router-dom'
import lib from '../data/lib.json'

const Carrusel = ({tipo}) => {
var cuenta=0
    return (
        <section className='flex flex-col bg-opacity-50 bg-[#19242E] rounded-md my-5'>
            <h3 className='font-bold text-3xl ml-5 mt-5 text-gray-100'>{tipo==="series"?`Most aclaimed ${tipo.toUpperCase()}`:`Our best ${tipo.toUpperCase()}S`}</h3>
            <section className='flex flex-row overflow-scroll my-3 w-11/12 mx-auto'>
                { 
                lib.map((e)=>{
                    return (e.Type===tipo) && 
                    cuenta<12?(cuenta++,
                        <Link to={`/${e.imdbID}`} key={e.imdbID} className='text-center mx-2 p-2 rounded-md text-gray-100 hover:bg-[#0296D6] hover:bg-opacity-10'>
                            <img src={e.Poster} alt={`Poster de ${e.Title}`} className='12/12 max-w-none h-60 rounded-sm' />
                            <h4 className='mt-2 font-bold my-1'>{e.Title}</h4>
                    </Link>  ):null
                })
                }
            </section>
        </section>
)
}

export default Carrusel