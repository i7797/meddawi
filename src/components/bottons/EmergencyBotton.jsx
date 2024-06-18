import React from 'react'
import Button from '@mui/material/Button';
import '../../assets/css/Style.css'
export default function EmergencyBotton() {
  return (
    <div className='btn'>
        <Button variant="contained"  sx={{backgroundColor:'#CA5050',fontSize:'30px',borderRadius:'40px', width:'90%' }}>حالة طارئة</Button>
    </div>
  )
}
