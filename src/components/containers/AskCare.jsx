import React from "react";
import AskCareForm from "../InputForm/AskCareForm";
import NavBar from "../common/NavBar";

import user1 from "../../assets/images/user (2).png";

function AskService() {
  return (
    <div className=" askcare flex flex-col justify-start items-center w-screen h-screen mb-40 ">
      <NavBar />
      <img src={user1} alt="askcare" className="mt-20 mb-4 w-64 rounded-sm " />
      <AskCareForm />
    </div>
  );
}
export default AskService;
