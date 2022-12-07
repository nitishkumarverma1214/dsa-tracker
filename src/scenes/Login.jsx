import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Login({ setIsLoggedIn }) {
  const initialState = {
    email: "aa@aa.com",
    password: "firebase",
  };

  const [loginCred, setLoginCred] = useState(initialState);
  const navigate = useNavigate();

  const login = async () => {
    try {
      console.log(loginCred);
      await signInWithEmailAndPassword(
        auth,
        loginCred.email,
        loginCred.password
      );
      setLoginCred(initialState);
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
      <h2 className="font-roboto font-bold text-center my-4 text-2xl">Login</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        method="post"
        className="m-4 border-light-blue border-2 font-montserrat grid gap-2 p-4 md:w-3/5 md:m-auto md:grid-cols-2"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="text-dark-black p-2"
          value={loginCred.email}
          onChange={(event) =>
            setLoginCred({ ...loginCred, email: event.target.value })
          }
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-dark-black p-2"
          value={loginCred.password}
          onChange={(event) =>
            setLoginCred({ ...loginCred, password: event.target.value })
          }
        />

        <button
          className="p-2 border-white  md:mx-auto md:  border-solid border-2 m-4"
          onClick={login}
        >
          Login
        </button>
        <h3 className="md:self-center text-center">
          <Link to="/register" className="text-blue">
            Sign up{" "}
          </Link>{" "}
          for free{" "}
        </h3>
      </form>
    </div>
  );
}

export default Login;
