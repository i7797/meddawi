import React from 'react'
import Button from '@mui/material/Button';
import '../../assets/css/Style.css'
import '../../assets/css/MediaQuery.css'
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next"

export default function EmergencyBotton() {
  const { i18n,t}=useTranslation();

  return (
    <div className='btn'>
        <Button variant="contained  bg-gradient-to-r from-pink-400 to-[#CA5050]" 
         sx={{fontSize:'30px',borderRadius:'40px', width:'90%',color:'white' }}><Link to='/emergency'>{t("Emergency")} </Link></Button>
    </div>
  )
}
