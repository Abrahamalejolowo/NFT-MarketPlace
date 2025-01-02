import React from "react";
import { primaryTrendingImgS } from "./Database";

function TrendingCol() {
  return (
    <section className="ml-[5 %] py-12 max-w-7xl mx-auto font-sans w-[90%]">
      <h1 className="text-4xl font-bold text-white">Trending Collection</h1>
      <p className="text-white mt-2">
        Check out our weekly updated trending collection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {primaryTrendingImgS?.map((item, index) => (
          <div key={index} className="bg-[#363636] p-4 rounded-lg">
            {/* Main Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.secImg}
                alt={item.title}
                className="transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer w-full"
              />
            </div>

            {/* Tips Section */}
            <div className="flex items-center gap-4 mt-4">
              {item.Tips?.map((tip, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 overflow-hidden rounded-lg w-16 h-16"
                >
                  <img
                    src={tip}
                    alt={`Tip ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
              <div className="text-center font-mono h-24 w-24 bg-purple-600 text-white font-bold text-3xl flex items-center justify-center rounded-2xl shadow-md transition-transform duration-300 hover:scale-110">
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
                alt={`Profile of ${item.name}`}
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
