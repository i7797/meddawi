import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from "react-router-dom";
import UploadImage from './UploadImage';
import exit from '../assets/images/exit.png'
import userprofile from '../assets/images/userprofile.png'
import wallet from '../assets/images/wallet.png'
import Settings from '../assets/images/Settings.svg'



export const Profile = () => {
  const auth =useAuth();
  const navigate =useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/" );
  };
  return (
    <div className='border border-zinc-800 rounded-3xl m-2	'> 
    <h1 className='text-center mt-5 mb-10 text-3xl  '>الصفحة الشخصيه </h1>
    <div className='w-24 h-24 ml-20 mb-64'> <UploadImage/></div>
   
    <div className='flex ml-32  mb-5' > 
    <h1 className='text-2xl  mr-5 mt-5'>{auth.user} : الاسم</h1>

      <img  className='w-20 h-20 mr-5 bg-blue-200 rounded-full'src={userprofile}/>
      
      </div>
     
      <div className='flex ml-36 mb-5 ' > 
      <h1 className='text-2xl   mr-5 mt-5'> طريقه الدفع </h1>
      <img  className='w-20 h-20 bg-blue-200 rounded-full mr-5'src={wallet}/>
     
      
      </div>

      <div className='flex ml-44  mb-5' > 
      <h1 className='text-2xl  mr-5 mt-5'> الاعدادات   </h1>

      <img  className='w-20 h-20 bg-blue-200 rounded-full  'src={Settings}/>
      
      </div>

      <div className='flex ml-32  mb-5 ' >
      <button className='text-2xl mr-5 ' type="button" onClick={handleLogout}>تسجيل الخروج </button>
         <img  className='w-18 h-20 bg-blue-200 rounded-full mr-10'src={exit}/>
    


</div>      </div>
  )
}
