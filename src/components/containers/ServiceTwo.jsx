import React, { useState } from 'react'
import NavBar from '../common/NavBar'
import ServiecssCard from '../cards/ServiecssCard'
import ServicesData from  "../../data/ServiceData";
import'../../assets/css/MediaQuery.css'
import { Link } from 'react-router-dom';
export default function ServiceTwo() {
    const [data , setData] = useState(ServicesData)
  return (
    <div className='servicesContainer lg:bg-[#181D3D] h-screen w-screen'>
     <div className=' w-full bg-none lg:hidden flex flex-col justify-center items-center h-[20%] mb-8'>
        <NavBar />
        {/* <div className=' flex justify-center items-center w-full h-[10%]'> */}
      <Link  to={`/service/${data.id}`}>  <button className='bg-red-400 rounded-[20px] mt-3 h-[50px] text-xl text-center text-white w-[248px]	 '> طلب خدمه الرعاية المستمرة  </button>  </Link>
      {console.log(data.id)}
     </div>
     <div className="hidden  text text-white text-[25px] text-center lg:flex lg:flex-col lg:justify-center lg:items-center ">
        <h2 className=" mt-10 hidden lg:block">خدماتنا الطبية</h2>
        <div className="line hidden lg:block border lg:bg-[#CA5050] lg:w-[10%]"></div>
        <p className="hidden lg:block">خدماتنا تشمل رعاية تمريضية محترفة ورعاية صحية مستمرة على مدار الساعة، مع استجابة سريعة <br/> وفعالة لحالات الطوارئ لضمان صحة وسلامة مرضانا في كل الأوقات.</p>
       
      </div> 
    
    
     <div className=" flex w-[85%] mr-auto ml-auto h-full flex-col gap-3 lg:flex-row lg:w-full lg:justify-center  lg:mr-[10px] lg:ml-3  ">
        {
            data.map((e,index)=>(<ServiecssCard data={e} key={index}/>))
        }
        </div>
     </div>
   
  )
}
