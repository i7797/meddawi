import React from "react";
import service from "../../assets/images/ourserive.png";
import teamwork from "../../assets/images/team.png";
import dailyService from "../../assets/images/DailyCare.png";
import "../../assets/css/MediaQuery.css";
import "../../assets/css/Style.css";

import { Link } from "react-router-dom";
export default function HomeCards() {
  return (

    <div className="homediv lg:hidden ">
    <div className="cards     flex flex-col   items-center justify-center">
      <Link to='/services'>
        <div className="card flex justify-center items-center  bg-red-500">
          <h1 className="text-white text-sm	">خدماتنا</h1>
          <img className="homecard-image " src={service} alt="cardone" />
        </div>
      </Link>

      <Link to ="/askservice">
      <div className="card flex justify-center items-center  bg-red-500">
        <h1 className="text-white text-sm	">رعاية مستمرة</h1>
        <img src={dailyService} alt="cardone " />
      </div>
      </Link>
      
      <Link to="/team1">
        <div className="card flex justify-center items-center  bg-red-500">
          <h1 className="text-white 	">فرقنا الطبية</h1>
          <img src={teamwork} alt="cardone" />
        </div>
      </Link>
    </div>

    </div>
  );
}
