import React from "react";
import AskServiceForm from "../InputForm/AskServiceForm";
import Drawer from "../common/Drawer";
import NavBar from "../common/NavBar";
import nurse from "../../assets/images/Dementia-rafiki.svg";

function AskService() {
  return (
    <>
     <div className=" lg:hidden ">
        <Drawer />
      </div>

      <div className="hidden md:block col-span-12   ">
        <NavBar />
      </div>
   
    <div className=" askservice flex flex-col lg:flex-row justify-center items-center w-screen h-screen lg:mt-[0px] ">
     
      <img
        src={nurse}
        alt="ambulance"
        className=" w-64 mb-0  md:w-64 mt-24 lg:mt-2 lg:ml-[100px]  lg:w-[40%]  rounded-3xl "
      />
      <AskServiceForm />
    </div>
    </>
  );
}
export default AskService;
