import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Slider/Slider'
import { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaBalanceScale, FaCartArrowDown} from 'react-icons/fa'
// import './Product.css'

const Product = () => {

  const Image = [
    'https://i.pinimg.com/originals/0d/85/5e/0d855ef364d4b78d95cd83f8cc9bcd07.jpg',
    'https://th.bing.com/th/id/R.3ad69e88ba9edc3b038384ae8a4bf96c?rik=VhCF2dMu9kTFYQ&riu=http%3a%2f%2fwww.thelifestyle-files.com%2fwp-content%2fuploads%2f2018%2f07%2fminimalist-fashion-basics-silk-shirt-2.jpg&ehk=zY9fxGprbN8SAA1Z5kA%2bFe6b3pjrvvy5%2fjcRvNUrjjQ%3d&risl=&pid=ImgRaw&r=0'

  ]

  const [imageSelector, setimageSelector] = useState(0)

  const [productButton, setproductButton] = useState(0)

  const increment = ()=>{
    const increase = productButton + 1
    setproductButton(increase)
    console.log(increase)
  }

  const decrement = ()=> {
    const zero = 0
    const decrease = productButton - 1
    console.log(decrease)
    if (decrease < 0) {
      setproductButton(zero)
      // console.log(zero)
    } else {
      setproductButton(decrease)
      // console.log(decrease)
    }
    // setproductButton(decrease)
    // console.log(decrease)
  }

  const [cart, setcart] = useState()

  const addCart = ()=> {
    try {
      if (productButton > 0) {
        setcart(productButton)
        // console.log(productButton)
      } else {
        console.log('cart is empty')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // const [visibility, setvisibility] = useState(false)

  // const div = ()=> {
  // }
  
  return (
    <div class="flex flex-col items-center w-screen min-h-screen">
      <Navbar
        cart = {cart}
      />
      <div className='border px-2 lg:px-0 md:h-[75vh] mt-12 flex flex-col bg-slate-100 sm:flex sm:flex-row sm:justify-center w-full lg:w-11/12 xl:w-[90%] rounded-md'>
        <div className='flex border w-full sm:w-[50%]'>
          <div className='border w-[7rem] h-fit mr-2'>
            <img className='w-[100%] h-[100%] rounded-md' src={Image[0]} alt=""  onClick={e=> setimageSelector(0)}/>
            <img className='w-[100%] h-[100%] mt-3 rounded-md' src={Image[1]} alt="" onClick={e=> setimageSelector(1)}/>
          </div>
          <div className='flex border w-full h-[100%] rounded-md'>
            <img className='w-full h-full object-cover rounded-md' src={Image[imageSelector]} alt=""/>
          </div>
        </div>

        <div className='flex flex-col sm:ml-4 border mt-2 sm:mt-0 w-full sm:w-[50%]'>
          <div className='border'>
            <h2 className='text-3xl font-bold mb-4 pr-3'>Long Sleeve Graphics T-Shirt</h2>
            <h1 className='text-2xl text-blue-600'>$19.9</h1>
            <p className='my-4 text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus a dignissimos nostrum alias quidem, reiciendis at earum aperiam doloremque neque omnis delectus fugiat aliquam sapiente maiores saepe deleniti. Quos, sapiente.</p>
            <div className='flex items-center border h-12 mb-4'>
              <button onClick={decrement} className='text-slate-500 border py-2 px-4 bg-white'>-</button>
              <p className='text-lg py-2 px-4 font-medium'>{productButton}</p>
              <button onClick={increment} className='text-slate-500 border py-2 px-4 bg-white'>+</button>
            </div>
            <button className='flex items-center border mb-4 py-3 px-12 bg-blue-600 text-white font-medium rounded-md' onClick={addCart}><FaCartArrowDown className='bg-blue-600 text-white font-medium mr-3'/> ADD TO CART</button>

            <div className='flex items-center border mb-11 h-11 text-blue-600 font-medium'>
              <button className='flex items-center border h-[100%] py-3 px-3 bg-white rounded-md'><AiOutlineHeart className='mr-3'/> ADD TO WISH LIST</button>
              <button className='flex items-center border h-[100%] ml-4 py-3 px-3 bg-white rounded-md'><FaBalanceScale className='mr-3'/> ADD TO COMPARE</button>
            </div>
          </div>

          <div className='border md:text-sm lg:text-lg'>
            <div className='border pb-10 mb-2 text-slate-500'>
              <p className='my-1'>Vendor: polo</p>
              <p className='my-1'>Product Type: T-Shirt</p>
              <p className='my-1'>Tag: T-Shirt, Women, Top</p>
            </div>
            <div className='w-fit text-slate-500'>
              <h2 className='border border-t-0 border-l-0 border-r-0 py-3'>DESCRIPTION</h2>
              <h2 className='border border-t-0 border-l-0 border-r-0 py-3'>ADDITIONAL INFORMATION</h2>
              <h2 className='py-3'>FAQ</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Product