"use client";
import React from "react";
import { MdHome } from "react-icons/md";
import { FaHistory, FaShoppingCart, FaPlus } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

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

  return (
    <div className="w-full max-h-20 relative bg-white shadow-md border flex justify-around items-center px-4 py-2">
      {NAV_ITEMS.map((item) => {
        return item.name === "Add" ? (
          <Link href="/order" key={item.name} className="flex flex-col justify-center items-center h-16 w-16 p-3 bg-black rounded-full hover:bg-gray-700">
            <FaPlus className="text-2xl text-gray-200" />
          </Link>
        ) : (
          <Link
            href={item.path as string}
            key={item.name}
            className={`w-10 flex flex-col justify-center items-center p-1 rounded-full hover:bg-gray-200`}
          >
            {item.icon}
            <p className="text-xs mt-1">{item.name}</p>
          </Link>
        );
      })}

      {/* {NAV_ITEMS.map((item) => {
        return item.name === "Add" ? (
          <div key=""></div>
        ) : (
          <div
            key={item.name}
            className={`h-12 flex flex-col justify-center items-center p-1 rounded-full hover:bg-gray-200 ${
              pathname === item.path ? "bg-gray-200" : ""
            }`}
          >
            {item.icon}
            <p className="text-xs mt-1">{item.name}</p>
          </div>
        );
      })} */}

      {/* <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex flex-col justify-center items-center h-16 w-16 p-3 bg-black rounded-full hover:bg-gray-700">
              <FaPlus className="text-2xl text-gray-200" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>Sales</DropdownMenuItem>
            <DropdownMenuItem>Party</DropdownMenuItem>
            <DropdownMenuItem>Stock</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
    </div>
  );
};

export default BottomNav;
