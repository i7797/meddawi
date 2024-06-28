import React from "react";
// import { Link } from "react-router-dom";

 function TeamCard({ data }) {
  return (
    <div>
        <div className=' lg:flex lg:flex-wrap lg:justify-center lg:items-center  mt-28  lg:mt-0'>
        {data.map((item) => (
         <div className=' grid grid-cols-1  mt-10 mb-10  lg:flex lg:flex-row'>
            <div className= ' w-80 h-40 rounded-2xl  shadow-lg shadow-gray-500/30 lg:flex lg:justify-center  lg:h-[300px] lg:w-[85%] hover:w-full hover:mr-9 lg:rounded-[65px] delay-150 duration-300 ease-in-out' style={{backgroundColor:item.color}}>
          <div key={item.id} className=' w-28 h-24 mt-10 ml-5 flex rounded-xl lg:flex-col' >
            <img className=' h-20 w-20 rounded-xl ' src={item.image} alt=" "/>
            <div  className='  mr-10 ml-20  lg:ml-0 bg-red-600 lg:self-center  group/edit lg:mt-[15px] lg:mr-auto lg:w-[90%] lg:hidden group/edit'>
            <h2 className=' team-text text-sm ml-0 mt-0 flex self-center  group-hover/edit:translate-x-0.5'  > الاسم: {item.title} </h2>
           
            <h2 className='team-text text-sm ml-0 mt-0 flex ' > العمر: {item.age} سنة</h2>
            <h2 className='team-text text-sm ml-0 mt-0 flex ' >  سنوات الخبرة : {item.years } سنة</h2>


            </div>
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;