import React, { useState } from "react";
import ServicesData from "../../data/ServiceData";
import ServiceCardFinal from "../cards/ServiceCardFinal";
import NavBar from "../common/NavBar";
import { Link } from "react-router-dom";

const FinalService = () => {
  const [data, setData] = useState(ServicesData);

  return (
    
      <div className=" grid grid-cols-12 w-screen justify-items-center overflow-x-hidden md:bg-[#181D3D] lg:bg-[#181D3D]    ">
        <div
          id="service"
          className="w-[90%]  mt-[50px] lg:mt-0 lg:hidden xl:hidden">
          <NavBar />
        </div>

        <div className="text-center col-span-12 mt-5 ">
          <h1 className="text-white text-3xl"> خدماتنا الطبية </h1>
            <p className="hidden mt-2 text-white md:block lg:block  xl:block ">
              خدماتنا تشمل رعاية تمريضية محترفة ورعاية صحية مستمرة على مدار
              الساعة، مع استجابة سريعة
              <br />
              وفعالة لحالات الطوارئ لضمان صحة وسلامة مرضانا في كل الأوقات.
            </p>
            <Link to="/askservice">
              <button className="bg-[#7980a8]  hover:bg-[#2e3564]  text-white  font-bold py-2 px-4 rounded-lg mt-5 ">
                {" "}
                اطلب الخدمة{" "}
              </button>
            </Link>
          
        </div>

        <div className=" mt-10 col-span-12 w-full grid gap-5 p-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((e, index) => (
            <ServiceCardFinal data={e} key={index} />
          ))}
        </div>


      </div>
    
  );
};

export default FinalService;
