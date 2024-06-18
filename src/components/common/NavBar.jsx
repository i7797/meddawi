import React from 'react'

function NavBar() {
  return (
    <div className='flex bg-[#323868] w-[90%] justify-center items-center rounded-[40px] mt-[40px]'>
      <ul className='inline-flex m-3 gap-2 text-[15px]'>
        <li className='bg-[#181D3D] rounded-[25px] p-3 text-white'>الصفحة الرئيسية</li>
        <li className='bg-[#181D3D] rounded-[25px] p-3 text-white'>خدماتنا</li>
        <li className='bg-[#181D3D] rounded-[25px] p-3 text-white'>الفرق الطبية</li>
      </ul>
    </div>
  )
}

export default NavBar
