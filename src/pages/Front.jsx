import React from "react";
import "../assets/css/Style.css";
import "../assets/css/MediaQuery.css";
import dealing from "../assets/images/handel.png";
import { Link } from "react-router-dom";

 function Front() {
  return (
    <>
      <div className="flex bg-blue-950 text-white h-full w-full ">
        <img className="hidden    object-cover lg:rounded-lg lg:block ml-32  lg:w-[40%] lg:p-10 " src={dealing} />
        <div className="  hidden lg:block  lg:text-center  lg:mt-32  ml-0 lg:flex-col lg:px-10 lg:mb-10">
          <h1 className=" hidden lg:block   lg:text-3xl lg:text-center   font-extralight mb-8 ">
            Dealing with love and mercy{" "}
          </h1>
          <p className="  hidden lg:block   lg:px-32 lg:text-sm font-extralight">
            We offer a wi de range of home health care services, including
            skilled nursing, physical therapy, and assistance with daily living
            activities, all tailored to meet the unique needs of each patient.
          </p>
        </div>
      </div>
    </>
  );
}
export default Front;