import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth =useAuth();
  const navigate =useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/" );
  };
  return (
    <div className='ProfileContainer'> 
      <h1 className='welcome'>welcome {auth.user}</h1>
    
    <button className='logout' type="button" onClick={handleLogout}>Logout</button></div>
  )
}
