
import React from 'react'

import { Link } from 'react-router-dom'  
import { useAuth } from '../../Auth/Auth'; 
function NavBar() {
  return (
    <div className='nav  flex bg-[#323868] w-[90%] justify-center items-center rounded-[40px] mt-[40px] lg:flex-row-reverse'>
      <ul className='items inline-flex m-3 gap-2 text-[15px] w-[100%] items-center justify-center'>
      <li className="Login  bg-blacklg:block lg:w-full">
          
          <Link to="/login">تسجيل الدخول </Link>
   </li>
   <li >
          
          <Link to="/profile">صفحه رئيسيه   </Link>
   </li>
        <Link to='/team'>
        <li className='item bg-[#181D3D] rounded-[25px] p-3 text-white  w-[100%]'>الفرق الطبية</li>
        </Link>
       <Link to='/service'>
       <li className='item bg-[#181D3D] rounded-[25px] p-3 text-white  w-[100%] text-center'>خدماتنا</li>
       </Link>
        <Link to='/'>
        <li id='active' className='item  bg-[#181D3D] rounded-[25px] p-3 text-white  w-[100%]'>الصفحة الرئيسية</li>
        </Link>
     
      </ul>
      <div className="Login hidden lg:block lg:w-full">
     
      </div>
    </div>
  )
}

export default NavBar
