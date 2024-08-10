import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const firestore = getFirestore();

  useEffect(() => {
    if (currentUser) {
      const docRef = doc(firestore, "users", currentUser.uid);

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setEmail(data.email || "");
          setName(data.name || "");

          setAge(data.age || "");

          setLocation(data.location || "");
        }
      });
    }
  }, [currentUser, firestore]);

  const handelsave = async () => {
    if (currentUser) {
      const docRef = doc(firestore, "users", currentUser.uid);
      const userProfile = {
        email,
        name,
        age,
        location,
      };
      await setDoc(docRef, userProfile);
      alert("profile Update");
    }
  };

  const handelLogout = () => {
    logout();
    navigate("/");
  };

  return (

<div className=" flex items-center justify-center min-h-screen bg-slate-100 ">
    <div className="bg-white shadow-md max-w-sm w-full text-center rounded-lg p-8  ">
        <h1 className="text-2xl font-bold mb-4"> Profile </h1>
        {currentUser ? (
        <>
        <div className="mb-5"> 
        <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className=" px-4 py-2 border border-gray-400 w-full rounded-lg focus:outline-none focus:border-blue-950"
            />
        </div>
        <div className="mb-5"> 

          <input
            type="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className=" px-4 py-2 border border-gray-400 w-full rounded-lg focus:outline-none focus:border-blue-950"
          />
        </div>
        <div className="mb-5"> 

          <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            className=" px-4 py-2 border border-gray-400 w-full rounded-lg focus:outline-none focus:border-blue-950"
          />
        </div>
        <div className="mb-5"> 

          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className=" px-4 py-2 border border-gray-400 w-full rounded-lg focus:outline-none focus:border-blue-950"
          />
                  </div>

          <button 
          className="bg-blue-950 w-full text-white py-2 px-4 rounded-lg mb-3 hover:bg-blue-600  transition duration-200"

          
          
          onClick={handelsave}>Edit to save</button>

          <button
          className="bg-blue-950 w-full text-white py-2 px-4 rounded-lg  hover:bg-blue-600  transition duration-200"
          
          onClick={handelLogout}>Logout</button>
        </>
      ) : (
        <p>"you are not logged"</p>
      )}
    </div>
</div>

     
  
  );
};

export default Profile;
