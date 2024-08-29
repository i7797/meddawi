import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import '../../assets/css/Style.css';
import {useTranslation} from "react-i18next"
import EmergencyOerder from '../bottons/EmergencyOerder';

export default function AskCareForm() {
  const { i18n,t}=useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    caseOfEmergency: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting data:', formData); 
      const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:bpZzgRy-/emergencytablePost', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <form 
      onSubmit={handleSubmit} 
      className='w-full h-[70%] flex flex-col items-center justify-start gap-[20px]'
    >
      <TextField
        className='inputText w-[70%] border-solid border-2 border-[#181D3D]'
        id="outlined-name"
        name="name"
        label={t("Name")}
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-phone"
        className='w-[70%]'
        name="phone"
        label={t("Phone-Number")}
        variant="outlined"
        value={formData.phone}
        onChange={handleChange}
      />
      <TextField
        id="outlined-address"
        className='w-[70%]'
        name="address"
        label={t("Address")}
        variant="outlined"
        value={formData.address}
        onChange={handleChange}
      />
       <TextField
        id="outlined-caseOfEmergency"
        className='w-[70%]'
        name="caseOfEmergency"
        label={t("caseOfEmergency")}
        variant="outlined"
        value={formData.caseOfEmergency}
        onChange={handleChange}
      />
      <EmergencyOerder />
    </form>
  );
}