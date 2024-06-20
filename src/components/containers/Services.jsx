import React from "react";
import {ServicesData} from  "../../data/ServiceData";

import ServiecssCard from "../cards/ServiecssCard"


function Services() {
  return (
    <div>
  
    <ServiecssCard data={ServicesData}/>
  
    </div>
  );
}
export default Services;
