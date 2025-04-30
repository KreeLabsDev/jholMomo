import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around items-center text-black">
      <div className="flex flex-col justify-center items-center gap-8">
        <Image
          src="/banner.png"
          alt="Khata Logo"
          height={300}
          width={300}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-sans font-semibold">Welcome to चाराली झोल म:म:</h1>

      </div>
      <Link className="w-xs" href="/dashboard">
        <Button className="w-full h-16 text-lg">Get Started</Button>
      </Link>
    </div>
  );
};

export default Homepage;
