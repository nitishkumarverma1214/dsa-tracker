import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
function Contact() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState(initialState);
  const navigate = useNavigate();
  const handleSubmitForm = async () => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), contactForm);
      navigate("/form-submit");
    } catch {
      console.error("Error adding document: ", e);
    } finally {
      setContactForm(initialState);
    }
  };
  return (
    <div id="contact" className="border-t-2 border-t-white ">
      <h2 className="font-roboto font-bold text-center my-4 text-2xl">
        Contact Us
      </h2>
      <div className=" p-4 m-2 grid gap-2 md:w-3/5 md:m-auto">
        <label htmlFor="name" className="font-montserrat capitalize mx-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="mx-4 p-2 text-dark-black font-montserrat required:border-red-500 focus:outline-none"
          onChange={(event) =>
            setContactForm({ ...contactForm, name: event.target.value })
          }
          required
        />

        <label htmlFor="email" className="font-montserrat capitalize mx-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your  Email"
          className="mx-4 p-2 text-dark-black font-montserrat required:border-red-500 focus:outline-none"
          onChange={(event) =>
            setContactForm({ ...contactForm, email: event.target.value })
          }
          required
        />

        <label htmlFor="message" className="font-montserrat capitalize mx-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="mx-4 p-2 text-dark-black font-montserrat required:border-red-500 focus:outline-none"
          placeholder="Enter Your Message"
          onChange={(event) =>
            setContactForm({ ...contactForm, message: event.target.value })
          }
          required
        ></textarea>

        <button
          onClick={handleSubmitForm}
          className="mx-4 my-2 p-2 text-white font-montserrat font-bold border-white border-2 md:w-2/5 md:mx-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
