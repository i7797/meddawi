import Nurse from '../../assets/images/nurse (1).png'

import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css'

export default function NursePost() {

  return (
    <div className='  '>
      <div  className=' bg-blue-300 w-80 h-44   mb-10' ></div>

     <div className=' w-full h-[70%] flex flex-col items-center justify-start gap-[20px]'>
      <TextField
      className='inputText w-[70%] border-solid border-2 border-[#181D3D] ' id="outlined-basic" label=" عنوان   " variant="outlined" />

      <TextField  id="outlined-basic" className='w-[70%]' label=" الشرح  " variant="outlined" />


 <button> انشر </button>
    </div>
    </div>
  )
}