"use client";
import React from "react";
import { MdHome } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    name: "Home",
    icon: <MdHome className="text-2xl text-gray-700" />,
    path: "/dashboard",
  },
  {
    name: "Transactions",
    icon: <FaHistory className="text-lg text-gray-700" />,
    path: "/transactions",
  },
  { name: "Add", icon: <FaPlus className="text-2xl text-gray-200" /> },
  {
    name: "Stock",
    icon: <FaShoppingCart className="text-xl text-gray-700" />,
    path: "/stock",
  },
  {
    name: "Parties",
    icon: <BsFillPeopleFill className="text-2xl text-gray-700" />,
    path: "/parties",
  },
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-16 bg-white shadow-md border flex items-center justify-between px-4 py-2">
      {NAV_ITEMS.map((item, index) => {
        return item.name !== "Add" ? (
          <div
            key={index}
            className={`h-full p-1 rounded-full flex flex-col justify-between items-center hover:bg-gray-200 ${
              pathname === item.path ? "bg-gray-200" : ""
            }`}
          >
            {item.icon}
            <p className="text-xs">{item.name}</p>
          </div>
        ) : (
          <div key={item.name} className="mb-10 h-16 w-16 p-1 bg-black rounded-full flex flex-col justify-around items-center">
            <FaPlus className="text-2xl text-gray-200" />
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
