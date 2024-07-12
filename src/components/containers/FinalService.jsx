import React from 'react';
import ServicesData from "../../data/ServiceData";
import { useState } from 'react';
import ServiceCardFinal from '../cards/ServiceCardFinal';
import NavBar from '../common/NavBar';
import '../../assets/css/Service.css'
import DailyService from '../bottons/DailyService';
const FinalService = () => {
    const [data, setData] = useState(ServicesData);

    return (
        <div className='ServiceContainer lg:bg-[#181D3D] grid grid-cols-12 grid-rows-[auto,auto,1fr] h-screen w-screen justify-items-center overflow-x-hidden'>
             <div className="w-[90%] h-[30%] lg:w-full lg:h-[20%] mt-[50px] lg:mt-0 lg:hidden">
              <NavBar/>
             
             </div>

            <div className="text flex justify-center flex-col items-center gap-2 col-span-12 row-start-2 text-center w-full ">
                <h1 className='text-white text-3xl'>خدمتنا الطبية</h1>
                <div className="line hidden lg:block border border-[#CA5050] lg:bg-[#CA5050] lg:w-[10%] my-2"></div>
                <p className="hidden text-white lg:block">
                    خدماتنا تشمل رعاية تمريضية محترفة ورعاية صحية مستمرة على مدار الساعة، مع استجابة سريعة
                    <br />
                    وفعالة لحالات الطوارئ لضمان صحة وسلامة مرضانا في كل الأوقات.
                </p>
            </div>
            {/* <DailyService/> */}
            <div className="Servicecards col-span-12 row-start-row-4 lg:row-start-3 w-full flex flex-wrap justify-center grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-[81px] lg:mt-0 p-4">
                {data.map((e, index) => (
                    <ServiceCardFinal data={e} key={index} />
                ))}
            </div>
        </div>
    );
};

export default FinalService;
