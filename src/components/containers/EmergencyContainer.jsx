import React from 'react'
import Drawer from '../common/Drawer'
import NavBar from '../common/NavBar'
import ambulance from '../../assets/images/ambulance.png'
import EmergencyForm from '../InputForm/EmergencyForm'
import '../../assets/css/MediaQuery.css'
// import '../../assets/css/Style.css'
export default function EmergencyContainer() {
  return (
    <div className="EmergencyContainer flex flex-col justify-start items-center w-screen h-screen">
      <div className="Drawer">
      <Drawer className=' fill-white '/>
      </div>
        
        <NavBar/>
       <div className="EmergencyContent">
       <img src={ambulance} alt='ambulance' className='lg:w-[40%] mt-[35px] mb-4'/>
       <div className="line hidden lg:block lg:w-1 bg-[#CA5050] bg:h-[60vh] bg:mr-[50px]"></div>
       <EmergencyForm/>
       </div>
    </div>
  )
}
