import { Link } from 'react-router-dom'
import Estrella from './Estrella'
function Card({data, agregarAFavoritos}) {
  return (
    <article className='relative h-fit z-20'>
      <Link to={`/${data.imdbID}`} className="p-5 rounded-md flex flex-col justify-between bg-[#19242E] bg-opacity-40 text-gray-100">
        <img src={data.Poster} alt={`Poster de ${data.Title}`} className="text-center" />
        <section className="flex flex-row justify-between relative  mt-2">
            <h3 className='font-bold text-xl' >{data.Title}</h3>
        </section>
      </Link>
      <section>
        <button className=' text-l
          w-9
          absolute
          bottom-4
          right-3
          z-30'
          onClick={()=>agregarAFavoritos(data.Title)} ><Estrella nombre={data.Title}/></button>
      </section>
    </article>
  )
}

export default Card