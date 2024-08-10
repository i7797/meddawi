import React from "react";
import {TeamData} from  "../../data/TeamData";
import Drawer from  "../common/Drawer";
import NavBar from "../common/NavBar";import TeamCard from "../cards/TeamCards"
import '../../assets/css/MediaQuery.css'


function Team() {
  return (

    <>          
    <div className="lg:hidden ">
              <Drawer />
            </div>
    
            <div className="hidden md:block col-span-12 lg:hidden   ">
              <NavBar />
            </div>
    <div id="team" className="team flex flex-col justify-start items-center w-[100%] h-[100%]">

   
        
      <div className="w-[90%] h-[30%] lg:w-full lg:h-[20%] mt-[150px] lg:mt-0">
 
      </div>
      {/* <div className="TeamCards lg:h-[90%] lg:w-full h-full lg:mt-0 flex items-baseline lg:items-center lg:justify-center mt-[50px]"> */}
      <TeamCard data={TeamData}/>
      {/* </div> */}
    
    </div>
        
        
    </>
  );
}
export default Team;
