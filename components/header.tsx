import Link from "next/link";
import React from "react";
import logoImg from "@/assets/icons/pngwing.com.png";
import Image from "next/image";
import Navlink from "./navlink";

function Header() {
  return (
    <header className="flex items-center flex-col gap-6 font-sans font-medium mb-5 py-2 md:flex-row">
      <Link  href={"/"}
      className="  flex flex-row items-center gap-3 uppercase  hover:text-orange-400 
      flex-1 md:text-xl md:ml-6 md:flex-[2] flex-shrink-0  w-screen px-4 justify-between md:justify-start  ">
        <Image src={logoImg} alt="this is an image"   width={50} />
        <p className="text-2xl md:text-3xl">Next Level Food</p>
      </Link>
      <Navlink />
    </header>
  );
}

export default Header;
