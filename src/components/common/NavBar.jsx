
import React from 'react'
import LoginBotton from '../bottons/LoginBotton'
function NavBar() {
  return (
    <div className='nav flex bg-[#323868] w-[90%] justify-center items-center rounded-[40px] mt-[40px]'>
      <ul className='items inline-flex m-3 gap-2 text-[15px]'>
      <LoginBotton/>
        <li className='item bg-[#181D3D] rounded-[25px] p-3 text-white'>الفرق الطبية</li>
        <li className='item bg-[#181D3D] rounded-[25px] p-3 text-white'>خدماتنا</li>
        <li id='active' className='item  bg-[#181D3D] rounded-[25px] p-3 text-white'>الصفحة الرئيسية</li>
       
      </ul>
    </div>
  )
}

export default NavBar
