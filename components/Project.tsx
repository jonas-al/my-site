import Image, { StaticImageData } from 'next/image'

interface Props {
  projectImage: StaticImageData
  description: string
  url: string
}

const Project = ( {projectImage, description, url}: Props ) => {
  return (
    <div className='flex-col' data-aos="fade-up">
        <div className='p-4 border-2 border-dashed border-white rounded-lg bg-[#090909]'>
            {url
            ?
            <a href={url} target={'_blank'} rel='noreferrer'>
                <Image className='rounded-lg hover:scale-[1.02]' src={projectImage} alt='Projeto'/>
            </a>
            :
            <div className='flex bg-white rounded-lg items-center justify-center hover:scale-[1.02]'>
              <Image className='rounded-lg hover:scale-[1.02] hover:cursor-pointer opacity-0' src={projectImage} alt='Projeto'/>
              <p className='absolute font-details text-lg'>Em andamento!</p>
            </div>
          }
        </div>
        <p className='text-white font-details text-justify mt-8'>{description}</p>
    </div>
  )
}

export default Project