import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
function EmergencyData() {
    const [cases , setCases] = useState([])
    //fetch emergency data
useEffect(()=>{
    axios.get('https://x8ki-letl-twmt.n7.xano.io/api:bpZzgRy-/emergencytableGet')
    .then(cases => setCases(cases.data))
    .catch(err=>console.log(err))
},[])
  return (
    <div>
    <h1>هذا الجدول خاص بالحالات الطارئة</h1>
    <table className='shadow-2xl border-cyan-200 '>
    <thead className='text-white py-3 px-5'>
       <tr>
        <th className='bg-cyan-800'>الاسم</th>
        <th className='bg-cyan-800'>رقم الهاتف</th>
        <th className='bg-cyan-800'>الحالة المرضية</th>
   
       </tr>
    </thead>
    <tbody id='dataArea' className='bg-cyan-900 text-center'>
   { cases.map(item =>{
    console.log('this is emergency service data' , cases)
      return <tr className='bg-cyan-200 cursor-pointer duration-300'>
        <td className='py-3 px-5'>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.caseOfEmergency}</td>
       </tr>
   })}
   </tbody>
   </table>
  </div>
  )
}

export default EmergencyData
