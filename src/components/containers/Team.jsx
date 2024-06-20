import React from "react";
import {TeamData} from  "../data/TeamData";

import TeamCard from "../cards/TeamCards"


function Team() {
  return (
    <div>
  
    <TeamCard data={TeamData}/>
  
    </div>
  );
}
export default Team;
