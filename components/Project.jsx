import React from 'react'
import Image from 'next/image'

const Project = ({projectImage, description, url}) => {
  return (
    <div className='flex-col max-w-[500px] md:w-[500px]'>
        <div className='p-4 border-2 border-dashed border-white rounded-lg bg-[#090909]'>
            {url
            ?
            <a href={url} target={'_blank'} rel='noreferrer'>
                <Image className='rounded-lg hover:scale-[1.02]' src={projectImage} alt='Projeto'/>
            </a>
            :
            <div className='flex bg-white rounded-lg items-center justify-center hover:scale-[1.02]'>
              <Image className='rounded-lg hover:scale-[1.02] opacity-0' src={projectImage} alt='Projeto'/>
              <p className='absolute font-details text-lg'>Em andamento!</p>
            </div>
          }
        </div>
        <p className='text-white font-details text-justify mt-8'>{description}</p>
    </div>
  )
}

export default Project