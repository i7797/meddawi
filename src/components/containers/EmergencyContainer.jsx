import React from 'react'
import Drawer from '../common/Drawer'
import NavBar from '../common/NavBar'
import ambulance from '../../assets/images/ambulance.png'
import EmergencyForm from '../InputForm/EmergencyForm'
import '../../assets/css/MediaQuery.css'

// import '../../assets/css/Style.css'
export default function EmergencyContainer() {
  return (
    <div className="EmergencyContainer flex flex-col  items-center w-full h-full ">
      <div className="drawer hidden">
      <Drawer className=' fill-white '/>
      </div>
      <div className="navbar flex justify-center w-full mt-[60px]">
      <NavBar/>
      </div>
      <div className="ImageFormEmergency w-[100%] flex flex-col items-center justify-center">
      <img src={ambulance} alt='ambulance' className='mt-[35px] mb-4 w-[75%]'/>
      <EmergencyForm/>
      </div>
    </div>
  )
}

