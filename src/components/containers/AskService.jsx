import React from "react";
import AskServiceForm from "../InputForm/AskServiceForm";
import NavBar from "../common/NavBar";

import nurse from "../../assets/images/nurse (1).png";

function AskService() {
  return (
    <div className=" askservice flex flex-col lg:flex-row justify-start items-center w-screen h-screen mb-40 lg:mt-[120px] mt-[60px]">
      <div>
      <NavBar />
      </div>
      <img src={nurse} alt="ambulance" className=" w-60 mt-24 lg:ml-[100px] mb-4 rounded-sm " />
      <AskServiceForm />
    </div>
  );
}
export default AskService;
