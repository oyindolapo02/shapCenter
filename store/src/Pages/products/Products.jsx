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
    <div className='flex flex-col justify-between items-center border border-yellow-400 w-full min-h-screen rounded-md'>
      <Navbar/>
      <div className='flex flex-col md:flex-row md:justify-center border border-purple-500 w-full lg:w-11/12 xl:w-[90%] min-h-[30vh] rounded-md'>

        <div className='border border-red-500 w-[30%] relative rounded-md'>
          <div className='pl-2 md:pl-10 border border-pink-400 h-[50%] w-full absolute top-12 rounded-md'>
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

        <div className='border border-x-black w-[70%]'>
          <div className='border border-yellow-700 mt-11 w-full h-[17%] rounded-md'>
            <img className='w-full h-[100%] object-cover rounded-md' src="https://th.bing.com/th/id/R.986e807e717bfbf482385513ba15320f?rik=mxYr%2bUlGcfl1wg&pid=ImgRaw&r=0" alt="" />
          </div>
          <Lists
            catId = {catId}
            price = {price}
            sort = {sort}
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Products