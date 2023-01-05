import React, { Component, useState } from 'react';
import Image from 'next/image'

import  Button  from '../components/Button'
import  SimpleSlide  from '../components/SimpleSlide'

import GitIcon from '../assets/github-svgrepo-com.svg'
import LinkedinIcon from '../assets/linkedin-svgrepo-com.svg'
import People from '../assets/people_svg.svg'
import Waves from '../assets/layered-waves-haikei.svg'


export default function Home() {
  const [stateMenu, setStateMenu] = useState(false);

  const handleClickMenu  = () => {
    setStateMenu(!stateMenu)
  }

  return (
    <div className="">
      <header className='h-28 bg-black' >
        <div className="h-full flex px-10 justify-between items-center">
          <div>
            <h1 className="text-5xl sm:text-7xl font-heading font-bold text-white ">YONAS.</h1>
          </div>
          <div className="hidden md:block">
            <nav className="text-xl font-heading font-semibold text-white space-x-4" >
              <a href="./" className="p-1 rounded hover:bg-white hover:text-black">home</a>
              <a href="./" className="p-1 rounded hover:bg-white hover:text-black">sobre min</a>
              <a href="./" className="p-1 rounded hover:bg-white hover:text-black">projetos</a>
              <a href="./" className="p-1 rounded hover:bg-white hover:text-black">contatos</a>
            </nav>
          </div>
          <div className="mobile-header md:hidden">
              <button type="button" onClick={handleClickMenu} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none hover:ring-2 hover:ring-white">

                {!stateMenu && <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"   viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff6ff" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}


                {stateMenu && <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff6ff" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>}
              </button>
          </div>
        </div>
      </header>

      {stateMenu && <div className='w-screen flex justify-end'>
        <div className="w-1/2 block md:hidden space-y-1 px-2 pt-2 pb-3 sm:px-3 bg-black text-end rounded-bl-lg">
                    <a href="#" className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium">home</a>
                    <a href="#" className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium">sobre min</a>
                    <a href="#" className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium">projetos</a>
                    <a href="#" className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium">contatos</a>
          </div>
      </div>}

      <main>
        <section className='px-5 mt-20 justify-center w-full sm:mt-32 h-max flex lg:justify-between items-center sm:px-20 gap-x-5' id='home'>
          <div className='bg-white w-mac-window-w rounded-3xl'>
            <div className='flex pl-7 h-10 items-center gap-x-3 rounded-tl-3xl rounded-tr-3xl bg-light-gray'>
              <div className='w-4 h-4 bg-red rounded-full'></div>
              <div className='w-4 h-4 bg-yellow rounded-full'></div>
              <div className='w-4 h-4 bg-green rounded-full'></div>
            </div>
            <div className='pl-8 flex flex-col md:pl-14 py-10 gap-y-16'>
              <div className='flex flex-col gap-y-5 w-3/4'>
                <div>
                  <p className='text-xl sm:text-2xl text-gray font-body'>hi, im</p>
                  <h1 className='text-3xl sm:text-4xl text-black font-body font-bold'>JONAS :D</h1>
                  <p className='text-xl sm:text-2xl text-gray font-body'>I am an aspiring full stack developer</p>
                </div>
                <p className='text-xl sm:text-2xl text-black font-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem.
                </p>
              </div>
              <div className='grid grid-cols-2 gap-y-2 gap-x-4 sm:flex sm:gap-x-5'>
                <Button text='GitHub' icon={GitIcon}></Button>
                <Button text='LinkedIn' icon={LinkedinIcon}></Button>
                <Button text='CV' icon={null}></Button>
              </div>
            </div>
          </div>
          
          <div className='hidden lg:block'>
            <Image src={People} alt='A people developer'></Image>
          </div>
        </section>
        
        <section>
          <div id='about' className='w-full mt-52 mb-10 overflow-x-visible'>
            <div className='w-full h-full absolute bg-cover bg-waves-500 
            2xl:bg-waves-1440
            xl:bg-waves-1280
            lg:bg-waves-1024
            md:bg-waves-768
            sm:bg-waves-640'> aaaaaaaa</div>
            <SimpleSlide></SimpleSlide>
          </div>
          
        </section>

      </main>

      <footer className='h-96 bg-black'>

      </footer>


    </div>
  )
}
