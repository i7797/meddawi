import React from "react";
import {TeamData} from  "../../data/TeamData";
import Drawer from  "../common/Drawer";

import TeamCard from "../cards/TeamCards"
import '../../assets/css/MediaQuery.css'
import {useTranslation} from "react-i18next"



function Team() {
  const { i18n,t}=useTranslation();

  return (

    <>          
   <div className="bg-blue-950 top-0 mt-0 flex justify-between lg:hidden">
        <div className="lg:hidden w-10">
          <Drawer />
        </div>
        <h1 className="text-white m-3 font-extralight"> Medawi</h1>
      </div>
            
    <div id="team" className="team flex flex-col justify-start items-center w-[100%] h-[100%]">

   
        
      <div className="w-[90%] h-[30%] lg:w-full lg:h-[20%] lg:mt-[10px] mt-10 ">
 
      </div>  
          <h1 className=" font-extralight text-xl text-blue-950 mb-10"> - {t("ourteam")} - </h1>
          <p className= " w-[90%] lg:w-[80%]    text-blue-950 text-center px-10 lg:px-52 mb-16  font-extralight" >
          {t("teamp")}
          </p>
     
      <TeamCard data={TeamData}/>
    
    </div>
        
        
    </>
  );
}
export default Team;
