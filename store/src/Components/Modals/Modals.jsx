import React from 'react'

const Modals = ({closed}) => {
  return (
    <div className='border border-red-400 fixed top-0 right-0 w-1/3 h-3/5 lg:hidden'>
        <div onClick={closed}><h2>cancel</h2></div>
    </div>
  )
}

export default Modals