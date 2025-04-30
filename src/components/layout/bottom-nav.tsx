import React from "react";
import { MdHome } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className="w-full h-16 bg-white shadow-md border flex items-center justify-between px-4 py-2">
      <div className="h-8 w-8 rounded-full flex justify-center items-center">
        <MdHome className="text-2xl text-gray-700" />
      </div>
      <div className="h-8 w-8 rounded-full flex justify-center items-center">
        <MdHome className="text-2xl text-gray-700" />
      </div>
      <div className="h-8 w-8 rounded-full flex justify-center items-center">
        <MdHome className="text-2xl text-gray-700" />
      </div>
      <div className="h-8 w-8 rounded-full flex justify-center items-center">
        <MdHome className="text-2xl text-gray-700" />
      </div>
      <div className="h-8 w-8 rounded-full flex justify-center items-center">
        <MdHome className="text-2xl text-gray-700" />
      </div>
    </div>
  );
};

export default BottomNav;
