'use client'

import React from 'react'

function Error() {
  return (
    <div className='flex items-center justify-center flex-col '>
       <h1 className='text-center font-bold text-2xl md:font-extrabold md:text-8xl text-orange-500'>An Error Occured!</h1>
       <p className='text-center text-xl my-5'>Failed to fetch meal data. Please try again later</p>
      
    </div>
  )
}

export default Error
