import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type MealsItemProps={
    title:string;
    slug:string;
    creator:string;
    summary:string;
    image:string;
}

function Mealitem({title,slug,creator,summary,image}:MealsItemProps) {
  return (
    <article>
        <header>
            <Image src={image} alt=''/>
            <div>
                <h2>{title}</h2>
                <p>by {creator}</p>
            </div>
        </header>
        <div>
            <p>{summary}</p>
            <div>
                <Link href={`/meals/${slug}`}>View Details</Link>
            </div>
        </div>
    </article>
      
  )
}

export default Mealitem
