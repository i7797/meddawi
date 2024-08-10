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
    <>
      {currentUser ? (
        <>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className=""
          />
          <input
            type="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className=""
          />

          <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            className=""
          />

          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className=""
          />
          <button onClick={handelsave}>Edit to save</button>

          <button onClick={handelLogout}>Logout</button>
        </>
      ) : (
        <p>"you are not logged"</p>
      )}
    </>
  );
};

export default Profile;
