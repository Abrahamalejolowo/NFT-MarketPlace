import React from "react";
import { primaryTrendingImgS } from "./Database";

function TrendingCol() {
  return (
    <section className="ml-[11b %] py-12 max-w-7xl mx-auto font-[work sans] w-[90%] -[10%]">
      <h1 className="text-4xl font-bold text-white">Trending Collection</h1>
      <p className="text-white  mt-2">
        Checkout our weekly updated trending collection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 ">
        {primaryTrendingImgS.map((item, index) => (
          <div key={index} className="">
            {/* Main Image */}
            <div className="overflow-hidden rounded-lg ">
              <img
                src={item.secImg}
                alt={item.title}
                className=" transition-transform duration-500 ease-in hover:scale-110 cursor-pointer"
              />
            </div>

            {/* Tips Section */}
            <div className="flex items-center gap-4 mt-4">
              {item.Tips.map((tip, index) => (
                <div
                  key={index}
                  className=" flex-shrink-0 overflow-hidden rounded-lg"
                >
                  <img
                    src={tip}
                    alt="Tip"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
              <div className="text-center font-[space Mono] h-[100px] w-[100px] bg-[#a159ff] text-white font-bold text-3xl flex items-center justify-center rounded-[30px] shadow-md transition-transform duration-300 hover:scale-110">
                {item.more}
              </div>
            </div>

            {/* Title */}
            <p className="mt-4 text-lg font-semibold text-white">
              {item.title}
            </p>

            {/* Profile Section */}
            <div className="flex items-center mt-4 space-x-4">
              <img
                src={item.proflieImg}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm text-gray-400">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCol;
