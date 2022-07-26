import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Detalle() {
    const id=useParams().id
    const [data, setData]=useState({})
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=bfe23438&i=${id}&plot=full`)
            .then(response=>response.json())
            .then(json=>setData(json))
    },[])
    return (
        <article className='w-10/12 mx-auto min-h-screen' >
            <section className='flex flex-row justify-evenly border bg-[#19242E] '>
                <section className='flex flex-col my-5'>
                    <h1 className='text-3xl font-bold uppercase my-2 text-slate-100'>{data.Title}</h1>
                    <img src={data.Poster} alt={`Poster de ${data.Title}`}/>
                </section>
                <section className='mt-20 ml-5 text-left text-slate-100'>
                    <section className='border border-lime-500 rounded-md px-5'>
                        <h6 className='my-2'>Clasificación: {data.Rated}</h6>
                        {data.Runtime!=="N/A" && <h6 className='my-2'>Duración: {data.Runtime}</h6>}
                        <h6 className='my-2'>IMDB rating: {data.imdbRating}</h6>
                        <h6 className='my-2'>Premios: {data.Awards}</h6>
                    </section>
                    {data.Director!=="N/A" && <h6 className='border border-lime-500 rounded-md px-5 my-2'>Director: {data.Director}</h6>}
                    <h6 className='border border-lime-500 rounded-md px-5 my-2'>Actores: <ul> {data.Actors && data.Actors.split(",").map(e=><li>{e}</li>)} </ul></h6>
                </section>
            </section>
            <section className='border border-lime-500 rounded-md px-5'>
                <h6>Trama: {data.Plot}</h6>
            </section>
        </article>
    )
}

export default Detalle