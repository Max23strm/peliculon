import {useState} from 'react'
import { Link } from 'react-router-dom'
function Buscador() {
    const [termino, setTermino] = useState("")
    return (
        <section className=' flex flex-col my-5 w-fit'>
            <input  value={termino} onChange={(e)=>setTermino(e.target.value)} className='pl-2 w-5/6'  type="text" name="buscador" placeholder='Show or movie name'/>
            <button className='text-slate-50 mt-2 py-1 ite hover:bg-[#263646] bg-[#1e2935] w-5/6  font-bold rounded-sm' type='Submit'><Link to={`/busqueda/${termino}`}>Buscar</Link></button>
        </section>
    )
}

export default Buscador