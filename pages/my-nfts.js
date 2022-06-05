import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import { Loader, NFTCard, Banner } from '../components';
import images from '../assets';
import { shortenAddress } from '../utils/shortenAddress';
import { NFTContext } from '../context/NFTContext';

const MyNFTs = () => {
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(NFTContext);
  const [nfts, setFfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />

      </div>
    );
  }

  return (
    <div className="w-full felx justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          name="Your nifty NFTs"
          childStyles="text-center mb-4"
          parentStyles="h-80 justify-center"
        />

        <div className="flexCenter flex-col -mt-20 z-0">
          <div className="flexCenter w-40 h-40 sm:w-36 sm:h-36 p-1 bg-nft-black-2 rounded-full">
            <Image
              src={images.creator1}
              className="rounded-full object-cover"
            />

          </div>
          <p className="font-poppins text-white text-nft-black-1 font-semibold text-2xl mt-6">{shortenAddress(currentAccount)}</p>
        </div>

      </div>

      {

        !isLoading && nfts.length === 0 ? (
          <div className="flexCenter sm:p-4 p-16">
            <h1 className="font-poppins dark:text-white text-nft-black-1 font-extrabold text-3xl">No NFT's Owned</h1>
          </div>
        ) : (
          <div className="sm:px-4 p-12 w-full minmd:4/5 flexCenter flex-col">
            <div className="flex-1 w-full flex flex-row sm:flex-col px-4 xs:p-0 minlg:px-8">

              SearchBar
            </div>
            <div className="mt-3 w-full flex flex-wrap">

              {
              nfts.map((nfts) => (
                <NFTCard
                  key={nft.token}
                  nft={nft}
                />
              ))

              }
            </div>

          </div>

        )
      }

    </div>
  );
};

export default MyNFTs;
