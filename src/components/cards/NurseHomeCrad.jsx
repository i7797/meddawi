import React from "react";
import "../../assets/css/MediaQuery.css";
import "../../assets/css/Style.css";
import { Link } from "react-router-dom";
export default function NurseHomeCards() {
  return (
    <div className=" flex flex-col   items-center justify-center">
      <Link to='/nurseteam'>
        <div className=" flex justify-center items-center w-80 h-24 rounded-3xl mt-10 mb-10 bg-blue-900">
          <h1 className="  text-xl text-white		">فرقنا</h1>
        </div>
      </Link>

      <Link to ='nurseprofile'>
      <div className=" flex justify-center items-center w-80 h-24 rounded-3xl mt-10 mb-10 bg-blue-900">
        <h1 className=" text-xl text-white	">بروفايل </h1>
      </div>
      </Link>
      
      <Link to='/nursepost'>
        <div className=" flex justify-center items-center  w-80 h-24 rounded-3xl mt-10 mb-10 bg-blue-900">
          <h1 className="  text-xl text-white		"> نشر بوست</h1>
        </div>
      </Link>
    </div>
  );
}
