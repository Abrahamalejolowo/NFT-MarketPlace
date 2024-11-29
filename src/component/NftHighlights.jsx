import { Link } from "react-router-dom";

function NftHighlights() {
    return (
      <article className="h-[500px] md:h-[600px] lg:h-[700px]">
        <div
          style={{
            backgroundImage: `linear-gradient(to top, #9c5af2, rgba(0, 0, 0, 0.5)), url('public/image/NFT Highlight.png')`,
          }}
          className="bg-cover h-full bg-center flex justify-center items-end p-4 sm:p-6 lg:p-8"
        >
          <div className="w-full max-w-5xl lg:max-w-6xl space-y-6 flex flex-col lg:flex-row items-center justify-between">
            {/* Profile Section */}
            <div className="flex flex-col gap-6 lg:gap-10 items-center lg:items-start text-center lg:text-left">
              <div className="flex bg-[#3b3b3b] text-white px-4 py-2 rounded-full space-x-4 items-center w-fit">
                <img
                  src="public/image/Avatar (6).png"
                  alt="Shroomie"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                />
                <p className="text-sm lg:text-base font-medium">Shroomie</p>
              </div>
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
                Magic Mashrooms
              </h1>
              {/* Button */}

              <Link to={"/Marketplace"} className="flex justify-center">
                <button className="mt-6 lg:mt-0 px-8 sm:px-10 lg:px-11 py-3 sm:py-4 bg-white font-semibold rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-[#e6e6e6]">
                  <i className="text-[#a159ff] fa-regular fa-eye"></i>
                  <span className="text-[#3b3b3b]">See NFT</span>
                </button>
              </Link>
            </div>
            {/* Auction Timer */}
            <div className="bg-[#4f4f4f] bg-opacity-50 text-white rounded-md py-4 px-6 text-center space-y-2">
              <p className="text-sm lg:text-base font-medium uppercase">
                Auction ends in:
              </p>
              <p className="text-lg sm:text-xl lg:text-3xl font-bold">
                <span>00 :</span> <span>00 :</span> <span>00</span>
              </p>
              <p className="text-xs sm:text-sm lg:text-base space-x-4">
                <span>Hours</span> <span>Minutes</span> <span>Seconds</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
  export default NftHighlights;
  