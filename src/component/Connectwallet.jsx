import React from "react";
import { Link } from "react-router-dom";

function Connectwallet() {
  return (
    <div className="flex bg-[#2b2b2b] flex-col md:flex-row bg-dark mix-h-screen pt-[7%]">
      <img
        src="public/image/Image sign in.png"
        alt=""
        className=" md:mix-w-[300px] md:h-[400px] lg:w-[610px] lg:h-[642px]"
      />
      {/* {wallet} */}
      <div className="lg:mt-20 m-auto lg:ml-[7%]  md:mix-ml-[4%] flex flex-col items-center">
        <h1 className="text-white text-[50px] font-bold">Connect wallet</h1>
        <p className="text-white text-base text-center mb-6">
          Choose a wallet you want to connect. <br /> There are several wallet
          providers.
        </p>
        {/* {button} */}
        <a
          href="https://metamask.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/image/Metamask.png" alt="Metamask Logo" />
        </a>
        <br />
        {/* Wallet Connect Link */}
        <a
          href="https://walletconnect.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/image/Wallet Connect.png" alt="Wallet Connect Logo" />
        </a>
        <br />

        {/* Coinbase Link */}
        <a
          href="https://www.coinbase.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/image/Coinbase.png" alt="Coinbase Logo" />
        </a>
      </div>
    </div>
  );
}

export default Connectwallet;
