import React from "react";
import {TeamData} from  "../../data/TeamData";
import Drawer from  "../common/Drawer";

import TeamCard from "../cards/TeamCards"
import '../../assets/css/MediaQuery.css'


function Team() {
  return (

    <>          
    <div className="lg:hidden ">
              <Drawer />
            </div>
    
            
    <div id="team" className="team flex flex-col justify-start items-center w-[100%] h-[100%]">

   
        
      <div className="w-[90%] h-[30%] lg:w-full lg:h-[20%] lg:mt-[10px] mt-10 ">
 
      </div>  

     
      <TeamCard data={TeamData}/>
    
    </div>
        
        
    </>
  );
}
export default Team;
