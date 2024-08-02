// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import flag from "../../assets/images/flag.jfif";



const RightSide = () => {
  
  return (
    <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl">
      <div className="flex flex-col items-center relative pt-10">
        <img className="h-25 rounded-md mb-3" src={flag} alt="nature"></img>
      </div>
      <p className=" mb-5 font-roboto font-normal text-[12px] text-black max-w-fit no-underline tracking-normal leading-tight py-2 mx-2">
      ستبقى فلسطين القمر الذي ينير ليالينا والأمل الذي يحيينا.
      </p>
      
    
    </div>
  );
};

export default RightSide;
