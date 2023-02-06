import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Modals from '../Modals/Modals'

const Navbar = ({cart}) => {
  const [menu, setmenu] = useState(false)

  const openMenu = ()=> {
    setmenu(true)
  }

  const closeMenu = ()=> {
    setmenu(false)
  }


  return (
    <div className='flex justify-between items-center bg-slate-300 w-full h-[5vh] border border-red-600 fixed z-[5]'>
        <div className='flex items-center list-none hidden lg:flex border border-emerald-400 xl:max-w-[32%] md:w-[33%]'>
            <li className='border mx-2 flex items-center text-xl'>bud<MdOutlineKeyboardArrowDown/></li>
            <li className='border mx-2 flex items-center text-xl'>USD <MdOutlineKeyboardArrowDown/></li>
            <Link to='/product/:1'><li className='border mx-2 text-xl'>Men</li></Link>
            <Link to='/product/:2'><li className='border mx-2 text-xl'>Women</li></Link>
            <Link to='/product/:3'><li className='border mx-2 text-xl'>Children</li></Link>
            <Link to='/product/:4'><li className='border mx-2 text-xl'>Accesories</li></Link>
        </div>
        <div className='flex items-center border mx-3 text-2xl font-bold border-purple-400 md:hidden'>
            <Link to='/'><h2>LAMASTORE</h2></Link>
        </div>
        <div onClick={openMenu} className='lg:hidden'>
          <AiOutlineMenu/>
        </div>
        <div className='flex list-none border border-green-400 lg:flex hidden xl:max-w-[32%] md:w-[50%]'>
            <Link to='/'><li className='border mx-2 text-xl'>HomePage</li></Link>
            <li className='border mx-2 text-xl'>About</li>
            <li className='border mx-2 text-xl'>Contact</li>
            <li className='border mx-2 text-xl'>Stories</li>
            <li className='border mx-2 text-xl'><AiOutlineSearch/></li>
            <li className='border mx-2 text-xl'><AiOutlineUser/></li>
            <li className='border mx-2 text-xl'><AiOutlineHeart/></li>
            <li className='border mx-2 flex text-xl items-center relative'><AiOutlineShoppingCart/><span className='absolute bg-blue-300 rounded-full bottom-0 right-0'>{cart}</span></li>
        </div>
        {/* <Modals/> */}
        {menu && <Modals closed ={closeMenu} />}
    </div>
  )
}

export default Navbar