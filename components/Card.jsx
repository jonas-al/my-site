import React from 'react'
import Image from 'next/image'

const Card = ({ label, text, icon }) => {
  return (
    <div className='h-[400px] mr-2 bg-gradient-to-tr from-pink to-blue rounded-md ml-2 min-[450px]:h-[390px] sm:h-[400px] lg:h-[450px] xl:h-[420px] 2xl:h-[400px]'>
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