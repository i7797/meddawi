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
    <div className="cards     flex flex-col   items-center justify-center">
      <Link to='/services'>
        <div className="card flex justify-center items-center  bg-red-500">
          <h1 className="text-white  ">{t("Services")}</h1>
          <img className="px-4 py-4 " src={service} alt="cardone" />
        </div>
      </Link>

      <Link to ="/askservice">
      <div className="card flex justify-center items-center  bg-red-500">
        <h1 className="text-white "> {t( "Ongoing Care")}</h1>
        <img className="px-4 py-4 "  src={dailyService} alt="cardone " />
      </div>
      </Link>
      
      <Link to="/team1">
        <div className="card flex justify-center items-center  bg-red-500">
          <h1 className="text-white 	"> {t("Team")}</h1>
          <img  className="px-4 py-4 " src={teamwork} alt="cardone" />
        </div>
      </Link>
    </div>

    </div>
  );
}
