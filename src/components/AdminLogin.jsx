import React, { useState } from "react";

import { app } from "../firebase_setup/firebase"; // Import Firebase from your separate file

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormdata] = useState({});
  const navigate = useNavigate();
  function getFromFire(e) {
    e.preventDefault();
    const email = formData["email"];
    const password = formData["password"];
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate(
          '/certificate',
          // {state:formData}
        );
        const user = userCredential.user;
        
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Firebase Error:", errorCode, errorMessage);
      });
  }
  const handlechange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setFormdata({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <form action="" onSubmit={getFromFire}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handlechange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlechange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
   
  );
};

export default AdminLogin;
