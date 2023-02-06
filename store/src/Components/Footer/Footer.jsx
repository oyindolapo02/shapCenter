import React from 'react'
// import './Footer.css'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between border mt-7 w-full min-h-[30vh] md:min-h-[30vh] lg:w-11/12 xl:w-[90%] bg-slate-100 rounded-md px-3'>
      <div className='border mb-2 h-14'><h1>FOOT</h1></div>
      <div className='flex flex-col items-center md:flex md:flex-row border w-full h-[80%]'>
        <div className='flex justify-between items-center border text-center md:text-left w-full md:w-3/6 h-full'>
          <div className='list-none border w-3/6 h-full'>
            <h2 className='text-2xl font-semibold text-slate-700 pb-2'>Categories</h2>
            <li className='text-slate-500 my-3'>Women</li>
            <li className='text-slate-500 my-3'>Men</li>
            <li className='text-slate-500 my-3'>Shoes</li>
            <li className='text-slate-500 my-3'>Accesories</li>
            <li className='text-slate-500 my-3'>New Arrivals</li>
          </div>
          <div className='list-none border w-3/6 h-full'>
            <h2 className='text-2xl font-semibold text-slate-700 pb-2'>Links</h2>
            <li className='text-slate-500 my-3'>Pages</li>
            <li className='text-slate-500 my-3'>FAQ</li>
            <li className='text-slate-500 my-3'>Stores</li>
            <li className='text-slate-500 my-3'>Campare</li>
            <li className='text-slate-500 my-3'>Cookies</li>
          </div>
        </div>
        <div className='flex justify-between items-center border text-center md:text-left w-full md:w-3/6 h-full mt-4 md:m-0'>
          <div className='border mr-3 pr-4 h-full'>
            <h2 className='text-2xl font-semibold text-slate-700 pb-2'>About</h2>
            <p className='text-slate-400 xl:leading-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aliquid reprehenderit officiis blanditiis accusantium velit, animi aspernatur facere dicta autem deserunt possimus eligendi quo sed expedita ipsum molestiae! Maiores, soluta!</p>
          </div>

          <div className='border ml-3 pl-4 h-full'>
            <h2 className='text-2xl font-semibold text-slate-700 pb-4'>Contact</h2>
            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa recusandae laborum veritatis esse temporibus architecto, illum, ducimus quasi modi tenetur laudantium sit pariatur, rem sint quisquam reprehenderit quo provident.</p>
          </div>
        </div>
      </div>
      <div className=' flex justify-between border w-full mt-3 '>
        <h2>oduod</h2>
        <div>images</div>
      </div>
    </div>
  )
}

export default Footer