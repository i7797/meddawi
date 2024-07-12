import Nurse from '../../assets/images/nurse (1).png'

import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css'

export default function NurseProfile() {

  return (
    <div className=' '>
        <img  className='w-64 h-64 m-auto mt-10'src={Nurse}/>

     <div className=' w-full h-[70%] flex flex-col items-center justify-start gap-[20px]'>
      <TextField
      className='inputText w-[70%] border-solid border-2 border-[#181D3D] ' id="outlined-basic" label=" اسم الفريق " variant="outlined" />
      <TextField id="outlined-basic" className='w-[70%]' label="  اسم الممرض" variant="outlined" />
      <TextField  id="outlined-basic" className='w-[70%]' label="سنوات الخبره   " variant="outlined" />
      <TextField  id="outlined-basic" className='w-[70%]' label="الاختصاص   " variant="outlined" />

      <TextField  id="outlined-basic" className='w-[70%]' label="صوره الهويه   " variant="outlined" />

 <button> حسنا </button>
    </div>
    </div>
  )
}