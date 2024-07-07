import React from "react";
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendBtn from "../bottons/SendBtn";

 function ServiecssCard({ data }) {
  return (
  
          <div key={data.id} className='lg:bg-[#323868] bg-[#e2e0e0] h-[35%]  rounded-xl  ml-[5px] flex flex-col  justify-center items-center w-full lg:w-[50%]  lg:h-[65%]  lg:ml-0 lg:mr-0 shadow-lg' >
            <div className="flex lg:w-full lg:h-1/2 self-start h-full w-[90%] mt-3 lg:mt-0 justify:center items-center bg-white">
            <img className=' mr-auto ml-auto w-[50%] h-[70%]  lg:mt-0 items-center   lg:w-[60%]  lg:h-[75%] lg:ml-auto lg:mr-auto  lg:rounded-xl self-center ' src={data.image} alt=" "/>
            </div>
            <div className="circleOut bg-[#CA5050]   w-[50%] mt-[-50px] h-[23%] lg:flex justify-center items-center rounded-full hidden">
           <Link to={`/service/${data.id}`}>
              <div className="circleIn bg-[#CA5050] w-[85%] h-[80%] rounded-full bg-transparent bg-opacity-100"><ArrowForwardIcon  sx={{ color: 'white' , width:70 , height:70 }}/></div>
           </Link>
           </div>
           <h1 className="text-lg lg:hidden">{data.title}</h1>
            <div className="mt-3 lg:hidden w-full">
            <SendBtn />
            </div>
            <div className="lg:flex flex-col items-center justify-start text-white text-center hidden">
            <h2 className='team-text text-xl  text-center  ' >{data.title}</h2>
            <p >{data.text}</p>
            </div>
            
            {/* <Link  to="/askcare">  <button className='bg-blue-900 rounded-lg w-20 h-6 mr-20 text-xs text-center	 text-white	 lg:ml-20 lg:mt-5'> احجز هنا  </button>  </Link> */}

          </div>
    
  );
}

export default ServiecssCard;