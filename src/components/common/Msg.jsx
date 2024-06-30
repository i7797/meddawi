import React from 'react'
import done from '../../assets/images/yes.png'

export default function Msg() {
  return (
    <div className='bg-[#181D3D]'>
      <img className='w-80 h-80 mr-10 mt-0 mb-6' src={done}/>
      <h1 className='text-white text-[30px]'>
        لقد تم ارسال طلبك و سوف يتم الاتصال بكم خلال دقائق
      </h1>
    </div>
  )
}
