import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {auth } from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useTranslation} from "react-i18next"


const SignUp= () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { i18n,t}=useTranslation();


  const handleSignUp = (eo) => {
    eo.preventDefault();
    setError("");

    // Validation
    if (!email.includes("@")) {
      setError(t("Please enter a valid email address."));
      return;
    }

    if (password.length < 8) {
      setError(t("Password must be at least 8 characters long."));
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("doneeeeeeeeee");
      navigate("/");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(t("Error signing up: ") + errorMessage);
      console.log(errorMessage);
    });
};

  return (
    <>
      

      <main className="flex items-center justify-center min-h-screen bg-gray-100">


        <form onSubmit={handleSignUp} className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">

          <p className="text-2xl mb-6 font-semibold text-center">
          {t("Create a new account")}

          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-4">
            <input
                        required

              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
           
              placeholder=   {t("email")}

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
              placeholder=  {t("password")}

              type="password"
            />
          </div>


          <button
            className="w-full bg-[#1e244a] text-white py-2 rounded-lg hover:bg-[#181D3D] transition duration-200"
         
             
          >
                     {t("Sign up")}

          </button>


          <p className="mt-4 text-center">
          {t("Already have an account?")}

            
            
            {" "}

            <Link to="/signin" className="text-[#181D3D] hover:underline">
            {t("Sign-in")}

              
            </Link>

            
          </p>
        </form>
      </main>
    </>
  );
};


export default SignUp;