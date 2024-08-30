import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
export default function ServiceData() {
     const [dailyService , setDailyService] = useState([])


        //fetch daily services data
        useEffect(()=>{
        axios.get('https://x8ki-letl-twmt.n7.xano.io/api:bpZzgRy-/dailyserviceGet')
        .then(dailyService => setDailyService(dailyService.data))
        .catch(err => console.log(err))
        },[])

  return (
    <div className='w-full h-[83vh] rounded-3xl'>
    <div className=''>
    <table className='w-full h-[90%] rounded-3xl'>
      <thead className='text-black py-3 px-5 border-b-2 border-blue-200 h-[3rem]'>
         <tr >
          <th>Id</th>
          <th className=''>الاسم</th>
          <th className=''>رقم الهاتف</th>
          <th className=''>الحالة المرضية</th>
          <th className=''>عدد مرات الزيارة</th>
          <th className=''> عنوان السكن</th>
          
         </tr>
      </thead>
      <tbody id='dataArea' className=' text-center '>
     {dailyService.map(service =>{
      console.log('this is daily service data' , dailyService)
        return <tr className='cursor-pointer duration-300 border-b-2 border-blue-200'>
          <td>{service.id}</td>
          <td className='py-3 px-5'>{service.name}</td>
          <td className='py-3 px-5'>{service.phone}</td>
          <td className='py-3 px-5'>{service.Chooestheservice }</td>
          <td className='py-3 px-5'>{service.NumberOFvisits}</td>
          <td className='py-3 px-5'>{service.address}</td>
         </tr>
     })}
      </tbody>
    </table>
    </div>
  </div>
  )
}
