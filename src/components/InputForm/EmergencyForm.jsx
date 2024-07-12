import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css'
import SendBtn from '../bottons/SendBtn';
import axios from 'axios';
export default function EmergencyForm() {
  const [name , setName] = useState('')
  const [phone , setPhone] = useState(0)
  const [emergencyCase , setEmergncyCase] = useState('')
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
  try{
       await axios.post("http://localhost:3002/api/EmergencyTable" , {
        name,
        phone,
        emergencyCase
       })
  }
  catch(e){
    console.log("error submitting data" , e);
  }
  }

  return (
    <div className='flex flex-col items-center w-full h-full gap-5 lg:w-1/2'>
     <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full items-center'>
     <TextField
      className='w-4/5 border-solid border-2 border-[#181D3D]'
      id="outlined-basic" 
      label="الاسم" 
      variant="outlined" 
      type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      required

      />
      <TextField 
      id="outlined-basic" 
      className='w-4/5 border-solid border-2 border-[#181D3D]'
      label="رقم الهاتف" 
      variant="outlined" 
      type='number'
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      required
      />
      <TextField 
       id="outlined-basic" 
       className='w-4/5 border-solid border-2 border-[#181D3D]'
       label="الحالة المرضية" 
       variant="outlined" 
       type='text'
       value={emergencyCase}
       onChange={(e)=>setEmergncyCase(e.target.value)}
       required
       />
      <SendBtn/>
      
     </form>
    </div>
  )
}

