import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Contacts = () => {
    const [email, setEmail] = useState('')
    const [sending, setSending] = useState(true)
    const formSubmit = (e)=> {
        e.preventDefault();
        postMyEmail();
    }

    const postEmail = `https://jsonplaceholder.typicode.com/users`

    const postMyEmail = async()=> {
        try {
            const EmailsAdd = await axios.post(postEmail, {
                email,
            })
            const nativeEmail = EmailsAdd.data
            console.log(nativeEmail)
            setEmail(nativeEmail)
            setSending(false)
            setEmail('')
        } catch(error) {
            console.log(error.message)
        }
    }


  return (
    <div className='border bg-blue-400 flex justify-between items-center mt-3 min-h-[5vh] md:h-[7vh] lg:h-[7vh] w-full lg:w-11/12 xl:w-[90%] bg-slate-100 rounded-md'>
        <div className='border h-[60%] flex justify-center items-center'>
            <h1>Happy We Have You With Us</h1>
        </div>
        <form className='border flex h-[60%]' onSubmit={formSubmit} action="">
            <input
                type="text"
                placeholder='Enter Your Email'
                value={email}
                onChange={(e=> setEmail(e.target.value))}
            />
            <button className='border py-2 px-3'>JOIN US</button>
            {sending && <button>Sending....</button>}
            {/* {sending ? <button>JOIN US</button>: <div>SENT</div>} */}
        </form>

        <div className='border'>
            <h2>MY ICONS SECTIONS</h2>
        </div>
    </div>
  )
}

export default Contacts