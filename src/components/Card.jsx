import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
  return (
    <Link to={`/${data.imdbID}`} className="p-5 rounded-md flex flex-col justify-between bg-[#19242E] bg-opacity-40 text-gray-100">
        <img src={data.Poster} alt={`Poster de ${data.Title}`} className="text-center" />
        <section className="flex flex-row justify-between  mt-2">
          <h3 className='font-bold text-xl' >{data.Title}</h3>
          <button className=' text-l hover:text-[#0296D6] hover:font-semibold' >Agregar a <br/>favoritos</button>
        </section>
    </Link>
  )
}

export default Card