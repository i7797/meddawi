import React from 'react'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Msg from '../common/Msg';
import '../../assets/css/Style.css'
import '../../assets/css/MediaQuery.css'
function SendBtn() {
  const notify = () => toast(<Msg/>,{
    style:{
          height:'100%',
          backgroundColor:'#181D3D'
    }
  });
  return (
    <div className='SendBtn flex w-full justify-center items-center'>
      <Button onClick={notify} sx={{backgroundColor:'#181D3D', fontSize:20 }} className='w-1/2 ' variant="contained">اطلب</Button>
      <ToastContainer className="ToastContainer"
      position="bottom-center"
      rtl={true}
      autoClose={6000}
      />
    </div>
  )
}

export default SendBtn
