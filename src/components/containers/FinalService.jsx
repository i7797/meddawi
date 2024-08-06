import React, { useState } from "react";
import ServicesData from "../../data/ServiceData";
import ServiceCardFinal from "../cards/ServiceCardFinal";
import NavBar from "../common/NavBar";
import "../../assets/css/Service.css";

const FinalService = () => {
  const [data, setData] = useState(ServicesData);

  return (
    <>
      <div className="ServiceContainer md:bg-[#181D3D] lg:bg-[#181D3D] grid grid-cols-12 grid-rows-[auto,auto,1fr]  xl:h-[70%] lg:h-[70%]  h-screen w-screen justify-items-center overflow-x-hidden   ">
      
        <div
          id="service"
          className="w-[90%] h-[30%] lg:w-full lg:h-[20%] mt-[50px] lg:mt-0 md:hidden lg:hidden  xl:hidden xl:h-[20%] "
        >
          <NavBar />
        </div>
      
        <div className="text flex justify-center flex-col items-center gap-2 col-span-12 row-start-2 text-center w-full">
          <h1 className="text-white text-3xl"> خدماتنا الطبية </h1>
          <div className="text flex justify-center flex-col items-center gap-2 col-span-12 row-start-2 text-center w-full">
          <p className="hidden text-white md:block lg:block  xl:block ">
              خدماتنا تشمل رعاية تمريضية محترفة ورعاية صحية مستمرة على مدار
              الساعة، مع استجابة سريعة
              <br />
              وفعالة لحالات الطوارئ لضمان صحة وسلامة مرضانا في كل الأوقات.
            </p>
          </div>
        </div>
        
        <div className="Servicecards mt-10 col-span-12 row-start-3 w-full grid gap-5 p-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3   xl:grid-cols-3">
          {data.map((e, index) => (
            <ServiceCardFinal data={e} key={index} />
          ))}
        </div>
      </div>
     
    </>
  );
};

export default FinalService;
