import React from "react";
import "../assets/css/Style.css";
import "../assets/css/MediaQuery.css";
import dealing from "../assets/images/handel.png";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next"

 function Front() {
  const { i18n,t}=useTranslation();

  return (
    <>
      <div className="flex bg-blue-950 text-white h-full w-full ">
        <img className="hidden    object-cover lg:rounded-lg lg:block ml-32  lg:w-[40%] lg:p-10 " src={dealing} />
        <div className="  hidden lg:block  lg:text-center  lg:mt-32  ml-0 lg:flex-col lg:px-10 lg:mb-10">
          <h1 className=" hidden lg:block   lg:text-3xl lg:text-center   font-extralight mb-8 ">
          {t("Dealing")}
            
          </h1>
          <p className="  hidden lg:block   lg:px-32 lg:text-sm font-extralight">
          {t("Dealingdesc")}

          </p>
        </div>
      </div>
    </>
  );
}
export default Front;