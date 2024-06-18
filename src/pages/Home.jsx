import React from 'react'
import '../assets/css/Style.css'
import home from '../assets/images/homeSvg.svg'
import EmergencyBotton from '../components/bottons/EmergencyBotton'
import HomeCards from '../components/cards/HomeCards'
export default function Home() {
  return (
    <div className='Home flex flex-col justify-center items-center w-screen h-screen'>
      <img src={home} alt='homeimage'/>
      <EmergencyBotton />
      <HomeCards/>
    </div>
  )
}
