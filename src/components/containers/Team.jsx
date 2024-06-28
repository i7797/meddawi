import React from "react";
import {TeamData} from  "../../data/TeamData";
import NavBar from "../common/NavBar";
import TeamCard from "../cards/TeamCards"
import '../../assets/css/MediaQuery.css'


function Team() {
  return (
    <div className="team flex flex-col justify-start items-center w-screen h-screen">
      <div className="w-[90%] h-[30%] lg:w-full lg:h-[20%] mt-[50px] lg:mt-0">
      <NavBar/>
      </div>
      {/* <div className="TeamCards lg:h-[90%] lg:w-full h-full lg:mt-0 flex items-baseline lg:items-center lg:justify-center mt-[50px]"> */}
      <TeamCard data={TeamData}/>
      {/* </div> */}
    
    </div>
  );
}
export default Team;
