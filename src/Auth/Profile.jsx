import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from "react-router-dom";
import UploadImage from './UploadImage';
export const Profile = () => {
  const auth =useAuth();
  const navigate =useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/" );
  };
  return (
    <div className=''> 
    <div className='w-24 h-24 ml-10 mb-64'> <UploadImage/></div>
   

      <h1 className='welcome mt-20'>{auth.user} : الاسم</h1>
    
    <button className='logout' type="button" onClick={handleLogout}>Logout</button></div>
  )
}
