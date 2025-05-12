"use client";

import React, { useEffect, useState } from 'react'
import image1 from '@/assets/icons/pngwing.com (1).png'
import image2 from '@/assets/icons/pngwing.com (2).png'
import image3 from '@/assets/icons/pngwing.com (3).png'
import image4 from '@/assets/icons/pngwing.com (4).png'
import image5 from '@/assets/icons/pngwing.com (5).png'
import image6 from '@/assets/icons/pngwing.com (6).png'
import image7 from '@/assets/icons/pngwing.com (7).png'
import image8 from '@/assets/icons/pngwing.com (8).png'
import Image from 'next/image'

const images=[
    {image:image1,alt:"image"},
    {image:image2,alt:"image"},
    {image:image3,alt:"image"},
    {image:image4,alt:"image"},
    {image:image5,alt:"image"},
    {image:image6,alt:"image"},
    {image:image7,alt:"image"},
    {image:image8,alt:"image"},
]


function Imageslideshow() {

const [currentImage,setNextImage]=useState(images[0].image)

useEffect(()=>{
    let i=0
    const interval=setInterval(()=>{
            if(i>=images.length-1)
            {
                i=0
                setNextImage(images[i].image)
            }
            setNextImage(images[i].image)
            i++
            
    },3000)
    return ()=> clearInterval(interval)
},[])


return (
    <div className="relative w-[40vh] h-[300px] md:w-[25rem] md:h-[340px] ">
    <Image 
    src={currentImage} 
    alt='images' 
    fill
    style={{objectFit:'contain'}}
    />
    </div>
    
  )
}

export default Imageslideshow
