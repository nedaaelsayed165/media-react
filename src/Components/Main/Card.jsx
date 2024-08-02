// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = ({ name, img, status }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-50 w-46 rounded-full hover:scale-105 duration-700 cursor-pointer shadow-lg"
          src={img}
          alt={name}
        ></img>
        <p className=" absolute bottom-4 left-4 text-[8px] font-medium text-white font-roboto no-underline leading-none">
          {name}
        </p>
        <p
          className={`${
            status === "Offline"
              ? "absolute bottom-4 right-4 text-[8px] font-medium text-red-600 font-roboto no-underline leading-none"
              : "absolute bottom-4 right-4 text-[8px] font-medium text-green-600 font-roboto no-underline leading-none"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default Card;
