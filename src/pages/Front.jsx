import React from 'react'
import '../assets/css/Style.css'
import '../assets/css/MediaQuery.css'
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


export default function Front() {

  return (
    <div className=' '>



    <Button variant="contained"  sx={{backgroundColor:'',fontSize:'30px',borderRadius:'40px', width:'90%' ,marginBottom:'10px' ,marginTop:'10rem'  ,marginLeft:'2rem'}}><Link to='/home'> مريض </Link></Button>
    <Button variant="contained"  sx={{backgroundColor:'',fontSize:'30px',borderRadius:'40px', width:'90%' ,margin:'auto' ,marginBottom:'10px' ,marginLeft:'2rem'}}><Link to='/nurse'> ممرض  </Link></Button>



    </div>
  )
}

