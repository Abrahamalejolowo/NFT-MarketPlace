import React from 'react'

function Connectwallet() {
  return (
    <div className='flex bg-[#2b2b2b] flex-col md:flex-row bg-dark mix-h-screen pt-[7%]'>
      <img src="./src/image/Image Placeholder.png" alt="" className=' md:mix-w-[300px] md:h-[400px] lg:w-[610px] lg:h-[642px]' />
      {/* {wallet} */}
      <div className='lg:mt-20 m-auto lg:ml-[7%]  md:mix-ml-[4%] flex flex-col items-center'>
        <h1 className='text-white text-[50px] font-bold'>Connect wallet</h1>
        <p className='text-white text-base text-center mb-6'>Choose a wallet you want to connect. <br /> There are several wallet providers.</p>
        {/* {button} */}
        <a href=''>
          <img src="src/image/Metamask.png" alt="" />
        </a><br />
        <a href="">
          <img src="src/image/Wallet Connect.png" alt="" />
        </a><br />
        <a href="">
          <img src="src/image/Coinbase.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Connectwallet
