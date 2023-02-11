import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Lists from '../../Components/Listf/Lists'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import './Products.css'

const Products = () => {

  const catId = parseInt(useParams().id)
  console.log(catId)

  const [price, setPrice] = useState(100)
  const [sort, setSort] = useState(null)

  return (
    <div className='flex flex-col justify-between items-center border w-full min-h-screen rounded-md'>
      <Navbar/>
      <div className='flex flex-col justify-center md:flex-row md:justify-center border w-full lg:w-11/12 xl:w-[90%] bg-slate-100 rounded-md'>

        <div className='border w-full md:w-[35%] min-h-[45vh] md:h-[45vh] relative rounded-md'>
          <div className='pl-2 md:pl-10 border w-full min-h-[60%] absolute top-12 rounded-md'>
            <div className='border'>
              <h1 className='text-2xl font-medium'>Product Categories</h1>
              <div className='flex mt-3 font-normal text-lg'>
                <input className='mr-1' id='1' value={1} type="checkbox" />
                <label htmlFor='1'>Hat</label>
              </div>
              <div className='flex mt-2 font-normal text-lg'>
                <input className='mr-1' id='2' value={2} type="checkbox" />
                <label htmlFor='2'>Tshirt</label>
              </div>
            </div>
            <div className='border mt-4'>
              <h1 className='text-2xl font-medium'>Filter By Price</h1>
              <span>0</span>
                <input type="range" min={0} max={500} onChange={(e)=>setPrice(e.target.value)}/>
              <span>{price}</span>
            </div>
            <div className='border mt-3'>
              <h1 className='text-2xl font-medium'>Sort By</h1>
              <div className='flex mt-2 font-normal text-lg'>
                <input type="radio" id='asc' value='asc' name='price' onChange={(e=> setSort('decs'))} />
                <label htmlFor='asc'>Price (Lowest first)</label>
              </div>
              <div className='flex mt-2 font-normal text-lg'>
                <input type="radio" id='desc' value='desc' name='price' onChange={(e=> setSort('asc'))}/>
                <label htmlFor=''>Price (Highest first)</label>
              </div>
            </div>
          </div>
        </div>

        <div className='border-2 w-full md:w-[65%] md:flex-3 border-green-500'>
          <div className='border mt-11 w-full h-[17%] rounded-md border-orange-500'>
            <img className='w-full h-[100%] object-cover rounded-md' src="https://th.bing.com/th/id/R.986e807e717bfbf482385513ba15320f?rik=mxYr%2bUlGcfl1wg&pid=ImgRaw&r=0" alt="" />
          </div>
          <div className='border'>
            <Lists
              catId = {catId}
              price = {price}
              sort = {sort}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Products

// w-full md:w-[35%]
// flex-col justify-center


// w-full md:w-[65%]