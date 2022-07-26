import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import lib from '../data/lib.json'
function Category( ) {
const [mostrador,setMostrador]=useState([])

  var param=useParams().category
  var muestra=[]
  switch (param) {
    case "Movies":
      lib.map(e=>{
        return e.Type==="movie"&&muestra.push(e)
      })
      break;
    case "Series":
      lib.map(e=>{
        return e.Type==="series"&&muestra.push(e)
      })
      break;
    default:
      lib.map(e=>{ 
        var busqueda=e.Genre.split(" ")
        return busqueda.includes(param) || busqueda.includes(param + ",")? muestra.push(e):null
    })
      break;
  }

  setTimeout(() => {
    setMostrador([...muestra])
  }, 2000);
  return (
    <section className='w-11/12 mx-auto min-h-screen'>
      <h2 className='font-bold text-5xl pt-5 mb-5 text-[#0296D6]'>{param}</h2>
      <section className={`grid ${mostrador.length?"grid-cols-4 gap-5":"place-content-center"} `}>
        {!mostrador.length?<img src="https://s2.svgbox.net/loaders.svg?ic=grid&color=c0bfbc" className='w-20 grid-center mt-52' alt='cargando'/>:mostrador.map(e=>{
          return <Card data={e} key={e.imdbID}/>
        })}
      </section>
    </section>
  )
}

export default Category