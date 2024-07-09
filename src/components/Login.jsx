import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const isSignUpForm = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_medium.jpg"
          alt="bg-image"
        />
      </div>
      <form className="w-4/12 bg-black absolute p-12 mt-36 mx-auto right-0 left-0 rounded-lg text-white opacity-90">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sing Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            className="p-4 my-4 w-full bg-gray-800 border-solid border-2 border-"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 border-solid border-2 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 border-solid border-2"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sing Up"}
        </button>
        <p className="py-2 cursor-pointer hover:underline" onClick={isSignUpForm}>
          New to Netflix? Sign Up now
        </p>
      </form>
    </div>
  );
};

export default Login;
