import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Spinner from '../UI/Spinner'

function Buscado() {
  const [busqueda,setBusqueda]=useState([])
  const {termino}= useParams()
  useEffect(()=>{
    fetch(`http://www.omdbapi.com/?apikey=bfe23438&s=${termino}`)
      .then(response=>response.json())
      .then(json=>setBusqueda(json.Search))
    },[termino])
  return (
    <div className='min-h-screen mx-auto w-11/12'>
      <section className='ml-12'>

        <h1 className='font-bold text-5xl pt-5 mb-5 text-[#0296D6]'>"{termino}"</h1>
        <section className={`grid ${busqueda.length?"grid-cols-4 gap-5":"place-content-center"}`}>
          {busqueda.length?busqueda.map(e=>{return <Card data={e} key={e.imdbID}/>}):<Spinner className='grid-center mt-52'/>}
        </section>

      </section>
    </div>
  )
}

export default Buscado