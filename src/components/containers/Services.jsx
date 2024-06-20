import React from "react";
import {ServicesData} from  "../../data/ServiceData";
import NavBar from "../common/NavBar";
import ServiecssCard from "../cards/ServiecssCard"


function Services() {
  return (
    <div className="service flex flex-col justify-start items-center w-screen h-screen">
    <NavBar/>
    <ServiecssCard data={ServicesData}/>
  
    </div>
  );
}
export default Services;
