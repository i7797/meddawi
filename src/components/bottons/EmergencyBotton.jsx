import React from 'react'
import Button from '@mui/material/Button';
import '../../assets/css/Style.css'
import '../../assets/css/MediaQuery.css'
import { Link } from 'react-router-dom';
export default function EmergencyBotton() {
  return (
    <div className='btn'>
        <Button variant="contained  bg-gradient-to-r from-orange-400 to-[#CA5050]"  sx={{fontSize:'30px',borderRadius:'40px', width:'90%',color:'white' }}><Link to='/emergency'>حالة طارئة</Link></Button>
    </div>
  )
}
