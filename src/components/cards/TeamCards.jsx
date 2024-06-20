import React from "react";
import { Link } from "react-router-dom";

 function TeamCard({ data }) {
  return (
    <div>
        <div className='   mt-28 '>
        {data.map((item) => (
         <div className=' grid grid-cols-1  mt-10 mb-10'>
            <div className='bg-slate-200 w-80 h-40 rounded-2xl  shadow-lg shadow-gray-500/30   '>
          <div key={item.id} className='bg-slate-100  w-28 h-24 mt-4 ml-5 flex rounded-xl' >
            <img className=' h-20 w-20 rounded-xl' src={item.image} />
            <h2 className=' text-sm ml-20 mt-10' >{item.title}</h2>
           

          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;