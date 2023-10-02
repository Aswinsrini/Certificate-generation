import React, { useState } from "react";
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
    <div className="p-6">
      <div>
        <b className="text-blue-600">Training Trains</b> Intern and Implant
        Training program <br />
        Are you Admin?
        <Link to="/admin">Login here</Link>
      </div>
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
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-md p-2 w-full"
            required
            onChange={handlechange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700">
            Phone number
          </label>
          <input
            type="number"
            minLength={10}
            maxLength={10}
            name="number"
            id="number"
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="college" className="block text-gray-700">
            Select your college
          </label>
          <select
            name="college"
            id="college"
            className="border rounded-md p-2 w-full"
            required
            onChange={handlechange}
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            {college}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="intern" className="block text-gray-700">
            Type of program
          </label>

          <select
            name="intern"
            id="intern"
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
            required
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="internship">Internship</option>
            <option value="implant">Implant</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="course" className="block text-gray-700">
            Select the Course
          </label>
          <select
            name="course"
            id="course"
            className="border rounded-md p-2 w-full"
            onChange={handlechange}
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="full-stack">Full Stack web developer</option>
            <option value="mobile">Mobile app developer</option>
            <option value="cyber">Cyber Security</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700">
            Duration in months
          </label>
          <select
            name="duration"
            id="duration"
            className="border rounded-md p-2 w-full"
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
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
