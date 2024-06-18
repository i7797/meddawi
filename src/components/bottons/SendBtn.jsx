import React from 'react'
import Button from '@mui/material/Button';
function SendBtn() {
  return (
    <div className='flex w-full justify-center items-center'>
      <Button sx={{backgroundColor:'#181D3D', fontSize:20 }} className='w-1/2 ' variant="contained">اطلب</Button>
    </div>
  )
}

export default SendBtn
