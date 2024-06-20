import React from "react";
import {TeamData} from  "../data/TeamData";
import NavBar from "../common/NavBar";
import TeamCard from "../cards/TeamCards"


function Team() {
  return (
    <div className="team flex flex-col justify-start items-center w-screen h-screen">
  <NavBar/>
    <TeamCard data={TeamData}/>
  
    </div>
  );
}
export default Team;
