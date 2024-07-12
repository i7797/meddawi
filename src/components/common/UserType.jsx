import React from 'react'
import { Link } from 'react-router-dom'

function UserType() {
  return (
    <div className='bg-red-300 flex justify-center items-center m-2'>
      <Link to="/nurse" className='m-3 text-[35px]'>Are nurse</Link>
      <Link to="/home" className='m-3 text-[35px]'>patient</Link>
    </div>
  )
}

export default UserType
