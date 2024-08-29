import React from "react";
import Drawer from "../components/common/Drawer";
import "../assets/css/Style.css";
import service from "../assets/images/Service 24_7-pana.svg";
import call from "../assets/images/Emergency call-pana (2).svg";
import nurse from "../assets/images/Medical care-pana.svg";
import chooes from "../assets/images/Choose-pana (1).svg";
import contact from "../assets/images/Contact us-amico.svg";
import { useTranslation } from "react-i18next";

import ourteam from "../assets/images/Health professional team-pana.svg";

const AboutUs = () => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="bg-blue-950 top-0 mt-0 flex justify-between lg:hidden">
        <div className="lg:hidden   w-10">
          <Drawer />
        </div>
      </div>
      {/* this first line*/}
      <div className=" lg:mt-20  ">
        <div className="  flex flex-col lg:flex-row mb-6 mt-10  text-center items-center  ">
          <div className="lg:mx-20 md:mx20 flex-1 p-4 text-center ml-4 lg:ml-10 lg:w-1/2 w-full font-extralight">
            <h1 className="text-3xl mb-4  text center font-extralight   text-gray-500 ">
              {t("Who We Are?")}
            </h1>
            <p className=" text-gray-500  font-extralight   w-[90%] lg:w-full   ">
              {t("Who We Are?text")}
            </p>
          </div>

          <div className="hidden lg:w-1/2 w-full lg:flex justify-center lg:justify-end lg:order-2 order-1">
            <img
              src={nurse}
              className="mx-auto w-40 lg:w-[60%] lg:rounded-lg"
              alt="Nurse"
            />
          </div>
        </div>

        {/* this seconed line*/}

        <div className=" ">
          <h3 className="text-xl text-center mb-7 font-extralight">
            - {t("Our Service")}-
          </h3>

          <div className="lg:flex  justify-center items-center  flex flex-col lg:flex-row lg:px-10 gap-10 lg:mb-10 ">
            <div className="  flex flex-col  lg:text-center w-[50%]">
              <div className="flex justify-center items-center">
                <img
                  className=" border-2  w-20 object-cover mb-4  mx-auto lg:mx-0  lg:rounded-lg lg:block lg:w-[40%]  lg:p-10"
                  src={call}
                />
              </div>

              <h1 className=" mt-3 text-blue-950  lg:px-16 font-extralight ">
                {t("Nursing Care")}
              </h1>
              <p className="lg:w-full mt-10 text-gray-500 ">
                {t("Nursing Caretext")}
              </p>
            </div>

            <div className="   flex flex-col lg:text-center  w-[50%]">
              <div className=" flex justify-center items-center">
                <img
                  className="  border-2 w-20 object-cover justify-center items-center   mx-auto m-auto lg:mx-0 lg:rounded-lg lg:flex lg:w-[40%] lg:p-10"
                  src={service}
                />
              </div>

              <h1 className="mt-5 text-blue-950  lg:px-16 font-extralight ">
                {t("24hour")}
              </h1>
              <p className="lg:w-full mt-10 text-gray-500  ">
                {t("24hourtext")}
              </p>
            </div>
          </div>

          <div className="py-12 mx-auto container">
            <div className="justify-between flex flex-col lg:flex-row lg:text-left text-center  ">
              <div className="flex-1 p-4">
                <img src={ourteam} className="mb-4 w-20 mx-auto lg:mx-0 " />
                <h3 className="text-xl mb-2 font-extralight">
                  {t(" Our Team !")}
                </h3>
                <p className=" mb-4 text-gray-500">{t("Our Team !text")}</p>
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
                <p className=" mb-4 text-gray-500">{t("Contact ustext")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
