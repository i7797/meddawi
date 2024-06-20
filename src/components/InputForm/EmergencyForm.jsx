import React from 'react'
import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css'
import SendBtn from '../bottons/SendBtn';

export default function EmergencyForm() {
  
  return (
    <div className='lg:w-[50%] w-full h-[70%] flex flex-col items-center justify-start gap-[20px]'>
      <TextField
      className='inputText w-[70%] border-solid border-2 border-[#181D3D] ' id="outlined-basic" label="الاسم" variant="outlined" />
      <TextField id="outlined-basic" className='w-[70%]' label="رقم الهاتف" variant="outlined" />
      <TextField  id="outlined-basic" className='w-[70%]' label="الحالة المرضية" variant="outlined" />
      <SendBtn/>
      
    </div>
  )
}

