import React from 'react'
import Buscador from '../components/Buscador'
import Carrusel from '../components/Carrusel'
import banner from '../img/rop.jpeg'

function Home() {
    return (
            <section className='w-11/12 flex flex-col align-center mx-auto'>
                <img src={banner} alt="banner principal" className='w-12/12 h-96 mt-5' />
                <Carrusel tipo={"series"}/>
                <Carrusel tipo={"movie"}/>
            </section>
    )
}

export default Home