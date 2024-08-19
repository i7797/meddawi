import React from 'react'
import Button from '@mui/material/Button';
import '../../assets/css/Style.css'
import '../../assets/css/MediaQuery.css'
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next"
import { useAuth } from "../../Sign/AuthContext";


export default function EmergencyBotton() {
  const { i18n,t}=useTranslation();
  const { currentUser } = useAuth();


  return (
   
    <div className='btn'>
 
    </div>



  )
}
