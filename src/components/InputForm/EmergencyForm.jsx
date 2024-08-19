import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css';
import EmergencyOerder from '../bottons/EmergencyOerder';
import axios from 'axios';
import {useTranslation} from "react-i18next"


export default function EmergencyForm() {
  const { i18n,t}=useTranslation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [caseOfEmergency, setEmergencyCase] = useState('');
  const [addressOfPatient, setAddress] = useState('');

  const [ipAddress , setIpAddress] = useState('')
  const [geoInfo , setGeoInfo] = useState ({}) 

  const getvisitorIP = async()=>{
    try {
       const response = await fetch('https://api.ipify.org')
       const data = await response.text()
       setIpAddress(data )
    } catch (error) {
      console.error('failed to fetch ip:' , error )
    }
    console.log(ipAddress)
    
    
      }
    
    
    const fetchIpInfo = async ()=>{
      try {
        const response = await fetch(`http://ip-api.com/json/${ipAddress}`)
        const data = await response.json()
        setGeoInfo(data)
      } catch (error) {
        console.error('failed to get user location' , error)
      }
      
    }

    //-----------------------
  const sendMessage = () => {
  const url = `https://web.whatsapp.com/send?phone=${phoneNo}&text=${patientLocation}&app_absent=0`;
  window.open(url, '_blank');
};
//-----------------------
    
    useEffect(()=>{
      getvisitorIP()
      fetchIpInfo()
  
    },[])
    console.log(geoInfo)
    const lat = geoInfo.lat
    const long = geoInfo.lon
    const phoneNo = '07700443588'
    const patientLocation =`https://www.google.com/maps/@${lat},${long}`


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 11-digit phone number.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/emergency', {
        name,
        phone,
        caseOfEmergency,
        addressOfPatient,
        
      });
      console.log('Your data has been sent');
      sendMessage(); 
    } catch (e) {
      console.error('Error submitting data', e);
    }
  };

  return (
    <div className='flex flex-col items-center w-full h-full gap-5 lg:w-1/2'>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full items-center'>


        <TextField
          className='w-4/5 border-solid border-2 border-[#181D3D]'
          id="outlined-basic" 
          label={t("Name")} 
          variant="outlined" 
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField 
          id="outlined-basic" 
          className='w-4/5 border-solid border-2 border-[#181D3D]'
          label={t("Phone-Number")} 
          variant="outlined" 
          type='number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField 
          id="outlined-basic" 
          className='w-4/5 border-solid border-2 border-[#181D3D]'
          label={t("Disease-condition")} 
          variant="outlined" 
          type='text'
          value={caseOfEmergency}
          onChange={(e) => setEmergencyCase(e.target.value)}
          required
        />
        <TextField 
          id="outlined-basic" 
          className='w-4/5 border-solid border-2 border-[#181D3D]'
          label={t("Address")} 
          variant="outlined" 
          type='text'
          value={addressOfPatient}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <EmergencyOerder />
      </form>
    </div>
  );
}
