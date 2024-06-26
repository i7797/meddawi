import React from "react";
import {TeamData} from  "../../data/TeamData";
import NavBar from "../common/NavBar";
import TeamCard from "../cards/TeamCards"
import '../../assets/css/MediaQuery.css'


function Team() {
  return (
    <div className="team flex flex-col justify-start items-center w-screen h-screen lg:bg-transparent  lg:bg-opacity-0 lg:bg-none">
  <NavBar/>
    <TeamCard data={TeamData}/>
    </div>
  );
}
export default Team;
