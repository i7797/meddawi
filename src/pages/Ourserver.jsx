import React from "react";
import "../assets/css/Style.css";
import "../assets/css/MediaQuery.css";
import service from "../assets/images/Service 24_7-pana.svg";
import call from "../assets/images/Emergency call-pana (2).svg";
import {useTranslation} from "react-i18next"


function Ourserver() {
  const { i18n,t}=useTranslation();

  return (
    <>
    <div className="">
      <h1 className=" hidden  lg:block lg:mt-30  py-5 lg:text-3xl lg:text-center   font-extralight mb-8 ">
        -  {t("Our Service")} -{" "}
      </h1>
      <div className="   ">
        <div className="  hidden lg:flex  lg:text-    ml-0 lg:px-10 lg:mb-10">

            <div className=" flex flex-col">
        <img className="hidden    object-cover lg:rounded-lg lg:block ml-32  lg:w-[40%] lg:p-10 " src={service} />

            <h1 className="m-2 text-blue-950  lg:text-center px-16 font-bold">
            {t("24hour")}
            </h1>
            <p className="m-10  lg:w-full text-blue-950  lg:px-16  lg:text-start ">

            {t("24hourtext")}

         
            </p>
            </div>
            <div className=" flex flex-col">

            <img className="hidden    object-cover lg:rounded-lg lg:block ml-32  lg:w-[50%] lg:p-10 " src={call} />

            <h1 className="m-2 text-blue-950  lg:text-center px-16 font-bold">
            {t("Nursing Care")}

              </h1>
            <p className=" lg:w-full m-10 text-blue-950  lg:text-start lg:px-16">
            {t("Nursing Caretext")}
          </p>
        </div>
        </div> 
      </div>
      </div>
    </>
  );
}
export default Ourserver;
