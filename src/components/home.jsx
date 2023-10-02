<<<<<<< HEAD
import React, { useState } from "react";
=======
// import React from "react";
>>>>>>> db5eda21b97355e3674f4172c0ea31187c347d5e
import list from "../assets/college_list.json";
import { Link } from "react-router-dom";
import AddDetails from "./userDetails";
const HomePage = () => {
  const [formdata, setFormdata] = useState({});
  const college = list["TN"].map((l, index) => (
    <option key={index}>{l}</option>
  ));
  const handlechange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setFormdata({ ...formdata, [name]: value });
  };
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="p-6 w-5/6">
        <div className="flex flex-col items-end justify-center">
        <p>Are you Admin?</p>
        <Link to="/admin" className="mx-3">Login here</Link>
        </ div>
      <div className="flex justify-center">
        <b className="text-blue-600 text-center my-5 font-bold text-5xl underline  italic">-Training Trains-</b> 
      </div>
      <div>
        <div className="flex items-center justify-center text-sky-600">
        <p className="mx-12">Intern and Implant</p>
        <p className="mx-12">Training program</p> <br />
        </div>
      </div>
<<<<<<< HEAD
      <form
        className="mt-4"
        action="/"
        method="post"
        onSubmit={(e) => {
          console.log(formdata);
          e.preventDefault();
          AddDetails(formdata);
        }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
=======
      <form className="mt-4" action="/submit" method="post">
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="name" className="text-gray-900 text-xl">
>>>>>>> db5eda21b97355e3674f4172c0ea31187c347d5e
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
<<<<<<< HEAD
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
=======
            className="border border-solid border-black rounded-md p-2 mx-2 w-[75%]"
            placeholder="Enter the Name"
>>>>>>> db5eda21b97355e3674f4172c0ea31187c347d5e
            required
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="email" className="text-gray-900 text-xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter the Email"
            className="border border-solid border-black rounded-md p-2 mx-2 w-[75%]"
            required
            onChange={handlechange}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="number" className="text-gray-900 text-xl">
            Phone number
          </label>
          <input
            type="number"
            minLength={10}
            maxLength={10}
            name="number"
            id="number"
<<<<<<< HEAD
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
=======
            placeholder="Enter the Phone Number"
            className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
>>>>>>> db5eda21b97355e3674f4172c0ea31187c347d5e
            required
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="college" className="text-gray-900 text-xl">
            Select your college
          </label>
          <select
            name="college"
            id="college"
            className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
            required
            onChange={handlechange}
          >
<<<<<<< HEAD
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
=======
          <option value="none">Select the College</option>
>>>>>>> db5eda21b97355e3674f4172c0ea31187c347d5e
            {college}
          </select>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="intern" className="text-gray-900 text-xl">
            Type of Program
          </label>

          <select
            name="intern"
            id="intern"
<<<<<<< HEAD
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
            required
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
=======
            className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
          >
            <option value="none">Select the Program</option>
>>>>>>> db5eda21b97355e3674f4172c0ea31187c347d5e
            <option value="internship">Internship</option>
            <option value="implant">Implant</option>
          </select>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="course" className="text-gray-900 text-xl">
            Select the Course
          </label>
          <select
            name="course"
            id="course"
<<<<<<< HEAD
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
=======
            className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
          >
            <option value="none">Select the Course</option>
>>>>>>> db5eda21b97355e3674f4172c0ea31187c347d5e
            <option value="full-stack">Full Stack web developer</option>
            <option value="mobile">Mobile app developer</option>
            <option value="cyber">Cyber Security</option>
          </select>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="duration" className="text-gray-900 text-xl">
            Duration in months
          </label>
          <select
            name="duration"
            id="duration"
            className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
            required
            onChange={handlechange}
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg"
          type="submit"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default HomePage;
