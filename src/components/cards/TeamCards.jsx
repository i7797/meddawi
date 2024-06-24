import React from "react";
// import { Link } from "react-router-dom";

 function TeamCard({ data }) {
  return (
    <div>
        <div className='   mt-28 '>
        {data.map((item) => (
         <div className=' grid grid-cols-1  mt-10 mb-10'>
            <div className='bg-slate-200 w-80 h-40 rounded-2xl  shadow-lg shadow-gray-500/30   '>
          <div key={item.id} className=' w-28 h-24 mt-10 ml-5 flex rounded-xl' >
            <img className=' h-20 w-20 rounded-xl' src={item.image} alt=" "/>
            <div  className='  mr-10 ml-20 '>
            <h2 className=' team-text text-sm ml-0 mt-0 flex'  > الاسم: {item.title} </h2>
           
            <h2 className='team-text text-sm ml-0 mt-0 flex' > العمر: {item.age} سنة</h2>
            <h2 className='team-text text-sm ml-0 mt-0 flex' >  سنوات الخبرة : {item.years } سنة</h2>


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