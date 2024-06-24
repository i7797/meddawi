import React from "react";
import {ServicesData} from  "../../data/ServiceData";
import NavBar from "../common/NavBar";
import ServiecssCard from "../cards/ServiecssCard"
import '../../assets/css/MediaQuery.css'

function Services() {
  return (
    <div className="service flex flex-col justify-start items-center w-screen h-screen lg:bg-none bg-[#181D3D]">
      <div className="navbar lg:w-full">
        <NavBar/>
      </div>
      <div className="text text-white text-[25px] text-center flex flex-col justify-center items-center">
        <h2>خدماتنا الطبية</h2>
        <div className="line hidden lg:block border lg:bg-[#CA5050] lg:w-[10%]"></div>
        <p>خدماتنا تشمل رعاية تمريضية محترفة ورعاية صحية مستمرة على مدار الساعة، مع استجابة سريعة <br/> وفعالة لحالات الطوارئ لضمان صحة وسلامة مرضانا في كل الأوقات.</p>
      </div>
   <div className="Servicecards flex w-full justify-center items-center">
   <ServiecssCard data={ServicesData}/>
   </div>
  
    </div>
  );
}
export default Services;
