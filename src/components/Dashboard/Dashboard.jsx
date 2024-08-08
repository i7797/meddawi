import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmergencyData from './EmergencyData'
import admin from '../../assets/images/user.png'
import image from '../../assets/images/dashboardImage.svg'
import alarm from '../../assets/images/alarm.png'
import DailyCare from '../../assets/images/DailyCare.png'
function Dashboard() {
  const [showEmergencyData, setShowEmergencyData] = useState(false);
  const [showDailyServiceData, setShowDailyServiceData] = useState(false);

  return (
 <div className='flex w-screen h-screen bg-black '>
    <div className='dashboardContent flex bg-red-300 w-full'>
       <aside className='bg-white w-1/4 h-full items-center justify-evenly flex flex-col'>
       <h1 className='font-extrabold text-2xl'>MEDDAWI</h1>
       <div className='w-[60%] h-1/4 bg-black rounded-full flex justify-center items-center'>
       <img src={admin} alt='admin image' className='w-3/4 ml-[15px]' />
       </div>
      
         <Link to='/home'>Patient Home Page</Link>
         <Link to='/home'>Nurse Home Page</Link>
         <button 
            className='bg-red-200 h-[10%] w-[80%] rounded-full' 
            onClick={() => setShowEmergencyData(!showEmergencyData)}
          >
            {showEmergencyData ? 'Hide Emergency Data' : 'Show Emergency Data'}
          </button>
          
          <button 
            className='bg-red-200 h-[10%] w-[80%] rounded-full' 
            onClick={() => setShowDailyServiceData(!showDailyServiceData)}
          >
            {showDailyServiceData ? 'Hide Daily Service Data' : 'Show Daily Service Data'}
          </button>

       </aside>
       <div className='dashboardData bg-blue-300 flex flex-col justify-start h-full  w-full gap-3'>
       <div>
       <h1 className='font-extrabold text-2xl'>Dashboard</h1>
       </div>
       <div className='flex  justify-evenly bg-red w-full h-3/4 '>
        <div className='textDev flex justify-center bg-white rounded-3xl w-1/2 h-full'>
         <div className='helloSection w-full flex flex-col justify-center items-start'>
         {showEmergencyData && (
          
          <div className='mt-4 flex flex-col justify-center items-start'>
            
             <h1 className='hidden text-[30px] font-extrabold'>Hello,<br/>Maryam & Noor</h1>
             <h4 className='hidden'>What we will do today?</h4>
             <div className='hidden w-1/2 h-full'>
                <img src={image} alt='welcome image' className='h-full'/>   
             </div>
            <EmergencyData />
          </div>
           )}
           {
            !showEmergencyData&&(
              <div className='w-full flex flex-col justify-start items-center h-full'>
              <div className='flex flex-col items-center w-full h-[25%]'>
              <h1 className=' text-[30px] font-extrabold'>Hello,<br/>Maryam & Noor</h1>
              <h4 className=''>What we will do today?</h4>
              </div>
              <div className='w-full h-[75%] self-center'>
                <img src={image} alt='welcome image' className='h-full'/>   
             </div>
              </div>
            )
           }
         </div>
        </div>
        <div className='notification flex flex-col justify-start items-center  w-1/4 h-full rounded-3xl'>
         <div className='bg-blue-400 w-full h-[40%] flex flex-col justify-evenly items-center rounded-3xl'>
            <h3>Notifications</h3>
            <div><h5>some text</h5></div>
            <div><h5>some text</h5></div>
         </div>
        <div className='cardDashboard w-full  h-[30%] flex justify-evenly flex-wrap mt-3'>
        <div className='flex justify-evenly  rounded-3xl w-[45%]  items-center h-[60%] bg-gray-200 mb-2'>
          <div className='h-1/2 w-1/2'>
            <img src={alarm} alt='alarm image ' className='h-1/2 w-1/2'/>
          </div>
          <h6>Emergency request</h6>
        </div>
        <div className='flex  rounded-3xl w-[45%] items-center h-[60%] bg-gray-200'>
          <div className='h-1/2 w-1/2'>
            <img src={DailyCare} alt='alarm image ' className='h-1/2 w-1/2'/>
          </div>
          <h6>Daily service request</h6>
        </div>
        <div className='flex justify-around rounded-3xl w-[45%] items-center h-[60%] bg-gray-200'>
          <div className='h-1/2 w-1/2'>
            <img src={alarm} alt='alarm image ' className='h-1/2 w-1/2'/>
          </div>
          <h6>patien login</h6>
        </div>
        <div className='flex justify-around rounded-3xl w-[45%]  h-[60%] bg-gray-200'>
          <div className='h-1/2 w-1/2'>
            <img src={alarm} alt='alarm image ' className='h-1/2 w-1/2'/>
          </div>
          <h6>nurse login</h6>
        </div>
      </div>
          
      </div>
      
       </div>
     
         {/* <div className='EmergencyData&serviceData  flex flex-col items-center w-1/2 bg-yellow-200 gap-3'>
          <div className='EmergecyData bg-red-800 h-1/2 w-[90%] rounded-xl mt-3'>
            <h1>devone</h1>
          </div>
          <div className='EmergecyData bg-red-800 flex h-1/2 w-[90%] rounded-3xl mt-3'>
          <h1>devTwo</h1>
          </div>
         </div>
         <div className='bg-green-300 w-1/2 flex flex-col items-center gap-3'>
          <div className=' bg-gray-300 h-1/2 w-[90%] rounded-3xl mt-3'>
             <h1>this is dev one of second column</h1>
          </div>
          <div className='bg-gray-300 h-1/2 w-[90%] rounded-3xl mt-3'>
             <h1>this is dev two of second column</h1>
          </div>
         </div> */}
       </div>
    </div>
 </div>
  )
}

export default Dashboard
