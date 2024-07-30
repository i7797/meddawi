import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {auth } from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp= () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();


  return (
    <>
      

      <main className="flex items-center justify-center min-h-screen bg-gray-100">


        <form className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">

          <p className="text-2xl mb-6 font-semibold text-center">
            Create a new account
          </p>


          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              required
              placeholder=" E-mail : "
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
              placeholder=" Password : "
              type="password"
            />
          </div>


          <button
            className="w-full bg-[#1e244a] text-white py-2 rounded-lg hover:bg-[#181D3D] transition duration-200"
            onClick={(eo) => {
              eo.preventDefault();

              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log("doneeeeeeeeee");
                  // ...
                  navigate("/home");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                  // ..
                });
            }}
          >
            Sign up
          </button>


          <p className="mt-4 text-center">

            Already have an account?{" "}

            <Link to="/signin" className="text-[#181D3D] hover:underline">
              Sign-in
            </Link>

            
          </p>
        </form>
      </main>
    </>
  );
};


export default SignUp;