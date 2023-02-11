import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Modals from '../Modals/Modals'
import Cartmodal from '../Cartmodal/Cartmodal'

const Navbar = ({cart}) => {
  const [menu, setmenu] = useState(false)

  const openMenu = ()=> {
    setmenu(true)
  }

  const closeMenu = ()=> {
    setmenu(false)
  }

  const [cartModal, setcartModal] = useState(false)

  function openCartModal() {
    setcartModal(true)
  }

  function closeCartModal () {
    setcartModal(false)
  }




  return (
    <div className='flex justify-between items-center bg-slate-300 w-screen h-[5vh] border border-red-600 z-[6] fixed'>
        <div className='flex items-center list-none hidden lg:flex border border-emerald-400 min-w-fit ml-6'>
            <li className='border mx-2 flex items-center text-xl'>bud<MdOutlineKeyboardArrowDown/></li>
            <li className='border mx-2 flex items-center text-xl'>USD <MdOutlineKeyboardArrowDown/></li>
            <Link to='/product/:1'><li className='border mx-2 text-xl'>Men</li></Link>
            <Link to='/product/:2'><li className='border mx-2 text-xl'>Women</li></Link>
            <Link to='/product/:3'><li className='border mx-2 text-xl'>Children</li></Link>
            <Link to='/product/:4'><li className='border mx-2 text-xl'>Accesories</li></Link>
        </div>
        <div className='flex items-center border text-2xl font-bold border-purple-400 lg:flex ml-5 lg:mx-0 lg:font-medium'>
            <Link to='/'><h2>The Seqeals</h2></Link>
        </div>
        <div onClick={openMenu} className='lg:hidden mr-5'>
          <AiOutlineMenu/>
        </div>
        <div className='flex items-center list-none border border-green-400 lg:flex hidden xl:mr-6'>
            <Link to='/'><li className='border mx-2 text-xl'>HomePage</li></Link>
            <li className='border mx-2 text-xl'>About</li>
            <li className='border mx-2 text-xl'>Contact</li>
            <li className='border mx-2 text-xl'>Stories</li>
            <li className='border mx-2 text-xl'><AiOutlineSearch/></li>
            <li className='border mx-2 text-xl'><AiOutlineUser/></li>
            <li className='border mx-2 text-xl'><AiOutlineHeart/></li>
            <li className='border mx-2 flex text-xl items-center relative' onClick={openCartModal}><AiOutlineShoppingCart/><span className='absolute bg-blue-300 rounded-full bottom-0 right-0'>{cart}</span></li>
        </div>
        {menu && <Modals closed ={closeMenu} />}
        {cartModal && <Cartmodal cartClosed = {closeCartModal}/>}
    </div>
  )
}

export default Navbar