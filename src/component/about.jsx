import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NFTS } from "./Database";

function About() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const findTheItemByIdInTheDatabase = () => {
      try {
        setLoading(true);
        const itemFound = NFTS.find((data) => data.id === parseInt(id));
        setData(itemFound || null);
        setLoading(false);
      } catch (error) {
        console.error("Error finding item:", error);
        setLoading(false);
      }
    };

    findTheItemByIdInTheDatabase();
  }, [id]);

  const handleBack = () => {
    const scrollPosition = window.scrollY;
    navigate(-1, {
      state: { scrollPosition },
    });
  };

  return (
    <div className="bg-[#2b2b2b] pt-28 min-h-screen text-white">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-bold">Loading...</p>
        </div>
      ) : data ? (
        <div className="container mx-auto px-5 lg:px-20">
          <div className="bg-[#3b3b3b] p-8 lg:p-16 rounded-lg">
            <div className="lg:flex gap-10">
              {/* Image Section */}
              <div className="flex justify-center lg:w-1/2">
                <img
                  src={data.image}
                  alt={data.name}
                  className="rounded-2xl max-w-full"
                />
              </div>

              {/* Text Section */}
              <div className="lg:w-1/2">
                <div
                  className="flex bg-[#a159ff] items-center gap-2 border border-white text-white rounded-full py-2 px-4 cursor-pointer hover:bg-[#8e4be2] transition w-[30%]"
                  onClick={handleBack}
                >
                  <i className="fa-solid fa-backward"></i>
                  <p className="font-bold">Back</p>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold mt-5">{data.name}</h1>

                <div className="flex justify-between items-center mt-5">
                  <p className="text-2xl font-bold">{data.price}</p>
                  <div className="flex items-center border border-white text-white rounded-lg py-1 px-4 hover:bg-gray-600 transition ">
                    <p className="font-bold">Rank: {data.rank}</p>
                  </div>
                </div>

                <p className="text-xl text-gray-400 mt-5 font-bold">
                  Coin: <span className="text-white">Ethereum</span>
                </p>

                <p className="mt-4">{data.about}</p>
              </div>
            </div>

            {/* BUY Button */}
            <div className="flex justify-center mt-10">
              <BuyButton />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-bold">Item Not Found</p>
        </div>
      )}
    </div>
  );
}

function BuyButton() {
  const navigate = useNavigate();

  const handleBuyClick = (e) => {
    e.preventDefault();
    if (window.confirm("Please connect your wallet to proceed.")) {
      navigate("/connect");
    }
  };

  return (
    <button
      className="bg-[#a159ff] text-white py-3 px-14 text-lg lg:text-2xl font-extrabold rounded-2xl hover:bg-[#7e40cc] transition"
      onClick={handleBuyClick}
    >
      BUY
    </button>
  );
}

export default About;
