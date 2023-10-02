import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";

const AddDetails = async (e) => {
  console.log("object");
  try {
    const docRef = await addDoc(collection(db, "users"), {
      todo: e,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  console.log("object 2");
};
export default AddDetails;
