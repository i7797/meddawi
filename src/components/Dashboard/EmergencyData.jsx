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
    <div className='w-full h-[83vh] rounded-3xl'>
   
    <table className='  w-full h-[90%] rounded-3xl'>
    <thead className='text-black py-3 px-5 border-b-2 border-blue-200 h-[3rem]'>
       <tr>
        <th>Id</th>
        <th className=''>الاسم</th>
        <th className=''>رقم الهاتف</th>
        <th className=''>الحالة المرضية</th>
   
       </tr>
    </thead>
    <tbody id='dataArea' className=' text-center'>
   { cases.map(item =>{
    console.log('this is emergency service data' , cases)
      return <tr className=' cursor-pointer duration-300 border-b-2 border-blue-200 '>
        <td>{item.id}</td>
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
