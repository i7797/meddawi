import React from 'react'
import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css'
import SendBtn from '../bottons/SendBtn';

export default function AskServiceForm() {
  
  return (
    <div className=' w-full h-[70%] flex flex-col items-center justify-center mt-3 gap-[20px] lg:w-1/2 lg:mt-[120px]'>
      <TextField
      className='inputText w-[70%] border-solid border-2 border-[#181D3D] ' type='text' id="outlined-basic" label="الاسم" variant="outlined" required/>
      <TextField id="outlined-basic" className='w-[70%]' label="رقم الهاتف" type='number' minRows={0} maxRows={11} variant="outlined" required/>
      <TextField  id="outlined-basic" className='w-[70%]' label="الحالة المرضية" type='text' variant="outlined" required/>
      <TextField  id="outlined-basic" className='w-[70%]' label="عدد مرات الزياره" type='number' variant="outlined" required/>
      <SendBtn onClick={console.log('hello')}/>
      
    </div>
  )
}

