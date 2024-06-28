import React from "react";
import {TeamData} from  "../../data/TeamData";
import NavBar from "../common/NavBar";
import TeamCard from "../cards/TeamCards"
import '../../assets/css/MediaQuery.css'


function Team() {
  return (
    <div className="team flex flex-col justify-start items-center w-screen h-screen">
      <div className="navbar lg:w-full lg:h-[20%]">
      <NavBar/>
      </div>
      <div className="TeamCards lg:h-[90%] lg:w-full flex items-center justify-center">
      <TeamCard data={TeamData}/>
      </div>
    
    </div>
  );
}
export default Team;
