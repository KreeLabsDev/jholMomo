import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-black">
      <h1 className="text-3xl font-sans">Welcome to चाराली झोल म:म:</h1>
      <Image
        src="/banner.png"
        alt="Khata Logo"
        height={300}
        width={300}
        className="rounded-full shadow-lg"
      />
      <Link href="/dashboard">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Homepage;
