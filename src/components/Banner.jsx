import React from 'react'
import banner from '../img/espaldas.png'
import lib from '../data/lib.json'
import { Link } from 'react-router-dom'
function Banner() {

const data=lib.find(e=>e.imdbID==="tt9288030")

  return (
    <div className='flex flex-row justify-evenly items-center animate-fade-in'>
        <section className='flex flex-col'>
            <h1 className='text-slate-100 font-bold text-7xl my-2'>{data.Title}</h1>
            <p className='text-slate-100 text-xl'>{data.Plot}</p>
            <Link className="my-5 p-3 rounded-md bg-[#0296D6] hover:bg-[#016d9b]  w-fit " to={"/"+data.imdbID}>See details..</Link>
        </section>
        <img src={banner} alt="banner principal" className='h-96 mt-5 rounded-md  z-0 top-0 right-0 ' />
        
    </div>
  )
}

export default Banner