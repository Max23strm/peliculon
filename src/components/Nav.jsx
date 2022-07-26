import React from 'react'
import lib from '../data/lib.json'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Nav() {
    const [boton, setBoton]=useState(false)
    const [icon, setIcon]=useState("https://s2.svgbox.net/materialui.svg?ic=menu&color=c0bfbc")
    var genero=["Movies", "Series" ]
    lib.map(e=>{
        e.Genre.split(" ").map(e=>{
            if(e[e.length-1]===","){
                e=(e.slice(0,-1))
            }
            if(!genero.includes(e)){
                genero.push(e)
            }
        })
    })
    const togle = () =>{
        !boton?setIcon("https://s2.svgbox.net/materialui.svg?ic=close&color=c0bfbc"):setIcon("https://s2.svgbox.net/materialui.svg?ic=menu&color=c0bfbc")
        setBoton(!boton)
    }
    
    return (
        <nav className={` h-full fixed transition-[width] ${boton ? 'w-2/12 bg-[#121920] ' : "w-12 bg-[#19242E]"} overflow-hidden flex flex-row align-top  ml-0`}>
            <button onClick={togle} className="hover:text-white mt-3 px-1 h-fit"><img src={icon} className="w-10" alt=""/></button>
            <section className={`ml-5 mt-5 transition-[width] ${!boton?"hidden":"block"}`}>

                <h3 className={`font-bold text-2xl w-9/12mb-5 text-gray-100 `}>Peliculon</h3>
                <section className='flex flex-col'>
                    <Link className='my-2 text-gray-100 hover:text-white font-bold' to={"/"} onClick={togle}>Inicio</Link>
                    <Link className='my-2 text-gray-100 hover:text-white font-bold' to={""} onClick={togle}>Favoritos</Link>
                    
                    <details className=' my-2 flex flex-col text-gray-100 hover:text-white font-bold transition-transform'>
                    <summary className='hover:cursor-pointer'>
                        Categorias
                    </summary>
                    {genero.length && genero.map(e=>{
                        return <Link key={genero.indexOf(e)}className={"ml-5 my-2 "}to={`/category/${e}`} onClick={togle}>
                        {e}
                        </Link>
                    })}
                    </details>
                </section>
            </section>
        </nav>
    )
}

export default Nav