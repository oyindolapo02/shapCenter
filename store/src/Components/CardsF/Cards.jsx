import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({info}) => {
  return (
    <div className='flex justify-center items-center mx-1 mt-1 border border-green-400 h-[100%] md:h-[] w-[100%] md:w-[22%] relative group overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md'>
        <div className='border rounded-md h-[100%] w-full'>
          <img className='w-full h-full object-cover border group-hover:rotate-0 group-hover:scale-125 transition-transform rounded-md' src={info.img} alt="" />
          {/* <img className='w-full h-full object-cover' src={info.img2} alt="" /> */}
        </div>
        <div className='flex flex-col justify-center text-center text-lg font-medium text-slate-500 hover:text-white w-full absolute px-9 inset-0 translate-y-[50%] lg:traslate-y-[50%] group-hover:translate-y-0 transition-all bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
          {/* {info.isNew && <span>New Editions</span>} */}
          {info.isNew ? <span>New Editions</span>: <span>No new Editions</span>}
          <h4>{info.title}</h4>
          <h4>{info.oldPrice}</h4>
          <h4>{info.Price}</h4>
          <Link to={`/product/${info.id}`}><button className='rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-4 md:py-3 md:px-3 lg:py-2 lg:px-5 text-sm capitalize text-white'>Learn More</button></Link>
        </div>
    </div>
  )
}

export default Cards
// md:h-[] w-[18vw] lg:w-[15vw]