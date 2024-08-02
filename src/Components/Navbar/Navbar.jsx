// eslint-disable-next-line no-unused-vars
import React from "react";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full px-20 py-1">
      <Link to="/">
        <div className="text-lg font-semibold text-gray-900 dark:text-white font-roboto justify-between flex gap-2">
          <img src="/images/logo1.jpg" className="w-12 flex-row" alt="" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400  ">
            Free Palestine
          </span>{" "}
          <img src="/images/logo1.jpg" className="w-12 " alt="" />
        </div>
      </Link>
      <div className="flex justify-center item-center mx-auto">
        <NavLinks></NavLinks>
      </div>
      <div>
        <UserLinks></UserLinks>
      </div>
    </div>
  );
};

export default Navbar;
