import React from 'react'
import Drawer from '../common/Drawer'
import NavBar from '../common/NavBar'
import ambulance from '../../assets/images/ambulance.png'
import EmergencyForm from '../InputForm/EmergencyForm'
import '../../assets/css/MediaQuery.css'

// import '../../assets/css/Style.css'
export default function EmergencyContainer() {
  return (
    <div className="EmergencyContainer flex flex-col justify-start items-center w-[100%] h-[screen]">
      <div className="Drawer flex flex-col justify-center items-center w-[100%]">
      <Drawer className=' fill-white '/>
       <NavBar/>
       </div>
      <div className="ImageFormEmergency w-[100%] flex flex-col items-center justify-center">
      <img src={ambulance} alt='ambulance' className='mt-[35px] mb-4 w-[75%]'/>
      <EmergencyForm/>
      </div>
      
    </div>
  )
}

