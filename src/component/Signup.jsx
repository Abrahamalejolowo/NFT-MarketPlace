import React from "react";

function Signup() {
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
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-4">
            <i className="fa-regular fa-user text-gray-400 mr-3"></i>
            <input
              type="text"
              placeholder="Username"
              required
              className="flex-1 outline-none border-none text-black text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-4">
            <i className="fa-regular fa-envelope text-gray-400 mr-3"></i>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="flex-1 outline-none border-none text-black text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-4">
            <i className="fa-solid fa-lock text-gray-400 mr-3"></i>
            <input
              type="password"
              placeholder="Password"
              required
              className="flex-1 outline-none border-none text-black text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 mb-6">
            <i className="fa-solid fa-lock text-gray-400 mr-3"></i>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="flex-1 outline-none border-none text-black text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#a259ff] text-white font-bold py-3 rounded-full hover:bg-[#9228ff] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}

export default Signup;
