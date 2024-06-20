import React from 'react'
import Drawer from '../common/Drawer'
import NavBar from '../common/NavBar'
import ambulance from '../../assets/images/ambulance.png'
import EmergencyForm from '../InputForm/EmergencyForm'
// import '../../assets/css/Style.css'
export default function EmergencyContainer() {
  return (
    <div className="EmergencyContainer flex flex-col justify-start items-center w-screen h-screen">
        <Drawer className='fill-white'/>
        <NavBar/>
        <img src={ambulance} alt='ambulance' className='mt-[35px] mb-4'/>
        <EmergencyForm/>
    </div>
  )
}
