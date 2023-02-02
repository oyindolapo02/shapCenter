import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='border border-red-400 flex items-center mt-3 min-h-[50vh] md:h-[45vh] lg:h-[60vh] w-full lg:w-11/12 xl:w-[90%] bg-slate-100 rounded-md'>
        <div className='border border-green-400 w-[50%] h-full flex m-1'>
            <div className='border border-green-400 w-[50%] flex flex-col mr-1'>
                <div className='border border-purple-400 h-[50%] mb-1 group overflow-hidden hover:shadow-xl text-white hover:shadow-black/30 transition-shadow relative flex flex-col justify-center items-center rounded-md'>
                    <img className='w-full h-full object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform' src="https://i.pinimg.com/originals/39/f1/b7/39f1b74b52805fde2cc93bc8e607dad8.jpg" alt="" />
                    <div className='absolute border w-[25%] flex justify-center items-center rounded-md'>
                        <Link to={`/products/1`}><button className='border border-yellow-400 w-full px-3 py-1 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 gronp-hover:via-black/60 group-hover:to-black/70 rounded-md hover:text-slate-100'>Sale</button></Link>
                    </div>
                </div>
                <div className='border border-green-400 h-[50%] mt-1 group overflow-hidden hover:shadow-xl text-white hover:shadow-black/30 transition-shadow relative flex flex-col justify-center items-center rounded-md'>
                    <img className='w-full h-full object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform' src="https://th.bing.com/th/id/OIP.8QexWEB5NMpfuMEQAeKRhQHaLI?pid=ImgDet&rs=1" alt="" />
                    <div className='absolute border w-[25%] flex justify-center items-center rounded-md'>
                        <Link to={`/products/1`}><button className='border border-yellow-400 w-full px-3 py-1 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 gronp-hover:via-black/60 group-hover:to-black/70 rounded-md hover:text-slate-100'>Sale</button></Link>
                    </div>
                </div>
            </div>
            <div className='border border-purple-400 w-[50%] group overflow-hidden hover:shadow-xl text-white hover:shadow-black/30 transition-shadow relative flex flex-col justify-center items-center rounded-md'>
                <img className='w-full h-full object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform' src="https://th.bing.com/th/id/OIP.8QexWEB5NMpfuMEQAeKRhQHaLI?pid=ImgDet&rs=1" alt="" />
                <div className='absolute border w-[25%] flex justify-center items-center rounded-md'>
                    <Link to={`/products/1`}><button className='border border-yellow-400 w-full px-3 py-1 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 gronp-hover:via-black/60 group-hover:to-black/70 rounded-md hover:text-slate-100'>Sale</button></Link>
                </div>
            </div>
        </div>
        <div className='border border-purple-400 w-[50%] h-full flex flex-col m-1'>
            <div className='border border-green-400 h-[50%] flex '>
                <div className='border border-purple-400 w-[50%] mr-1 mb-1 group overflow-hidden hover:shadow-xl text-white hover:shadow-black/30 transition-shadow relative flex flex-col justify-center items-center rounded-md'>
                    <img className='w-full h-full object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform' src="https://th.bing.com/th/id/OIP.8QexWEB5NMpfuMEQAeKRhQHaLI?pid=ImgDet&rs=1" alt="" />
                    <div className='absolute border w-[25%] flex justify-center items-center rounded-md'>
                        <Link to={`/products/1`}><button className='border border-yellow-400 w-full px-3 py-1 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 gronp-hover:via-black/60 group-hover:to-black/70 rounded-md hover:text-slate-100'>Sale</button></Link>
                    </div>
                </div>
                <div className='border border-green-400 w-[50%] ml-1 mb-1 group overflow-hidden hover:shadow-xl text-white hover:shadow-black/30 transition-shadow relative flex flex-col justify-center items-center rounded-md'>
                    <img className='w-full h-full object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform' src="https://th.bing.com/th/id/OIP.8QexWEB5NMpfuMEQAeKRhQHaLI?pid=ImgDet&rs=1" alt="" />
                    <div className='absolute border w-[25%] flex justify-center items-center rounded-md'>
                        <Link to={`/products/1`}><button className='border border-yellow-400 w-full px-3 py-1 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 gronp-hover:via-black/60 group-hover:to-black/70 rounded-md hover:text-slate-100'>Sale</button></Link>
                    </div>
                </div>
            </div>
            <div className='border border-purple-400 h-[50%] mt-1 group overflow-hidden hover:shadow-xl text-white hover:shadow-black/30 transition-shadow relative flex flex-col justify-center items-center rounded-md'>
                <img className='w-full h-full object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform' src="https://th.bing.com/th/id/OIP.8QexWEB5NMpfuMEQAeKRhQHaLI?pid=ImgDet&rs=1" alt="" />
                <div className='absolute border w-[25%] flex justify-center items-center rounded-md'>
                    <Link to={`/products/1`}><button className='border border-yellow-400 w-full px-3 py-1 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 gronp-hover:via-black/60 group-hover:to-black/70 rounded-md hover:text-slate-100'>Sale</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories