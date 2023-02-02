import React from 'react'
import { useState } from 'react'
import clif from '../Allimages/clif.png'
import elk from '../Allimages/elk.png'
import coldnowlandscape from '../Allimages/coldnowlandscape.png'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'


const Slider = () => {

  const slides = [
    {
      url: 'https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?cs=srgb&dl=cold-snow-landscape-858115.jpg&fm=jpg'
    },

    {
      url: 'https://wallsdesk.com/wp-content/uploads/2018/03/Pictures-of-Elk.jpg'
    },

    {
      url: 'https://askthepilot.com/wp-content/uploads/2012/07/Islet.jpg'
    }
  ];

  const [currentIndex, setcurrentIndex] = useState(0)

  const nextSlider = ()=> {
    const newImg = currentIndex === 0;
    const updateSlide = newImg ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(updateSlide)
  }

  const prevSlider = ()=> {
    const newImg = currentIndex === slides.length -1;
    const updateSlide = newImg ? 0 : currentIndex + 1;
    setcurrentIndex(updateSlide)
  }

  return (
    <div className='flex flex-col justify-center border border-purple-500 h-[65vh] w-full lg:w-11/12 xl:w-[90%] overflow-hidden relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='h-[100%] border border-red-600 bg-no-repeat bg-cover bg-center'>
      </div>
      <div className='flex justify-between items-center w-full h-10 absolute z-[2] hidden group-hover:flex'>
        <div onClick={prevSlider} className='font-semibold text-3xl ml-2'><BsFillArrowLeftSquareFill className='accent-slate-300 text-gray-200'/></div>
        <div onClick={nextSlider} className='font-semibold text-3xl mr-2'><BsFillArrowRightSquareFill className='accent-slate-300 text-gray-200'/></div>
      </div>
    </div>
  )
}

export default Slider