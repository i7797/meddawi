import React from "react";
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendBtn from "../bottons/SendBtn";

 function ServiecssCard({ data }) {
  return (
    <div className="service-cards flex flex-wrap  justify-start lg:justify-start items-center w-full h-full lg:h-full lg:w-[97%]">
       

       
            {data.map((item) => (
     
           
          <div key={item.id} className='lg:bg-[#323868] bg-[#e2e0e0] h-[24%] mt-2 rounded-xl  ml-5 mr-3 flex flex-col  justify-start items-center w-[40%] lg:w-[25%]  lg:h-[60%] shadow-lg' >
            <div className="flex lg:w-full h-1/2 w-[90%] mt-3 lg:mt-0 justify:center items-center bg-white">
            <img className='  w-20 h-20 mt-10 lg:mt-0 items-center  mr-36 lg:w-[60%]  lg:h-[75%] lg:ml-auto lg:mr-auto lg:self-center lg:rounded-xl self-center ' src={item.image} alt=" "/>
            </div>
            <div className="circleOut bg-[#CA5050] opacity-50 w-[40%] mt-[-50px] h-[30%] lg:flex justify-center items-center rounded-full hidden">
              <div className="circleIn bg-[#CA5050] w-[85%] h-[80%] rounded-full bg-transparent bg-opacity-100"><ArrowForwardIcon  sx={{ color: 'white' , width:90 , height:90 }}/></div>
            </div>
            <div className="mt-3 lg:hidden">
            <SendBtn />
            </div>
            <div className="lg:flex flex-col items-center justify-start text-white text-center hidden">
            <h2 className='team-text text-lg mt-10 text-center 	lg:mt-5 lg:ml-20 ' >{item.title}</h2>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            
            {/* <Link  to="/askcare">  <button className='bg-blue-900 rounded-lg w-20 h-6 mr-20 text-xs text-center	 text-white	 lg:ml-20 lg:mt-5'> احجز هنا  </button>  </Link> */}

          
          </div>
         
        ))}
    
    </div>
  );
}

export default ServiecssCard;