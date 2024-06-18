import React from 'react'
import service from '../../assets/images/raya.png'
import '../../assets/css/Style.css'
export default function HomeCards() {
  return (
    <div className='cards flex flex-col w-[95%] items-center justify-center'>
      <div className="card flex justify-center items-center w-[90%] bg-red-500">
      <h1 className='text-white'>خدماتنا</h1>
        <img src={service} alt='cardone'/>
      </div>
      <div className="card flex justify-center items-center w-[90%] bg-red-500">
      <h1 className='text-white'>رعاية مستمرة</h1>
        <img src={service} alt='cardone'/>
      </div>
      <div className="card flex justify-center items-center w-[90%] bg-red-500">
      <h1 className='text-white'>فرقنا الطبية</h1>
        <img src={service} alt='cardone'/>
      </div>
    </div>
  )
}
