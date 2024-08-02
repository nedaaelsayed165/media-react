// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../AppContext/AppContext";
import images from "../../assets/images/images.jpeg";

const LeftSide = () => {
  const { user, userData } = useContext(AuthContext);

  return (
    <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
      <div className="flex flex-col items-center relative">
        <img
          className="h-28 w-full rounded-r-xl"
          src={images}
          alt="nature"
        ></img>
        <div className="absolute -bottom-4">
          <Tooltip content="Profile" placement="top">
            <Avatar
              size="md"
              src={user?.photoURL || avatar}
              alt="avatar"
            ></Avatar>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <p className="font-roboto font-medium text-[12px] text-gray-700 no-underline tracking-normal leading-none">
          {user?.email || userData?.email}
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
