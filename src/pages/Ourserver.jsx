import React from "react";
import "../assets/css/Style.css";
import "../assets/css/MediaQuery.css";
import service from "../assets/images/Service 24_7-pana.svg";
import call from "../assets/images/Emergency call-pana (2).svg";

import { Link } from "react-router-dom";

function Ourserver() {
  return (
    <>
    <div className="">
      <h1 className=" hidden  lg:block lg:mt-30  py-5 lg:text-3xl lg:text-center   font-extralight mb-8 ">
        - Our Service -{" "}
      </h1>
      <div className="   ">
        <div className="  hidden lg:flex  lg:text-start   ml-0 lg:px-10 lg:mb-10">

            <div className=" flex flex-col">
        <img className="hidden    object-cover lg:rounded-lg lg:block ml-32  lg:w-[40%] lg:p-10 " src={service} />

            <h1 className="m-10  px-36 font-bold">
              24-Hour Continuous Care for Chronic Patients and the Disabled:
            </h1>
            <p className="m-10 px-36">
            We provide specialized and continuous healthcare around the clock
            for individuals with chronic conditions or disabilities. This
            service is designed to ensure that patients receive the support and
            care they need every moment of the day. Our team of healthcare
            professionals consists of highly qualified and experienced nurses
            who are capable of meeting all the patients' health needs, whether
            related to medical treatment, daily care, or psychological support.
            We believe that every patient deserves the highest level of care,
            especially those who require long-term or intensive care due to
            their health conditions. That’s why we tailor individual care plans
            for each patient, focusing on providing a comfortable and safe
            environment that enhances their comfort and well-being.
            </p>
            </div>
            <div className=" flex flex-col">

            <img className="hidden    object-cover lg:rounded-lg lg:block ml-32  lg:w-[50%] lg:p-10 " src={call} />

            <h1 className="m-10  px-36  font-bold">Nursing Care for Emergency Cases:</h1>
            <p className="m-10  px-36">
            We provide specialized nursing care for emergency
            cases. In times of crisis, a rapid and accurate response is vital
            for saving lives and maintaining health. Our team of highly trained
            nurses is always available to respond immediately to any emergency
            situation. We use the latest technologies and medical tools to
            ensure the best possible care is delivered as quickly as possible.
            Whether the care required is for a patient with a chronic condition
            or an emergency case, our goal is to provide comprehensive and
            continuous support to ensure the best possible health outcomes.
          </p>
        </div>
        </div> 
      </div>
      </div>
    </>
  );
}
export default Ourserver;
