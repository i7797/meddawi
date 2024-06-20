import React from 'react'
import '../assets/css/Style.css'
import '../assets/css/MediaQuery.css'
import home from '../assets/images/homeSvg.svg'
import EmergencyBotton from '../components/bottons/EmergencyBotton'
import HomeCards from '../components/cards/HomeCards'
import NavBar from '../components/common/NavBar'
export default function Home() {
  return (
    <div className='Home flex flex-col justify-center items-center w-screen h-screen'>
      <NavBar/>
     <div className="content">
     <div className='ImgBtn'>
      <p className='HomeText invisible'>أحنا هنا حتى نراعيك بعناية ومحبة</p>
      <EmergencyBotton />
      </div>
     <img src={home} alt='homeimage' className='HomeImage'/>
     </div>
     <HomeCards  />
    </div>
  )
}
