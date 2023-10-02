import {useState} from "react";
import list from "../assets/college_list.json";
import { Link ,useNavigate} from "react-router-dom";
const HomePage = () => {
  const [formData, setFormData] = useState({
    college:"ARIYALUR ENGINNERING COLLEGE",
    intern:'Internship',
    course:"Full Stack web developer",
    duration:"1"
  });
  const navigate = useNavigate();

  const college = list["TN"].map((l, index) => (
    <option key={index}>{l}</option>
  ));
    

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    navigate(
      '/certificate',
      {state:formData}
    );
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData, 
      [name]: value 
    });
  }

  return (
    <div>
      Are you Admin?<Link to="/admin">Login</Link>
      <div className="p-6">
        <b className="text-blue-600">Training Trains</b> Intern and Implant
        Training program
      </div>
      <form className="mt-4" action="/submit" method="post">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded-md p-2 w-full"
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
          >
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
          >
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
          >
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
          >
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
