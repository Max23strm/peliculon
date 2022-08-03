import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import lib from '../data/lib.json'
import useFavorites from '../hooks/useFavorites'
import Spinner from '../UI/Spinner'
function Category() {
  const {agregarAFavoritos}=useFavorites()
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
    <section className='w-11/12 mx-auto min-h-screen z-10 mb-20'>
      <section className='ml-12'>
        <h2 className='font-bold text-5xl pt-5 mb-5 text-[#0296D6]'>{param}</h2>
        <section className={`grid ${mostrador.length?"grid-cols-4 gap-5":"place-content-center"} `}>
          {!mostrador.length?<Spinner className='w-96 grid-center mt-52'/>:mostrador.map(e=>{
            return <Card data={e} agregarAFavoritos={agregarAFavoritos} key={e.imdbID}/>
          })}
        </section>
      </section>
    </section>
  )
}

export default Category