"use client";
import Image from 'next/image'
import React from 'react'



import image2 from'@/assets/icons/pngwing.com (2).png'
import image1 from'@/assets/icons/pngwing.com (4).png'

function page() {
  return (
  <div className='flex justify-center flex-col items-center ml-2 mr-2 md:ml-6 md:mr-6'>
  <header className='flex items-center flex-col gap-10'>
    <h1 className='text-2xl md:text-5xl font-bold '>
      One shared Passion: <span className='text-orange-500'>Food</span> 
    </h1>
    <p className='text-gray-300 text-center mb-10'>Join Our community and share your favorite recipes!</p>
  </header>

  <main className='flex flex-col items-center '>
    <h2 className='text-xl md:text-4xl font-bold'>Community Perks</h2>
    <ul className='flex flex-col items-center '>
      <li className='flex flex-col items-center w-full'>
        <Image 
        src={image1} 
        alt="hi"
        width={200}
        height={200}
    
        />
        <p className='text-xl md:text-4xl font-bold'>Share & discover recipes</p>
      </li>
      <li className='flex flex-col items-center '>
        <Image src={image2} 
        alt="hi"
          width={300}
          height={200}
        />
        <p className='text-xl md:text-4xl font-bold'>Find new friends & like-minded people</p>
      </li>
    </ul>
  </main>
  </div>
  

  )
}

export default page
