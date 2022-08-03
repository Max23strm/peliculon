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
        <article className='pt-20 w-10/12 mx-auto min-h-screen' >
            {!data?<img src="https://s2.svgbox.net/loaders.svg?ic=grid" alt='Loading'/>:<section>
                <section className=' flex flex-row justify-evenly items-center border bg-[#19242E] rounded-md pt-5 pb-10'>
                    <section className='flex flex-col my-5'>
                        <h1 className='text-3xl font-bold uppercase my-2 text-slate-100'>{data.Title}</h1>
                        <img src={data.Poster} className="rounded-md" alt={`Poster de ${data.Title}`}/>
                    </section>
                    <section className='mt-20 ml-5 text-left text-slate-100'>
                        <section className='border border-lime-500 rounded-md p-5'>
                            <h6 className='my-2'>Rated: <p className='font-bold'>{data.Rated}</p></h6>
                            {data.Runtime!=="N/A" && <h6 className='my-2'>Duration: <p className='font-bold'>{data.Runtime}</p></h6>}
                            <h6 className='my-2'>IMDB rating: <p className='font-bold'>{data.imdbRating}</p></h6>
                            <h6 className='my-2'>Awards: <p className='font-bold max-w-md'>{data.Awards}</p></h6>
                        </section>
                        {data.Director!=="N/A" && <h6 className='border border-lime-500 rounded-md px-5 my-2'>Director: {data.Director}</h6>}
                        <h6 className='border border-lime-500 rounded-md px-5 py-5 my-2'>Actors: <ul className='font-bold'> {data.Actors && data.Actors.split(",").map(e=><li className='mt-1' key={e}>{e}</li>)} </ul></h6>
                    </section>
                </section>
                <section className='border border-lime-500 rounded-md bg-[#19242E] p-20 my-10 text-slate-100 text-xl'>
                    <h6>Plot: {data.Plot}</h6>
                </section>
            </section>}
        </article>
    )
}

export default Detalle