import React from 'react';
import loginImage from '../assets/images/loginImage.svg';
import { Link } from 'react-router-dom';

function NurseStartPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen lg:h-screen w-screen">
   
      <div className="w-full  lg:w-full flex justify-center lg:justify-end items-center p-4 lg:p-0">
        <img src={loginImage} alt="nurseImage" className="w-full lg:w-full h-full  lg:max-w-lg" />
      </div>
      
    
      <div className="flex flex-col lg:w-full w-full h-full justify-center items-center gap-5 p-4 lg:p-0">
       
        <p className="hidden lg:block text-2xl text-center mb-5">اهلا و سهلا بيكم</p>

     
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-full items-center justify-center lg:justify-start">
          <button className="bg-[#181D3D] text-2xl w-full lg:w-1/2 h-16 lg:h-full text-center text-white rounded-full flex items-center justify-center lg:p-3">
            ممرض جديد؟
          </button>
          <button className="bg-[#181D3D] text-2xl w-full lg:w-1/2 h-16 lg:h-full text-center text-white rounded-full flex items-center justify-center lg:p-3">
            <Link to="/login" className="w-full h-full flex items-center justify-center">تسجيل دخول</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NurseStartPage;
