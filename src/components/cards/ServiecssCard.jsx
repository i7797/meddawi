import React from "react";
import { Link } from "react-router-dom";

 function ServiecssCard({ data }) {
  return (
    <div>
       <div  className='   mt-28 '>    
            {data.map((item) => (
         <div className=' grid grid-cols-1 '>
            <div className='bg-slate-200 w-80 h-72 rounded-2xl  mb-10 '>
          <div key={item.id} className='bg-slate-100  w-40 h-40 mt-2 rounded-xl block ml-20' >
            <img className=' ml-1  w-36 h-32 mt-10  ' src={item.image} alt=" "/>
            <h2 className=' text-lg mt-10 text-center	' >{item.title}</h2>
            <Link  to="/">  <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs text-center	 ml-10'> احجز هنا  </button>  </Link>

          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiecssCard;