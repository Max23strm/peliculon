import React from 'react'
import Banner from '../components/Banner'
import Carrusel from '../components/Carrusel'
import Spinner from '../UI/Spinner'

function Home() {
    return (
            <section className='w-11/12 flex flex-col align-center mx-auto'>
                <section className='ml-12'>
                    <Banner/>
                    <Carrusel tipo={"series"}/>
                    <Carrusel tipo={"movie"}/>
                </section>
            </section>
    )
}

export default Home