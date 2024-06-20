import React from "react";
import NavBar from '../common/NavBar'

export default function Team() {
  return (
  
    <div >
        <NavBar/>
     
      <h1 className="text-center mt-10"> فرقنا </h1>
      <div className="bg-slate-100 gap-5 grid grid-cols-1 mt-5 ">
      
        <div className="bg-slate-200 w-64 h-32 rounded-2xl  shadow-lg shadow-gray-500/30 mr-10 ">
          <div className="bg-slate-100 rounded-2xl w-24 h-24 mt-2 mr-20 "></div>
          <h3 className="mr-8 text-sm  mb-2">الاسم </h3>
        </div>
      </div>

      <div className="bg-slate-100 gap-5 grid grid-cols-1 mt-5 ">
        <div className="bg-slate-200 w-64 h-32 rounded-2xl  shadow-lg shadow-gray-500/30 mr-10 ">
          <div className="bg-slate-100 rounded-2xl w-24 h-24 mt-2 mr-20 "></div>
          <h3 className="mr-8 text-sm  mb-2">الاسم </h3>
        </div>
      </div>


      <div className="bg-slate-100 gap-5 grid grid-cols-1 mt-5 ">
        <div className="bg-slate-200 w-64 h-32 rounded-2xl  shadow-lg shadow-gray-500/30 mr-10 ">
          <div className="bg-slate-100 rounded-2xl w-24 h-24 mt-2 mr-20 "></div>
          <h3 className="mr-8 text-sm  mb-2">الاسم </h3>
        </div>
      </div>
      <div className="bg-slate-100 gap-5 grid grid-cols-1 mt-5 ">
        <div className="bg-slate-200 w-64 h-32 rounded-2xl  shadow-lg shadow-gray-500/30 mr-10 ">
          <div className="bg-slate-100 rounded-2xl w-24 h-24 mt-2 mr-20 "></div>
          <h3 className="mr-8 text-sm  mb-2">الاسم </h3>
        </div>
      </div>
   
    </div>
 
  );
}
