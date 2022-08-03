import React from 'react'
import lib from '../data/lib.json'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Buscador from './Buscador'
import Burguer from '../UI/Burguer'
import Close from '../UI/Close'
function Nav() {
    const [boton, setBoton]=useState(false)
    const [icon, setIcon]=useState(<Burguer/>)
    var genero=["Movies", "Series" ]
    lib.map(e=>{
        return e.Genre.split(" ").map(e=>{
            if(e[e.length-1]===","){
                return e=(e.slice(0,-1))
            }
            if(!genero.includes(e)){
                return genero.push(e)
            }
        })
    })
    const togle = () =>{
        !boton?setIcon(<Close/>):setIcon(<Burguer/>)
        setBoton(!boton)
    }
    
    return (
        <nav className={` h-full 
        fixed 
        transition-[width] 
        ${boton ? 'w-96 bg-[#121920] ' : "w-12 bg-[#19242E]"} 
        overflow-hidden 
        flex 
        flex-row 
        align-top  
        ml-0 
        z-50`}>
            <button onClick={togle} className="hover:text-white mt-3 px-1 h-fit">{icon}</button>
            <section className={`ml-5 mt-4 transition-[width] ${!boton?"hidden":"block"}`}>

                <Link className={`font-bold text-2xl w-9/12mb-5 text-gray-100 `} to={"/"}>Peliculon</Link>
                <section className='flex mt-10 flex-col'>
                    <Link className='my-2 text-gray-100 hover:text-white font-bold' to={"/"} onClick={togle}>Home</Link>
                    <Link className='my-2 text-gray-100 hover:text-white font-bold' to={"/fav"} onClick={togle}>Favorites</Link>
                    
                    <details className=' my-2 flex flex-col text-gray-100 hover:text-white font-bold transition-transform'>
                    <summary className='hover:cursor-pointer'>
                        Categories
                    </summary>
                    {genero.length && genero.map(e=>{
                        return <Link key={genero.indexOf(e)}className={"ml-5 my-2 "}to={`/category/${e}`} onClick={togle}>
                        {e}
                        </Link>
                    })}
                    </details>
                    <Buscador/>
                    <Link className='my-2 text-[#1f2a36] hover:text-white font-bold' to={"/about"}>About</Link>
                </section>
            </section>
        </nav>
    )
}

export default Nav