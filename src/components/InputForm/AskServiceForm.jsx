import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/Style.css'
import SendBtn from '../bottons/SendBtn';
import {useTranslation} from "react-i18next"
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


import axios from 'axios';

export default function AskServiceForm() {
  const { i18n,t}=useTranslation();

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
    await axios.post(`http://localhost:5000/api/service`, {
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
    <div className=' w-full h-[70%]  flex flex-col mt-6 gap-[20px] lg:w-1/2 lg:justify-center'>
            <SendBtn/>
      <form onSubmit={handleSubmit} className='flex mt-0 flex-col gap-5 w-full items-center'>
      <TextField
      className='inputText mt-0 w-[70%] border-solid border-2 border-[#181D3D] '
      type='text' id="outlined-basic"
      label={t("Name")}
      variant="outlined" 
      value={paientName}
      onChange={(e)=>setPatientName(e.target.value)}
      required/>
      <TextField
       id="outlined-basic"
        className='w-[70%]' 
        label={t("Phone-Number")}
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
      label={t("Number-of-visits")}
      type='number' 
      variant="outlined" 
      value={noOfVisit}
      onChange={(e)=>setNoOfvisit(e.target.value)}
      required/>


        <TextField  
      id="outlined-basic" 
      className='w-[70%]' 
      label={t("Address")}
      type='string' 
      variant="outlined" 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      required/>
<FormControl variant="outlined" className='w-[70%]'>

<InputLabel id="health-case-label">{t("Chooes the service")}</InputLabel>
  <Select
    labelId="health-case-label"
    value={healthCase}
    onChange={(e) => setHealthCase(e.target.value)}
    label={t("Chooes the service")}
  >
    <MenuItem value='pressure'>{t("bloodPressure-title")}</MenuItem>
    <MenuItem value='suger'>{t("sugar-title")}</MenuItem>
    <MenuItem value='cannula'>{t("cannula-title")}</MenuItem>
    <MenuItem value='injection'>{t("injection-title")}</MenuItem>
    <MenuItem value='burn'>{t("hand-title")}</MenuItem>
    <MenuItem value='suture'>{t("suture-title")}</MenuItem>
  </Select>

  </FormControl>

      </form>
    </div>
  )
}

