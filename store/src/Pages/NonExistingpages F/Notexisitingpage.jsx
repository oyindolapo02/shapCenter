import React from 'react'
import { Link } from 'react-router-dom'

const Notexisitingpage = () => {
  return (
    <div className='text-center h-screen'>
        <h1>SORRY THIS PAGE DOES NOT EXIST..</h1>
        <Link to='/'><h3 className='border underline underline-offset-2'>CLICK THE LINK TO GO BACK TO THE HOME PAGE</h3></Link>
    </div>
  )
}

export default Notexisitingpage