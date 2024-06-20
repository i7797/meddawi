import React from 'react'
import Button from '@mui/material/Button';
import '../../assets/css/Style.css'
import '../../assets/css/MediaQuery.css'
import { Link } from 'react-router-dom';
export default function EmergencyBotton() {
  return (
    <div className='btn'>
        <Button variant="contained"  sx={{backgroundColor:'#CA5050',fontSize:'30px',borderRadius:'40px', width:'90%' }}><Link to='/emergency'>حالة طارئة</Link></Button>
    </div>
  )
}
