import React, { useState } from "react";
import ServicesData from "../../data/ServiceData";
import ServiceCardFinal from "../cards/ServiceCardFinal";
import Drawer from "../common/Drawer";
import NavBar from "../common/NavBar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../Sign/AuthContext";

const FinalService = () => {
  const [data, setData] = useState(ServicesData);
  const { i18n, t } = useTranslation();
  const { currentUser } = useAuth();

  return (

    <>

<div className="bg-blue-950 top-0 mt-0 flex justify-between lg:hidden">
        <div className="lg:hidden w-10">
          <Drawer />
        </div>
        <h1 className="text-white mr-4 mt-5 font-mono"> Medawi</h1>
      </div>
    <div
      id="service"
      className="  grid grid-cols-12 w-screen justify-items-center overflow-x-hidden bg-blue-950     "
    >
      

      <div className="text-center col-span-12 mt-5 ">
        <h1 className=" text-[#181D3D] text-lg  lg:text-3xl lg:text-white font-mono mb-8 ">
          {" "}
          - {t("OurMedicalServices")} -
        </h1>
        <p className=" text-pink-400  px-11 md:px-36   lg:px-40 xl:px-60 text-center mt-2  lg:text-white md:block lg:block  xl:block ">
          {t("MedicalServicesDescription")}
        </p>
        {currentUser && (
          <Link to="/askservice">
            <button className="bg-[#2e3564]  hover:bg-[#9b9fb1]  text-white  font-bold py-2 px-4 rounded-lg mt-5 ">
              {t("Ask-The-Servive")}
            </button>
          </Link>
        )}
      </div>

      <div className=" mt-10 col-span-12 w-full grid gap-5 p-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {data.map((e, index) => (
          <ServiceCardFinal data={e} key={index} />
        ))}
      </div>
    </div>
    </>
  );
};

export default FinalService;
