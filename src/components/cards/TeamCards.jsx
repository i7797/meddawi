// import React, { useState } from "react";
// import { Link } from "react-router-dom";

 function TeamCard({ data }) {
  // const [isHovering , setIsHovering] = useState(false)
  // const handleMouseOver = () =>{
  //   setIsHovering(true)
  // }
  // const handleMouseIsOut = () =>{
  //   setIsHovering(false)
  // }
  return (
    // <div className=" lg:w-full lg:h-full flex items-center justify-center">
         <div className="Servicecards lg:w-[95%] lg:h-[70%] flex lg:gap-5 justify-center items-center lg:mt-10 flex-wrap">
            {
              data.map((item)=>
                (
                  <div className="Servicecard group lg:rounded-[80px] lg:w-[12%] lg:flex  lg:h-full hover:w-[40%]  hover:h-full delay-150 duration-300 ease-in-out  justify-center items-center overflow-hidden " key={item.id} style={{backgroundColor:item.color}} >
                     <div className="lg:h-[100%] lg:w-full  lg:rounded-[80px] overflow-hidden flex"> 
                     <img src={item.image} className="transition-all duration-300 ease-in-out " />
                     </div>
                     <div className="group-hover:flex lg:hidden lg:h-full lg:w-full  flex-col justify-center items-center text-white" >
                      <h2>الاسم:{item.title}</h2>
                     <h2 >العمر:{item.age}</h2>
                     <h2 >سنوات الخبرة:{item.years}</h2>
                     </div>
                     
                  </div>
                )
              )
            }
         {/* </div> */}
        {/* <div className=' lg:flex lg:flex-wrap lg:justify-center lg:items-center  mt-28  lg:mt-0'>
        {data.map((item) => (
         <div className=' grid grid-cols-1  mt-10 mb-10  lg:flex lg:flex-row lg:w-full lg:h-full'>
            <div className= ' w-80 h-40 rounded-2xl  shadow-lg shadow-gray-500/30 lg:flex lg:justify-center  lg:h-[300px] lg:w-[85%] hover:w-full hover:mr-9 lg:rounded-[65px] delay-150 duration-300 ease-in-out' style={{backgroundColor:item.color}}>
          <div key={item.id} className=' w-28 h-24 mt-10 ml-5 flex rounded-xl lg:flex-col' >
            <img className=' h-20 w-20 rounded-xl lg:h-full ' src={item.image} alt=" "/>
            <div  className='  mr-10 ml-20  lg:ml-0 bg-red-600 lg:self-center  group/edit lg:mt-[15px] lg:mr-auto lg:w-[90%] lg:hidden group/edit'>
            <h2 className=' team-text text-sm ml-0 mt-0 flex self-center  group-hover/edit:translate-x-0.5'  > الاسم: {item.title} </h2>
           
            <h2 className='team-text text-sm ml-0 mt-0 flex ' > العمر: {item.age} سنة</h2>
            <h2 className='team-text text-sm ml-0 mt-0 flex ' >  سنوات الخبرة : {item.years } سنة</h2>


            </div>
          </div>
          </div>
          </div>
        ))}
      </div> */}

    </div>
  );
}

export default TeamCard;