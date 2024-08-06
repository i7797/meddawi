import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css'
import SendBtn from '../bottons/SendBtn';
import axios from 'axios';

export default function AskServiceForm() {
  const [paientName, setPatientName] = useState('');
  const [phone, setPhone] = useState(0);
  const [healthCase , setHealthCase] = useState('')
  const [noOfVisit , setNoOfvisit] = useState(1)
  const [address , setAddress] = useState('')
  
 const handleSubmit = async (e) => {
  e.preventDefault();
  const phonePattern = /^\d{11}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid 11-digit phone number.');
    return;
  }
  try {
    await axios.post(`http://localhost:5002/api/service`, {
      paientName,
      phone,
      healthCase,
      noOfVisit,
      address
    });
    console.log('Your data has been sent');
  } catch (e) {
    console.error('Error submitting data', e);
  }
}; 
  return (
    <div className=' w-full h-[70%] flex flex-col items-center justify-center mt-3 gap-[20px] lg:w-1/2 lg:mt-[120px]'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full items-center'>
      <TextField
      className='inputText w-[70%] border-solid border-2 border-[#181D3D] '
      type='text' id="outlined-basic"
      label="الاسم"
      variant="outlined" 
      value={paientName}
      onChange={(e)=>setPatientName(e.target.value)}
      required/>
      <TextField
       id="outlined-basic"
        className='w-[70%]' 
        label="رقم الهاتف" 
        pattern="\d{11}"
        type='text' 
        minRows={0} 
        maxRows={11} 
        variant="outlined" 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        required/>
      <TextField  
      id="outlined-basic" 
      className='w-[70%]' 
      label="عدد مرات الزياره" 
      type='number' 
      variant="outlined" 
      value={noOfVisit}
      onChange={(e)=>setNoOfvisit(e.target.value)}
      required/>
        <TextField  
      id="outlined-basic" 
      className='w-[70%]' 
      label="عنوان السكن" 
      type='string' 
      variant="outlined" 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      required/>
      <select 

      
      value={healthCase}
      onChange={(e)=>setHealthCase(e.target.value)}
      className='w-[70%]'
      name='اختر الخدمة'
      > 
        <option  value='pressure'>قياس ضغط الدم</option>
        <option  value='suger'>قياس السكر</option>
        <option  value='cannula'>الكانولا</option>
        <option  value='suture'>خياطة الجروح</option>
        <option  value='suture'>حريق الجلد </option>
        <option  value='suture'> حقن الابر</option>

      </select>
      <SendBtn/>
      
      </form>
    </div>
  )
}

