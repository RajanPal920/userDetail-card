
import React from 'react'

const Card = () => {
  return (
    <div className='bg-neutral-300 border m-4 w-80 h-80 rounded-lg flex flex-col items-center justify-center gap-1 p-2'>
       <img className='w-30 h-30 object-center object-cover rounded-full'  src="https://i.pinimg.com/1200x/0e/8f/1c/0e8f1ca5126a5b030f02feb4c1d99368.jpg" alt="" />
       <h1 className='text-2xl font-normal'>raj</h1>
       <h2 className='text-blue-700'>Developer</h2>
       <p className='text-lg font-medium' >Lorem ipsum dolor sit amet.</p>
      
    </div>
  )
}

export default Card
