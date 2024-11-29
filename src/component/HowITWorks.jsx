import React from "react";
import { works } from "./Database";
import { useState } from "react";



function HowITWorks() {
  return (
    <section className="px-[9%] py-8 lg:py-12 text-white">
      <div className=" space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
          How it works
        </h1>
        <h5 className="text-sm sm:text-base lg:text-3xl">
          Find out how to get started
        </h5>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <div
            key={index}
            className="flex flex-row lg:flex-col items-center text-center px-6 py-8 bg-[#3b3b3b] rounded-lg shadow-md transition duration-300 hover:scale-105"
          >
            <img
              src={work.work_image}
              alt={work.work_title}
              className="w-16 h-16 lg:w-[80%] lg:h-[200px] mb-4 object-contain"
            />
            <div className="ml-4 ">
              <h1 className="text-lg sm:text-xl  text-left lg:text-2xl lg:text-center font-semibold">
                {work.work_title}
              </h1>
              <p className="text-sm text-left lg:text-center sm:text-base text-gray-300 mt-2">
                {work.work_describtion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* line two */}
      <div className="bg-[none]  lg:bg-[#3b3b3b] rounded-lg mt-11 flex flex-col lg:flex-row justify-between items-center px-5 py-11 space-y-5 lg:space-y-0">
        <img src="public/image/Photo.png" className=" object-contain" />
        <div className="text-center lg:text-left space-y-3 lg:space-y-2">
          <h1 className="text-lg lg:text-xl font-bold text-white">
            Join Our Weekly Digest
          </h1>
          <h3 className="text-sm lg:text-base text-gray-300">
            Get Exclusive Promotions & Updates Straight To Your Inbox.
          </h3>
          
          <div className="flex flex-col space-y-4 w-full sm:flex-col sm:space-y-4 lg:flex-row lg:items-center lg:space-x-2 relative">
          </div>
          <div className="flex flex-col space-y-4 w-full sm:flex-col sm:space-y-4 lg:flex-row lg:items-center lg:space-x-2 ">
            <SubscriptionForm/>
          </div>
        </div>
        
      </div>
    </section>
  );
}


const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Thank you for subscribing!");
    setEmail(""); 
  };

  return (
    <div className="flex rounded-full bg-white  p-1 lg:w-[78%]">
      <input
        type="email"
        placeholder="Enter your email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update the state on input change
        className="lg:px-8 py-3 px-5 text-sm text-gray-700 outline-none rounded-2xl"
      />
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-full hover:bg-purple-600"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
    </div>
  );
};
export default HowITWorks;
