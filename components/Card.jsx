import React from 'react'
import Image from 'next/image'

const Card = ({ label, text, icon }) => {
  return (
    <div className='max-w-[300px] min-h-[350px] bg-gradient-to-tr from-pink to-blue rounded-md ml-2 '>
        <div className='flex p-4'>
            <Image src={icon} alt="A icon"/>
            <div className='w-full flex justify-center items-center'>
                <h1 className='font-body font-bold text-2xl text-white'>{label}</h1>
            </div>
        </div>
        
        <p className='font-details px-4 text-white text-xl text-center'>
         {text}
        </p>
    </div>
  )
}

export default Card