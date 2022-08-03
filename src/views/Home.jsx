import React from 'react'
import Banner from '../components/Banner'
import Carrusel from '../components/Carrusel'

function Home() {
    return (
            <section className='w-11/12 flex flex-col align-center mx-auto  '>
                <Banner/>
                <Carrusel tipo={"series"}/>
                <Carrusel tipo={"movie"}/>
            </section>
    )
}

export default Home