import React from "react";
import Drawer from "../components/common/Drawer";
import "../assets/css/Style.css";
import NavBar from "../components/common/NavBar";
import Footerr from "../Footerr";
import nurse from "../assets/images/Medical care-pana.svg";
import chooes from "../assets/images/Choose-pana (1).svg";
import contact from "../assets/images/Contact us-amico.svg";
import {useTranslation} from "react-i18next"

import ourteam from "../assets/images/Health professional team-pana.svg";

const AboutUs = () => {
  const { i18n,t}=useTranslation();

  return (
    <>
      <div
        id="aboutus"
        className=" bg-blue-950 top-0 mt-0 flex justify-between lg:hidden"
      >
        <div className="lg:hidden w-10">
          <Drawer />
        </div>
        <h1 className="text-white mr-4 mt-5 font-mono"> Medawi</h1>
      </div>
      <div className=" hidden lg:block">
        <NavBar />
      </div>

      <div className=" lg:mt-40  ">
        <div className="  flex flex-col lg:flex-row mb-6 mt-10 lg:text-start text-center items-center  ">
          <div className=" mx-auto  flex-1 p-4  text center  ml-4 lg:ml-10 lg:w-1/2 w-full   font-extraligh ">
            <h1 className="text-3xl mb-4  text center font-extralight   text-gray-500 ">
            {t("Who We Are?")}
         
            </h1>
            <p className=" text-gray-500  font-extralight   w-[90%] lg:w-full   ">
            {t("Who We Are?text")}
             
             
             
            </p>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end lg:order-2 order-1">
            <img src={nurse} className=" mx-auto w-40 lg:w-[60%] lg:rounded-full" alt="Nurse" />
          </div>
        </div>
        <div className="py-12 mx-auto container">
          <div className="justify-between flex flex-col lg:flex-row lg:text-left text-center  ">
            <div className="flex-1 p-4">
              <img src={ourteam} className="mb-4 w-20 mx-auto lg:mx-0 " />
              <h3 className="text-xl mb-2 font-extralight">
                
                         {t(" Our Team !")}

                
                </h3>
              <p className=" mb-4 text-gray-500">
              {t("Our Team !text")}
               
              </p>
            </div>

            <div className="flex-1 p-4">
              <img src={chooes} className="mb-4 w-20 mx-auto lg:mx-0 " />
              <h3 className="text-xl mb-2 font-extralight">
              {t("Why Choose Us ?")}
             
                
                </h3>
              <p className=" mb-4 text-gray-500">
              {t("Why Choose Us ?text")}
                
              </p>
            </div>

            <div className="flex-1 p-4">
              <img src={contact} className="mb-4 w-20 mx-auto lg:mx-0 " />
              <h3 className="text-xl mb-2 font-extralight">
              {t("Contact us")}
              </h3>
              <p className=" mb-4 text-gray-500">
              {t("Contact ustext")}
     
              </p>
            </div>
          </div>
        </div>

        <p className="mb-6">
          <Footerr />
        </p>
      </div>
    </>
  );
};
export default AboutUs;
