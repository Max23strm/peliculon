import React from 'react'

function Buscador() {
    return (
        <section className=' flex flex-col my-5 w-fit'>
            <input className='pl-2 w-5/6'  type="text" name="buscador" placeholder='Show or movie name'/>
            <button className='text-slate-50 mt-2 py-1 ite hover:bg-[#263646] bg-[#1e2935] w-5/6  font-bold rounded-sm'>Buscar</button>
        </section>
    )
}

export default Buscador