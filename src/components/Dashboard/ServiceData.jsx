import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
export default function ServiceData() {
     const [dailyService , setDailyService] = useState([])


        //fetch daily services data
        useEffect(()=>{
        axios.get('http://localhost:5000/api/daily-services')
        .then(dailyService => setDailyService(dailyService.data))
        .catch(err => console.log(err))
        },[])

  return (
    <div className='flex bg-blue-200 '>
    <div className='bg-red-200'>
    <h1>هذا الجدول خاص ببيانات الخدمة المستمرة</h1>
    <table className='shadow-2xl border-cyan-200 '>
      <thead className='text-white py-3 px-5'>
         <tr>
          <th className='bg-cyan-800'>الاسم</th>
          <th className='bg-cyan-800'>رقم الهاتف</th>
          <th className='bg-cyan-800'>الحالة المرضية</th>
          <th className='bg-cyan-800'>عدد مرات الزيارة</th>
          <th className='bg-cyan-800'> عنوان السكن</th>
          
         </tr>
      </thead>
      <tbody id='dataArea' className='bg-cyan-900 text-center'>
     {dailyService.map(service =>{
      console.log('this is daily service data' , dailyService)
        return <tr className='bg-cyan-200 cursor-pointer duration-300'>
          <td className='py-3 px-5'>{service.paientName}</td>
          <td>{service.phone}</td>
          <td>{service.healthCase}</td>
          <td>{service.noOfVisits}</td>
          <td>{service.address}</td>
         </tr>
     })}
      </tbody>
    </table>
    </div>
  </div>
  )
}
