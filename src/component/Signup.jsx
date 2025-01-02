import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Signup () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const pass = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User created successfully!");
      } catch (error) {
        alert("this email his already been use" );
      }
    };

  return (
    <main className="bg-[#2b2b2b] min-h-screen flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex-shrink-0">
        <img
          src='public/image/Image sign in.png'
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center bg-[#2b2b2b] w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-8">
        <div className="w-full max-w-[400px] text-center lg:text-left mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">Create Account</h1>
          <p className="text-sm text-gray-400">
            Welcome! Enter your details and start creating, collecting, and selling NFTs.
          </p>
        </div>

        {/* Form Inputs */}
        <form className="w-full max-w-[400px]">
          {/* Username */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-2 h-12">
            <i className="fa-regular fa-user text-gray-400 mr-3"></i>
            <input
              type="text"
              placeholder="Username"
              required
              className="flex-1 outline-none border-none text-black text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-2 h-12">
            <i className="fa-regular fa-envelope text-gray-400 mr-3"></i>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="flex-1 outline-none border-none text-black text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-2 h-12">
            <i className="fa-solid fa-lock text-gray-400 mr-3"></i>
            <input
              type="password"
              placeholder="Password"
              required
              className="flex-1 outline-none border-none text-black text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-6 h-12">
            <i className="fa-solid fa-lock text-gray-400 mr-3"></i>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="flex-1 outline-none border-none text-black text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#a259ff] text-white font-bold py-3 rounded-full hover:bg-[#9228ff] transition"
            onClick={pass}
          >
            Create Account
          </button>
        </form>
      <Link to={"/Login"} className="text-white mt-5">Already has an Account</Link>
      </div>
    </main>
  );
}

export default Signup;
