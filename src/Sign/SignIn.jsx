import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import {useTranslation} from "react-i18next"


const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { i18n,t}=useTranslation();

  return (


    <>
      <title>  {t("Sign-in")}
      </title>

      <main className="flex items-center justify-center min-h-screen bg-gray-100">

        <form className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">


          <p className="text-2xl mb-6 font-semibold text-center">
          {t("Sign in to your account")}
          </p>


          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              required
              placeholder= {t("email")}
              type="email"
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
              required
              placeholder={t("password")}
              type="password"
            />
          </div>


          <button
            className="w-full bg-[#1e244a] text-white py-2 rounded-lg hover:bg-[#181D3D] transition duration-200"
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                 
                  navigate("/");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                });
            }}
          >
             {t("Sign-in")}
          </button>


          <p className="mt-4 text-center">
          {t("Don't have an account?")}
            <Link to="/signup" className="text-[#181D3D] hover:underline">
            {t("Sign up")}
            </Link>
          </p>

          
        </form>
      </main>
    </>
  );
};

export default SignIn;
