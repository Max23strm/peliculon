import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='pt-10 min-h-20 bg-slate-900 grid place-content-center text-center text-slate-50 uppercase font-bold text-sm min-h-minn'>
        <h3 className=''>Proyecto creado por Max Ovejak</h3>
        <h3>Iconos de <Link to={"https://svgbox.net/"} className="text-[#0296D6]"> IconSet</Link></h3>
        <section className='flex flex-row mx-auto mt-2 mb-5'>
            <Link to={"https://www.linkedin.com/in/m-ovejak/"} className="mx-2"><img src="https://s2.svgbox.net/social.svg?ic=linkedin&color=0296d6" width="32" height="32" alt='LinkedIn'/></Link>
            <Link to={"https://github.com/Max23strm"} className="mx-2"><img src="https://s2.svgbox.net/social.svg?ic=github&color=0296d6" width="32" height="32" alt='Github'/></Link>
        </section>
    </footer>
  )
}

export default Footer