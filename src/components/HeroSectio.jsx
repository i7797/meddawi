import React from "react";
import EmergencyBotton from "./bottons/EmergencyBotton";
import HomeCards from "./cards/HomeCards";
import home from "../assets/images/Nursing home-pana.svg";
export default function HeroSectio() {
  return (
    <div className="HeroCentent sm:block  justify-center items-center lg:w-full lg:h-full lg:flex">
      <img
        src={home}
        alt="homeimage" 
        className="HomeImage mb-5 lg:mt-20 lg:h-3/4 lg:w-[60%]"
      />
      <div className="TextBtn flex flex-col justify-center items-center text-center">
        <p className="HomeText mr-5 mb-5 hidden lg:block text-md lg:text-[40px] leading-[60px]">
          احنا هنا حتى نراعيك 
          <br></br> بعنايه و محبه
        </p>
        
        <EmergencyBotton />
      </div>

      <div className="cards flex flex-col   w-3/4 justify-center items-center  lg:hidden">
        <HomeCards />
      </div>
    </div>
  );
}
