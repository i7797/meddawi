import React, { useState } from "react";
import ServicesData from "../../data/ServiceData";
import ServiceCardFinal from "../cards/ServiceCardFinal";
import Drawer from  "../common/Drawer";
import NavBar from "../common/NavBar";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next"


const FinalService = () => {
  const [data, setData] = useState(ServicesData);
  const { i18n,t}=useTranslation();

  return (
    
      <div   id="service" className="  grid grid-cols-12 w-screen justify-items-center overflow-x-hidden md:bg-[#181D3D] lg:bg-[#181D3D]    ">
      
        
    

      <div className="lg:hidden ">
          <Drawer />
        </div>

        
        
        <div className="text-center col-span-12 mt-5 ">
          <h1 className="text-white text-3xl ">  {t("OurMedicalServices")} </h1>
            <p className="hidden px-4 text-center mt-2  text-white md:block lg:block  xl:block ">

              {t("MedicalServicesDescription")}
              
            </p>
            <Link to="/askservice">
              <button className="bg-[#7980a8]  hover:bg-[#2e3564]  text-white  font-bold py-2 px-4 rounded-lg mt-5 ">
                {t("Ask-The-Servive")}
              </button>
            </Link>
          
        </div>

        <div className=" mt-10 col-span-12 w-full grid gap-5 p-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((e, index) => (
            <ServiceCardFinal data={e} key={index} />
          ))}
        </div>


      </div>
    
  );
};

export default FinalService;
