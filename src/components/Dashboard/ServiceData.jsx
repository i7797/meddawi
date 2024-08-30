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
    <div className='flex'>
    <div className=''>
    <h1>هذا الجدول خاص ببيانات الخدمة المستمرة</h1>
    <table className=''>
      <thead className=''>
         <tr >
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
        return <tr className='cursor-pointer duration-300'>
          <td className='py-3 px-5  border-b-2 border-solid border-black'>{service.name}</td>
          <td className='border-2 border-b-2 border-solid border-black'>{service.phone}</td>
          <td className='border-2 border-b-2 border-solid border-black'>{service.Chooestheservice }</td>
          <td className='border-2 border-b-2 border-solid border-black'>{service.NumberOFvisits}</td>
          <td className='border-2 border-b-2 border-solid border-black'>{service.address}</td>
         </tr>
     })}
      </tbody>
    </table>
    </div>
  </div>
  )
}
