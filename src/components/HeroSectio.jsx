import React from "react";
import { Link } from "react-router-dom";
import HomeCards from "./cards/HomeCards";
import home from "../assets/images/Nursing home-pana.svg";
import {useTranslation} from "react-i18next"

export default function HeroSectio() {
  const { i18n,t}=useTranslation();

  return (
    <div className="HeroCentent sm:block  justify-center items-center lg:w-full lg:h-full lg:flex">

<div class="w-[90%]  mt-10 ml-4">
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">
  {t("Enhancing ")}
    </h2>
  <p class="text-gray-600 mb-6">
  {t("Meddawi")}

 
    {t("careMessage")}  
  </p>
<Link to='/emergency'>
<button class="flex items-center px-4 py-2 bg-gradient-to-r   from-pink-400 to-[#CA5050] text-white  rounded-xl shadow-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
{t("Emergency")} 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 ml-2">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>

</button>
</Link>
  
</div>
     
      <div className="pr-10  w-full  flex flex-col justify-center items-center text-center">
        <img
        src={home}
        alt="homeimage" 
        className="HomeImage  mb-5 lg:mt-72  lg:mb-36 lg:h-3/4 lg:w-[100%]"
      />
      </div>

      <div className="cards flex flex-col   w-3/4 justify-center items-center  lg:hidden">
        <HomeCards />
      </div>
    </div>
  );
}
