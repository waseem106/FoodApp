'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

function Navlink() {
    const path=usePathname(); // it will return the current active path 
    console.log(path);
  return (
    <nav className="flex-1 flex-shrink-0 ">
        <ul className="flex flex-row gap-10 uppercase font-sans font-medium shadow-2xl md:text-2xl ">
          <li className='text-xl'>
            <Link href={"/meals"} className={path.startsWith('/meals')?" text-orange-500":"hover:text-orange-400 text2xl"} >
              Meals
            </Link>
          </li>
          <li className='text-xl'>
            <Link href={"/community"} className={path.startsWith('/community')?" text-orange-500":"hover:text-orange-400"}>
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navlink
