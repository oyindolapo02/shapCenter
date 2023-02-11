import React from 'react'
import {GiCancel} from 'react-icons/gi'
import {MdDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Cartmodal = ({cartClosed}) => {

    const data = [
        {
            id: 1,
            img: 'https://th.bing.com/th/id/OIP.ydPNEpUgKxYrsRB_L8vyxAHaLH?pid=ImgDet&rs=1',
            img2: 'https://theimpression.com/wp-content/uploads/2018/03/balenciaga-rf18-3234.jpg',
            title: 'Fashion shows',
            desc:'Long sleeve T-Shirt',
            isNew: true,
            oldPrice: 19,
            Price: 12,
        },

        {
            id: 2,
            img: 'https://pyxis.nymag.com/v1/imgs/fd9/5bd/f00bd008f4b7b4167b2e4ae770f55fdacc-30-dior-1.2x.w710.jpg',
            img2: 'https://th.bing.com/th/id/R.76353df8997642a8c0fe767812c06d35?rik=snFPd2%2bHr3sPcA&riu=http%3a%2f%2ftheimpression.com%2fwp-content%2fuploads%2f2017%2f09%2fchloe-rs18-0689.jpg&ehk=bX7r%2brC2K7db574SYywDU%2bUBT1IAcNuZy%2b0zPwr7zO4%3d&risl=&pid=ImgRaw&r=0',
            title: 'Fashion shows',
            desc:'Long sleeve T-Shirt',
            isNew: false,
            oldPrice: 19,
            Price: 12,
        },
    ]

  return (
    <div className='border border bg-slate-200 fixed top-12 right-3 min-h-[45vh] shadow-2xl w-[42%] rounded-md pl-4 hidden lg:block'>
        <div className='flex justify-between border font-normal text-3xl text-slate-500 py-4 mb-4 mr-4'><h1>Products in your cart</h1> <GiCancel className='cursor-pointer' onClick={cartClosed}/></div>
        <div className='border border-yellow-400 h-[82%]'>
            {data.map(info=> {
                return (
                    <div key={info.id} className='border border-t-black flex h-[42%]'>
                        <div className='border border-green-600 flex items-center h-full w-[25%] mr-4'><img className='h-full w-full object-cover' src={info.img} alt="" /></div>
                        <div className='border flex flex-col min-w-[60%]'>
                            <h2 className='mb-7 font-medium text-xl text-slate-500'>{info.title}</h2>
                            <div className='flex justify-between items-center mr-4'><p className='mb-1 text-lg text-slate-500'>{info.desc.substring(0, 100)}</p> <MdDelete className='border border-green-600 h-9 w-9 text-red-600 font-bold text-lg'/></div>
                            <h5 className='text-lg text-slate-500'>1 x ${info.Price}</h5>
                        </div>
                    </div>
                )
            })}
            <div className='border mt-9'>
                <div className='flex justify-between font-semibold text-lg mr-4'><h3>SUBTOTAL</h3> <h4>$19.9</h4></div>
                <Link to='/cart'><button className='bg-blue-600 py-2 px-7 my-5 text-white rounded-md'>PROCEED TO CHECKOUT</button></Link>
                <p className='text-red-600'>Reset Cart</p>
            </div>
        </div>
    </div>
  )
}

export default Cartmodal