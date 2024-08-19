import React from "react";
import service from "../../assets/images/health.png";
import teamwork from "../../assets/images/community-team.png";
import dailyService from "../../assets/images/screening.png";
import "../../assets/css/MediaQuery.css";
import "../../assets/css/Style.css";
import {useTranslation} from "react-i18next"


import { Link } from "react-router-dom";
export default function HomeCards() {
  const { i18n,t}=useTranslation();

  return (

    <div className="homediv lg:hidden ">
    <div className="cards  flex flex-col text-xl text-center  gap-8 ">
      <Link to='/services'>

        <div className="card bg-gray-500   justify-between rounded-3xl ">

        <img className="px-4 py-4 " src={service} alt="cardone" />

          <h1 className="text-white  px-4 py-4  ">{t("Services")}</h1>

        </div>
      </Link>

      <Link to ="/askservice">
      <div className="card bg-gray-500   justify-between rounded-3xl ">
      <img className="px-4 py-4  "  src={dailyService} alt="cardone " />

        <h1 className="text-white px-4 py-4  "> {t( "Ongoing Care")}</h1>
      </div>
      </Link>
      
      <Link to="/team1">
      <div className="card bg-gray-500   justify-between rounded-3xl ">
      <img  className="px-4 py-4  " src={teamwork} alt="cardone" />

          <h1 className="text-white px-4 py-4 	"> {t("Team")}</h1>
        </div>
      </Link>
    </div>

    </div>
  );
}
