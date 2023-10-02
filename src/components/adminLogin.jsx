import React, { useState } from "react";

import { app } from "../firebase_setup/firebase"; // Import Firebase from your separate file

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
  const [formData, setFormdata] = useState({});
  function getFromFire() {
    const email = formData["email"];
    const password = formData["password"];
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

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
      <div className="bg-white p-8 rounded shadow-md">
        <form action="" onSubmit={getFromFire}>
          <label htmlFor="">email</label>
          <input type="email" name="email" onChange={handlechange} />
          <br />
          <label htmlFor="">password</label>
          <input type="password" name="password" onChange={handlechange} />
          <div onClick={() => getFromFire()}>login</div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
