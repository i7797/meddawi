import React from "react";
import {TeamData} from  "../../data/TeamData";
import NavBar from "../common/NavBar";
import TeamCard from "../cards/TeamCards"
import '../../assets/css/MediaQuery.css'


function Team() {
  return (
    <div className="team flex flex-col justify-start items-center w-screen h-screen">
      <div className="navbar lg:w-full">
      <NavBar/>
      </div>
      <div className="TeamCards">
      <TeamCard data={TeamData}/>
      </div>
    
    </div>
  );
}
export default Team;
