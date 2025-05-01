import React from "react";
import { Card } from "@/components/ui/card";
import { FaHistory, FaPlusCircle } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import Link from "next/link";

const CARD_ITEMS = [
  {
    title: "All transactions",
    icon: <FaHistory className="text-4xl text-gray-500" />,
    link: "/transactions",
  },
  {
    title: "Stock Overview",
    icon: <LuBoxes className="text-4xl text-gray-500" />,
    link: "/stock",
  },
  {
    title: "All Parties",
    icon: <IoPeople className="text-4xl text-gray-500" />,
    link: "/parties",
  },
  {
    title: "View Reports",
    icon: <HiDocumentReport className="text-4xl text-gray-500" />,
    link: "reports",
  },
];

const Dashboard = () => {
  return (
    <div className="w-screen min-w-full px-4 flex flex-col justify-center items-center gap-8">
      <div className="mt-12 w-full flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome Boss!</h1>
        <p className="text-md">{new Date(Date.now()).toDateString()}</p>
      </div>

      <div className="w-full grid grid-cols-2 gap-4">
        {CARD_ITEMS.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.title}
              className="w-full h-40 flex justify-center items-center"
            >
              <Card className="w-full h-40 bg-white shadow-md rounded-lg">
                <div className="h-full w-full flex flex-col justify-around items-center">
                  {item.icon}
                  <h2 className="text-lg font-sans">{item.title}</h2>
                </div>
              </Card>
            </Link>
          );
        })}
        <Link
          href={"/order"}
          className="w-full h-40 flex justify-center items-center col-span-2"
        >
          <Card className="w-full h-40 bg-black text-white shadow-md rounded-lg">
            <div className="h-full w-full flex flex-col justify-around items-center">
              <FaPlusCircle className="text-4xl" />
              <h2 className="text-lg font-sans">Create new Sales</h2>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
