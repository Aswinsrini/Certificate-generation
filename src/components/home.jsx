import { useState } from "react";
import list from "../assets/college_list.json";
import { Link, useNavigate } from "react-router-dom";
import AddDetails from "./userDetails";
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase_setup/firebase';
   
    

const HomePage = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const college = list["TN"].map((l, index) => (
    <option key={index}>{l}</option>
  ));

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
        const docRef = await addDoc(collection(db, "user_details"), {
          name: formData["name"],
          email:formData["email"],
          phone:formData["number"],
          college:formData["college"],
          intern:formData["intern"],
          course:formData["course"],
          duration:formData["duration"],
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    // addUserDetails();
    navigate("/certificate", { state: formData });
  };
  // const addUserDetails = async (e) => {
  //   e.preventDefault();  
   
  //   }
  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 w-5/6">
        <div className="flex flex-col items-end justify-center">
          <p>Are you Admin?</p>
          <Link to="/admin" className="mx-3">
            Login here
          </Link>
        </div>
        <div className="flex justify-center">
          <b className="text-blue-600 text-center my-5 font-bold text-5xl underline  italic">
            -Training Trains-
          </b>
        </div>
        <div>
          <div className="flex items-center justify-center text-sky-600">
            <p className="mx-12">Intern and Implant</p>
            <p className="mx-12">Training program</p> <br />
          </div>
        </div>
        <form
          className="mt-4"
          method="post"
          onSubmit={handleSubmit} 
        >
          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="name" className="text-gray-900 text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-solid border-black rounded-md p-2 mx-2 w-[75%]"
              onChange={handleInputChange}
              placeholder="Enter the Name"
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
              onChange={handleInputChange}
              required
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
              placeholder="Enter the Phone Number"
              className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
            >
              <option value="">select the college</option>
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
              className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
              onChange={handleInputChange}
              required
            >
              <option value="">select the program</option>
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
              className="border  border-solid border-black rounded-md p-2 mx-2 w-[75%]"
              onChange={handleInputChange}
              required
            >
              <option value="">select the course</option>
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
              onChange={handleInputChange}
              required
            >
              <option value="">select the duration</option>
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