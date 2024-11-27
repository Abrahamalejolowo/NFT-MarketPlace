/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NFTS } from './Database';

function About() {

  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findTheItembyIdInTheDatabase = () => {
      try {
        setLoading(true);
        const itemFound = NFTS.find((data) => data.id === parseInt(id))
        console.log(itemFound);
        setData(itemFound);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);

      }

    }
    findTheItembyIdInTheDatabase();
  }, [id])

  const HandleBack = () => {
    history.back(-1)
  }

  return (
    <div className='flex'>


      {
        loading ? (<div> Loading......</div>) : (
          <div>
            {
              data && (
                <div>
                  <div>
                    <img src={data.image} alt="" />
                  </div>
                  <div>
                    <div className='flex'>
                      <img src={data.logo} className='w-4' alt="" />
                      <p className='cursor-pointer' onClick={HandleBack}>Back</p>
                    </div>
                    <p>Coin: <span>Ethereum</span></p>
                    <h1>{data.name}</h1>
                    {/* <p>floor price</p> */}
                    <p>{data.price}</p>
                    <p>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. </p>
                  </div>
                </div>
              )
            }

          </div>
        )
      }
    </div>
  )
}

export default About