import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmergencyData from "./EmergencyData";
import ServiceData from "./ServiceData";
import admin from "../../assets/images/Nursing home-pana.svg";
import image from "../../assets/images/dashboardImage.svg";
import alarm from "../../assets/images/alarm.png";
function Dashboard() {

  const [emergencyRequests, setEmergencyRequests] = useState(0);
  const [dailyServiceRequest, setDailyServiceRequest] = useState(0);

  useEffect(() => {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:bpZzgRy-/emergencytableGet')
      .then(response => response.json())
      .then(data => setEmergencyRequests(data.length));
  }, []);

  useEffect(() => {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:bpZzgRy-/dailyserviceGet')
      .then(response => response.json())
      .then(data => setDailyServiceRequest(data.length));
  }, []);

  const [showEmergencyData, setShowEmergencyData] = useState(false);
  const [showDailyServiceData, setShowDailyServiceData] = useState(false);

  return (
    <div className="flex justify-between flex-col items-center w-screen h-screen bg-gradient-to-br from-pink-200 via-blue-900 to-blue-300 ">
      <header className=" flex items-center justify-between mb-6 w-full">
        <h1 className=" text-3xl font-blod  text-blue- ml-7">Dashboard</h1>
        <div className=" flex items-center">
          <button className="bg-gray-200 px-4 py-2 rounded mr-4 mt-4">
            Settings
          </button>
        </div>
      </header>
      <div className=" block  w-full lg:flex lg:h-[90%]  ">
        <div className="bg-white w-92 md:w-92 lg:w-64 shadow-lg flex rounded-3xl mr-3 h-[95%]  flex-col items-center py-4">
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

        <main className=" w-full flex ">
          <section className="flex w-full justify-between">
            <div className=" bg-white h-[95%] w-3/4 rounded-3xl flex flex-col"> 
              {showEmergencyData || showDailyServiceData ? (
                <div>
                  {showEmergencyData && <EmergencyData />}
                  {showDailyServiceData && <ServiceData />}
                </div>
              ) : (
                <div className="text-center">
                  <h1 className="text-xl font-bold ">
                    Hello,
                    <br />
                    Maryam & Noor
                  </h1>
                  <p className="">What we will do today?</p>
                  <img src={image} alt="welcome image" className="w-[90%] h-[60%]" />
                </div>
              )}
            </div>

            <div className="bg-white p-2 w-[20%] mr-3 h-[90%] rounded-3xl shadow-lg flex flex-col justify-evenly "> 
              <div className="bg-indigo-100 h-20 rounded-3xl flex items-center ">
                <img
                  src={alarm}
                  alt="alarm image "
                  className="h-12 w-12 mr-4"
                />
                <span className=" text-gray-700 font-semibold">
                  Emergency requests: {emergencyRequests}
                </span>
              </div>

              <div className="bg-indigo-100 h-20  rounded-3xl flex items-center">
                <img
                  src={alarm}
                  alt="alarm image "
                  className="h-12 w-12 mr-4"
                />
                <span className=" text-gray-700 font-semibold">
                  Daily service request:{dailyServiceRequest}
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
