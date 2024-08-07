import React from "react";
import AskServiceForm from "../InputForm/AskServiceForm";
import Drawer from "../common/Drawer";
import NavBar from "../common/NavBar";
import nurse from "../../assets/images/nurse (1).png";

function AskService() {
  return (
    <>
     <div className=" lg:hidden ">
        <Drawer />
      </div>

      <div className="hidden md:block col-span-12   ">
        <NavBar />
      </div>
   
    <div className=" askservice flex flex-col lg:flex-row justify-start items-center w-screen h-screen  lg:mt-[0px] ">
     
      <img
        src={nurse}
        alt="ambulance"
        className=" w-60 mt-24 lg:ml-[100px] mb-4 rounded-3xl "
      />
      <AskServiceForm />
    </div>
    </>
  );
}
export default AskService;
