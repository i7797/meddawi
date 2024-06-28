import React from "react";
import{Link} from 'react-router-dom'
import {ServicesData} from  "../../data/ServiceData";
import NavBar from "../common/NavBar";
import ServiecssCard from "../cards/ServiecssCard"
import '../../assets/css/MediaQuery.css'
import'../../assets/css/MediaQuery.css'
function Services() {
  return (
    <div className="container flex flex-col justify-start items-center w-screen h-screen lg:bg-none bg-[#181D3D] ">
      <div className="navbar flex w-full items-center justify-center lg:w-full">
       <NavBar/>
      </div>
      <div className="text text-white text-[25px] text-center flex flex-col justify-center items-center ">
        <h2 className=" mt-10 hidden lg:block">خدماتنا الطبية</h2>
        <div className="line hidden lg:block border lg:bg-[#CA5050] lg:w-[10%]"></div>
        <p className="hidden lg:block">خدماتنا تشمل رعاية تمريضية محترفة ورعاية صحية مستمرة على مدار الساعة، مع استجابة سريعة <br/> وفعالة لحالات الطوارئ لضمان صحة وسلامة مرضانا في كل الأوقات.</p>
        <Link  to="/askservice">  <button className='bg-red-400 rounded-lg  h-[37%] text-xs text-center	  text-white w-[45%]	lg:hidden '> طلب خدمه الرعاية المستمرة  </button>  </Link>
      </div> 
   
    <ServiecssCard data={ServicesData}/>

  
    </div>
  );
}
export default Services;