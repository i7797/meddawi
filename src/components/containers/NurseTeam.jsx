import Team from '../../assets/images/TeamWork.png'
import TextField from '@mui/material/TextField';
import '../../assets/css/Style.css'

export default function NurseTeam() {

  return (
    <div className=' '>
        <img  className='w-64 h-64 m-auto 'src={Team}/>
     <div className=' w-full h-[70%] flex flex-col items-center justify-start gap-[20px] mt-20 '>
      <TextField
      className='inputText w-[70%] border-solid border-2 border-[#181D3D] ' id="outlined-basic" label=" اسم الفريق " variant="outlined" />
      <TextField id="outlined-basic" className='w-[70%]' label=" عنوان الفريق " variant="outlined" />
      <TextField  id="outlined-basic" className='w-[70%]' label="عدد الاعضاء " variant="outlined" />
 <button className=' bg-blue-700'> اضافه </button>
    </div>
    </div>
  )
}