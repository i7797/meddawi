import React from 'react'
import Drawer from '../common/Drawer'
import NavBar from '../common/NavBar'
import ambulance from '../../assets/images/ambulance.png'
import EmergencyForm from '../InputForm/EmergencyForm'
import '../../assets/css/MediaQuery.css'

// import '../../assets/css/Style.css'
export default function EmergencyContainer() {
  return ( 
    <>
     <div className="lg:hidden ">
        <Drawer />
      </div>

      <div className="hidden md:block col-span-12   ">
        <NavBar />
      </div>
    <div className="EmergencyContainer flex flex-col  items-center w-full h-full ">
       
      <div className="ImageFormEmergency w-[100%] flex flex-col items-center justify-center mt-[60px] lg:mt-[120px] lg:flex-row lg:w-full">
      <img src={ambulance} alt='ambulance' className='mt-[35px] mb-4 w-[75%] lg:w-1/4 lg:h-[80%]'/>
      <EmergencyForm/>
      </div>
    </div>
    </>
  )
}

