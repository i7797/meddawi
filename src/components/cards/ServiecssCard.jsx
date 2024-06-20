import React from "react";
import { Link } from "react-router-dom";

 function ServiecssCard({ data }) {
  return (
    <div>
        <div>
        {data.map((item) => (
         <div className='gap-5 grid grid-cols-2 mt-5 '>
            <div className='bg-slate-200 w-40 h-48 rounded-2xl  shadow-lg shadow-gray-500/30  '>
          <div key={item.id} className='bg-slate-100 rounded-2xl w-28 h-24 mt-2 mr-5 ' >
            <img className=' h-20 w-20 mt-6 mb-20  mr-4' src={item.image} alt=" "/>
            <h2 className='mr-8 text-sm ' >{item.title}</h2>
            <Link  to="/">  <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>  </Link>

          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiecssCard;