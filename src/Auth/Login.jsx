import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectpath = location.state?.path || "/";

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth.login(user, password);

    navigate(redirectpath, { replace: true });
  };
  return (
    <div className=" flex w-screen h-screen items-center justify-center flex-col">
        {/* <h1 className="text-[60px] h-[30%] text-center flex items-center justify-center text-[#CA5050] font-bold"><span>اهلا و سهلا بك من جديد</span></h1> */}
    <div className="flex flex-col items-center h-[70%] w-full ">
      <label className="label text-[25px]  self-end color-[#272C52] mr-5 font-extrabold ">
        :اسم المستخدم{" "} 
     
      </label> <br/>

      <input
          className="input w-[90%] h-[12%] rounded-2xl mb-3 border-4 border-solid border-[#272C52] bg-white "
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)  }
        />

      <label className="label text-[25px]  self-end color-[#272C52] mr-5 font-extrabold">
         :كلمة السر{" "} 
    
      </label> <br/> 
      <input 
          className="input w-[90%] h-[12%] rounded-2xl mb-3 border-4 border-solid border-[#272C52] bg-white"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button className="login w-[40%] h-[10%] text-white text-2xl" type="button" onClick={handleLogin}>
        {" "}
        تسجيل الدخول{" "}
      </button>
    </div>
    </div>
  );
};