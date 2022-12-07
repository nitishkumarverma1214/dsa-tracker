import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register({ setIsLoggedIn }) {
  const initialState = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [registerCred, setRegisterCred] = useState(initialState);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerCred.email,
        registerCred.password
      );

      setRegisterCred({ initialState });
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted");
  };

  return (
    <div>
      <h2 className="font-roboto font-bold text-center my-4 text-2xl">
        Sign Up
      </h2>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="m-4 border-light-blue border-2 font-montserrat grid gap-2 p-4 md:w-3/5 md:m-auto md:grid-cols-2"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="text-dark-black p-2"
          onChange={(event) =>
            setRegisterCred({ ...registerCred, email: event.target.value })
          }
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-dark-black p-2"
          onChange={(event) =>
            setRegisterCred({ ...registerCred, password: event.target.value })
          }
        />

        <button
          className="p-2 border-white  md:mx-auto md:  border-solid border-2 m-4"
          onClick={register}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
