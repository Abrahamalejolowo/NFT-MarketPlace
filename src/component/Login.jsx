import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const Google = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(err);
    }
  };

  return (
    <main className="bg-[#2b2b2b] min-h-screen flex flex-col lg:flex-row pt-20 lg:pt-0">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex-shrink-0">
        <img
          src="/image/Image sign in.png" 
          alt="Sign In Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center bg-[#2b2b2b] w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-8">
        <div className="w-full max-w-[400px] text-center lg:text-left mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">Login</h1>
          <p className="text-sm text-gray-400">Welcome back! Enter your details</p>
        </div>

        {/* Form Inputs */}
        <form className="w-full max-w-[400px]">
          {/* Email */}
          <div className="flex items-center bg-white rounded-full px-8 h-16 py-3 text-2xl mb-4">
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
          <div className="flex items-center bg-white rounded-full px-8 py-3 mb-4 h-16 text-2xl">
            <i className="fa-solid fa-lock text-gray-400 mr-3"></i>
            <input
              type="password"
              placeholder="Password"
              required
              className="flex-1 outline-none border-none text-black text-sm"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#a259ff] text-white font-bold py-3 rounded-full hover:bg-[#9228ff] transition h-16"
            onClick={submit}
          >
            Log in
          </button>

          {/* Google Login Button */}
          <button
            className="w-full bg-red-500 text-white font-bold py-3 rounded-full mt-4 hover:bg-red-600 transition h-16"
            onClick={Google}
          >
            Log in with Google
          </button>
        </form>
        <a href="#" className="text-white lg:ml-[35%] mt-3">
          Forgot password?
        </a>
      </div>
    </main>
  );
}

export default Login;
