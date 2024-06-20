import React from 'react'
import service from '../../assets/images/ourserive.png'
import teamwork from '../../assets/images/team.png'
import dailyService from '../../assets/images/DailyCare.png'
import '../../assets/css/Style.css'

import { Link } from 'react-router-dom';
export default function HomeCards() {
  return (
  <div>
    
      <div className='cards flex flex-col w-[95%] items-center justify-center'>
      <Link to={'/services'}>
      <div className="card flex justify-center items-center w-[90%] bg-red-500">
      <h1 className='text-white'>خدماتنا</h1>
        <img src={service} alt='cardone'/>
      </div>
      </Link>
      <div className="card flex justify-center items-center w-[90%] bg-red-500">
      <h1 className='text-white'>رعاية مستمرة</h1>
        <img src={dailyService} alt='cardone'/>
      </div>
      <Link to={'/Team'}>
      <div className="card flex justify-center items-center w-[90%] bg-red-500">
      <h1 className='text-white'>فرقنا الطبية</h1>
        <img src={teamwork} alt='cardone'/>
      </div>
      </Link>
    </div>
  </div>
  )
}

