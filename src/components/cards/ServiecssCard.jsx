import React from "react";
import { Link } from "react-router-dom"


 function ServiecssCard({ data }) {
  return (
    <div>
       <Link  to="/askservice">  <button className='bg-red-400 rounded-lg w-80 h-10 text-xs text-center	mt-8 text-white	'> طلب خدمه الرعاية المستمرة  </button>  </Link>

       <div  className='   mt-28 cardService '>    
            {data.map((item) => (
         <div className=' cardService '>
            <div className='bg-slate-200 w-40 h-60 rounded-2xl  mb-10 mr-10 '>
          <div key={item.id} className='bg-slate-100  w-20 h-20 mt-2 rounded-xl block ml-10' >
            <img className='  w-20 h-20 mt-10  items-center  mr-36' src={item.image} alt=" "/>
            <h2 className='team-text text-lg mt-10 text-center	' >{item.title}</h2>
            <Link  to="/askcare">  <button className='bg-blue-900 rounded-lg w-20 h-6 mr-20 text-xs text-center	 text-white	'> احجز هنا  </button>  </Link>

          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiecssCard;