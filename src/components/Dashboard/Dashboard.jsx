import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmergencyData from "./EmergencyData";
import ServiceData from "./ServiceData";
import admin from "../../assets/images/user (4).png";
import image from "../../assets/images/dashboardImage.svg";
import alarm from "../../assets/images/alarm.png";
import DailyCare from "../../assets/images/DailyCare.png";
function Dashboard() {
  const [showEmergencyData, setShowEmergencyData] = useState(false);
  const [showDailyServiceData, setShowDailyServiceData] = useState(false);

  return (
    <div className="bg-gradient-to-br from-pink-200 via-blue-900 to-blue-300">
      <header className=" flex items-center justify-between mb-6">
        <h1 className=" text-3xl font-blod  text-blue- ml-7">Dashboard</h1>
        <div className=" flex items-center">
          <button className="bg-gray-200 px-4 py-2 rounded mr-4 mt-4">
            Settings
          </button>
        </div>
      </header>
      <div className=" block   lg:flex lg:h-screen   ">
        <div className="bg-white w-92 md:w-92 lg:w-64 shadow-lg flex rounded-3xl m-4  flex-col items-center py-4">
          <h1 className="font-extrabold mb-4 text-blue-900 text-2xl">
            MEDDAWI
          </h1>
          <div className="w-24 h-24 bg-gray-300 rounded-full flex justify-center items-center mb-6">
            <img src={admin} alt="admin image" className="w-40" />
          </div>

          <nav className="flex flex-col w-full">
            <div className="text-center block">
              <Link
                to="/"
                className=" py-2 px-4  w- bg-slate-500 text-white w-40 mt-10 hover:bg-gray-200 rounded"
              >
                Patient Home Page
              </Link>
              <br />
              <br />
              <Link
                to="/nurse"
                className="py-2 px-4 bg-slate-500 text-white w-44 mt-5 hover:bg-gray-200 rounded"
              >
                Nurse Home Page
              </Link>
              <br />
              <br />
              <button
                className="bg-blue-900  text-white py-2 px-4 rounded w-44  mt-5 "
                onClick={() => setShowEmergencyData(!showEmergencyData)}
              >
                
                {showEmergencyData
                  ? "Hide Emergency Data"
                  : "Show Emergency Data"}
              </button>
              <br />
              <br />
              <button
                className="bg-blue-900  text-white py-2 px-4 rounded w-44 "
                onClick={() => setShowDailyServiceData(!showDailyServiceData)}
              >
                {showDailyServiceData
                  ? "Hide Daily Service Data"
                  : "Show Daily Service Data"}
              </button>
            </div>
          </nav>
        </div>

        <main className="block lg:flex-1 p-6">
          <section className="space-y-5 md:grid md:grid-cols-2 md:gap-6  mt-10 lg:grid lg:grid-cols-2 lg:gap-6 mb-6">
            <div className=" bg-white p-6 rounded-3xl  shadow-lg">
              {showEmergencyData || showDailyServiceData ? (
                <div>
                  {showEmergencyData && <EmergencyData />}
                  {showDailyServiceData && <ServiceData />}
                </div>
              ) : (
                <div className="text-center">
                  <h1 className="text-xl font-bold mb-4">
                    Hello,
                    <br />
                    Maryam & Noor
                  </h1>
                  <p className="mb-4">What we will do today?</p>
                  <img src={image} alt="welcome image" className="w-full" />
                </div>
              )}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg space-y-10 ">
              <div className="bg-indigo-100 p-6  rounded-3xl flex items-center">
                <img
                  src={alarm}
                  alt="alarm image "
                  className="h-16 w-16 mr-4"
                />
                <span className=" text-gray-700 font-semibold">
                  Emergency request
                </span>
              </div>

              <div className="bg-indigo-100 p-6  rounded-3xl flex items-center">
                <img
                  src={alarm}
                  alt="alarm image "
                  className="h-16 w-16 mr-4"
                />
                <span className=" text-gray-700 font-semibold">
                  Daily service request
                </span>
              </div>

              <div className="bg-indigo-100 p-6  rounded-3xl flex items-center">
                <img
                  src={alarm}
                  alt="alarm image "
                  className="h-16 w-16 mr-4"
                />
                <span className=" text-gray-700 font-semibold">
                  {" "}
                  patien login
                </span>
              </div>

              <div className="bg-indigo-100 p-6  rounded-3xl flex items-center">
                <img
                  src={alarm}
                  alt="alarm image "
                  className="h-16 w-16 mr-4"
                />
                <span className=" text-gray-700 font-semibold">
                  {" "}
                  nurse login
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
