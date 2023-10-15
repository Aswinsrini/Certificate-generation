import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase_setup/firebase';
import { useState,useEffect } from 'react'
import emailjs from "@emailjs/browser";
// import{ useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import Certificate from './Certificate';


const AdminPage = () => {
  const [data, setData] = useState([{}]);
  const [Loading,setLoading] = useState(false);
  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "user_details"));
      let newData = {}
      querySnapshot.docs.forEach((doc) => {
        newData = [{
          college: doc.data().college,
          course: doc.data().course,
          duration: doc.data().duration,
          email: doc.data().email,
          intern: doc.data().intern,
          name: doc.data().name,
          phone: doc.data().phone
        }];
      });
      setData(newData);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  useEffect(()=>{
    fetchPost();
  }, [])
  // const handlePrint = () => {
  //   html2canvas(componentRef.current).then(canvas =>{
  //       const imgData = canvas.toDataURL('image/png')
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, 'PNG', 10, 10,190,0);
  //       // const pdf = new jsPDF('l','mm',[210,297])
  //       pdf.save('my_certificate.pdf')
  //   })
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm( 
        'service_gre09pd',
        'template_q7y9jwa',
        "some.pdf",
        // {
        //   from_name: form.email,
        //   to_name: "JG",
        //   from_email: form.email,
        //   to_email: "jgnsecrets@gmail.com",
        //   message: form.message,
        // } ,
        '9Bd-2xDT2DntOlJP8'
      )
      .then(
        () => {
          setLoading(false);
          alert("email sent succesfully!.");

          // setForm({
          //   email: "",
          //   message: "",
          // });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <>
    <h1>this is adminpage</h1>
    <div>
    <ul>
        {data?.map((doc, i) => (
          <li key={i}>
            <p>College: {doc.college}</p>
            <p>Course: {doc.course}</p>
            <p>Duration: {doc.duration}</p>
            <p>Email: {doc.email}</p>
            <p>Intern: {doc.intern}</p>
            <p>Name: {doc.name}</p>
            <p>Phone: {doc.phone}</p>
          </li>
        ))}
      </ul>
      <button className="w-40 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600">
        accept</button>
      <div>
        <br></br>
      </div>
      <button className="w-40 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600">reject</button>
    </div>
    </>
  )
}

export default AdminPage
