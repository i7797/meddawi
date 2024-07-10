import React, { useState,useRef } from "react";
import User from "../assets/images/user (2).png";
import Edit from "../assets/images/edit (1).png";

function UploadImage() {
  const [avatar, setAvatar] = useState(User);
  const fileUploadRef= useRef();


  const handelIMageUpload=(event)=>{
    event.preventDefault();
    fileUploadRef.current.click();
  }
  const uploadImageDisplay = () => {
   const uploadedFile = fileUploadRef.current.files[0];
   const catchedURL=URL.createObjectURL(uploadedFile);
   setAvatar(catchedURL);
  }

  return (
   
      <div className="relative h-64 w-64">

        <img src={avatar} 
        alt="usser"
         className=" h-64 w-64 rounded-full   " />
     

      <form id="form" encType='multipart/form-data'>
        <button
          type='submit'
          onClick={handelIMageUpload}
          className=" flex-center absolute  right-5 bottom-5 h-9 w-9 rounded-full" >
          <img
            src={Edit}
            className='object-cover  bg-white '
            
          />
        </button>

        <input 
        ref={fileUploadRef}
        type="file" 
        id="file"
        onChange={uploadImageDisplay}
        className=" hidden" 
        
        />
      </form>
      </div>
    
  );
}
export default UploadImage;
