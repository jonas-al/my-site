import React, { Component, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import  Button  from '../components/Button'
import  SimpleSlide  from '../components/SimpleSlide'

import GitIcon from '../assets/github-svgrepo-com.svg'
import LinkedinIcon from '../assets/linkedin-svgrepo-com.svg'
import People from '../assets/people_svg.svg'
import Logo from '../assets/logo.svg'
import InstagramLogo from '../assets/instagram-logo.svg'
import TwitterLogo from '../assets/twitter-logo.svg'
import TiktokLogo from '../assets/tiktok-logo.svg'
import Site1 from '../assets/site-1.svg'


export default function Home() {
  const [stateMenu, setStateMenu] = useState(false);
  const [showProjectOne, setShowProjectOne] = useState(false)

  const handleClickMenu  = () => {
    setStateMenu(!stateMenu)
  }

  return (
    <div className='w-full h-screen absolute'>
      <header className='w-screen h-28 bg-black fixed z-10'>
        <div className="h-full flex px-10 justify-between items-center">
          <div>
            <a href='#' className="text-5xl sm:text-7xl font-heading font-bold text-white">YONAS.</a>
          </div>
          <div className="hidden md:block">
            <nav className="text-xl font-heading font-semibold text-white space-x-4" >
              <a href="#" className="p-1 rounded hover:bg-white hover:text-black">home</a>
              <a href="#projects" className="p-1 rounded hover:bg-white hover:text-black">projetos</a>
              <a href="#footer" className="p-1 rounded hover:bg-white hover:text-black">contatos</a>
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

      {stateMenu && <div className='w-screen flex mt-24 justify-end'>
        <div className="w-1/2 fixed md:hidden space-y-1 px-2 pt-2 pb-3 sm:px-3 bg-black text-end rounded-bl-lg z-10">
                    <a href="#" className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium">home</a>
                    <a href="#projects" className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium">projetos</a>
                    <a href="#footer" className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium">contatos</a>
          </div>
      </div>}

      <main>
        <section className='px-5 mt-32 justify-center w-full sm:mt-32 h-max flex lg:justify-between items-center sm:px-20 gap-x-5' id='home'>
          <div className='bg-white w-mac-window-w rounded-3xl'>
            <div className='flex pl-7 h-10 items-center gap-x-3 rounded-tl-3xl rounded-tr-3xl bg-light-gray'>
              <div className='w-4 h-4 bg-red rounded-full'></div>
              <div className='w-4 h-4 bg-yellow rounded-full'></div>
              <div className='w-4 h-4 bg-green rounded-full'></div>
            </div>
            <div className='px-8 flex flex-col md:pl-14 py-10 gap-y-16'>
              <div className='flex flex-col gap-y-5 w-full'>
                <div>
                  <p className='text-xl sm:text-2xl text-gray font-body'>Oi, me chamo</p>
                  <h1 className='inline-block max-w-[172px] text-3xl sm:text-4xl sm:max-w-[207px] text-black font-body font-bold' id='typewriter'>JONAS :D</h1>
                  <p className='text-xl sm:text-2xl text-gray font-body'>Eu sou um desenvolvedor fullstack Junior.</p>
                </div>
                <p className='text-lg sm:text-xl text-black font-details'>
                  Seja muito bem-vindo(a) ao meu portfólio!
                </p>
                <p className='text-lg sm:text-xl text-black font-details'>
                  Como já falei meu é Jonas e atualmente resido em Belém, capital do estado do Pará. Atualmente, estou cursando o sexto semestre de Ciência da Computação na Universidade Federal do Pará.
                </p>
                <p className='text-lg sm:text-xl text-black font-details'>
                  Fico muito feliz que tenha reservado um pedacinho do seu tempo para conhecer mais sobre mim e meu trabalho. Neste portfólio, você encontrará alguns dos projetos e experiências que adquiri ao longo de minha jornada acadêmica e profissional.
                </p>
                <p className='text-lg sm:text-xl text-black font-details'>{'Agradeço novamente por sua visita ❤️'}</p>
              </div>
              <div className='grid grid-cols-2 gap-y-2 gap-x-4 sm:flex sm:gap-x-5'>
                <Button
                  link={'https://github.com/jonas-al'}
                  text='GitHub'
                  icon={GitIcon}
                  />
                <Button
                    link={'https://www.linkedin.com/in/jonas-alberto/'}
                    text='LinkedIn' 
                    icon={LinkedinIcon}
                  />
                <Button
                  link={'/curriculo-jonas.pdf'}
                  text='CV' 
                  icon={null}
                />
              </div>
            </div>
          </div>
          
          <div className='hidden lg:block'>
            <Image src={People} alt='A people developer'></Image>
          </div>
        </section>
        
        <section>
          <div id='about' className='w-full mt-52 overflow-x-visible'>
            <SimpleSlide />
            <div className='w-full h-screen mt-[-480px] bg-cover bg-waves-500 
            2xl:bg-waves-1440
            xl:bg-waves-1280
            lg:bg-waves-1024
            md:bg-waves-768
            sm:bg-waves-640'></div>
          </div>
        </section>

        <section className='flex-col pb-24 justify-center items-center' id='projects' style={{background: 'linear-gradient(180deg, rgba(24, 24, 24, 0) 93.35%, #090808 99.18%, #090808 99.18%), linear-gradient(180deg, #000000 57.61%, #000000 100%)'}}>
          <h1 className='text-center text-3xl font-details font-bold text-white mb-9'>Projetos</h1>
          <div className='w-full grid grid-cols-[1fr_1fr_1fr] grid-rows-2 gap-2 px-2 2xl:px-60 xl:px-40 lg:px-20'>
            <div 
                onMouseEnter={() => setShowProjectOne(true)}
                onMouseLeave={() => setShowProjectOne(false)}
                className='flex w-full flex-col items-center justify-center rounded-3xl col-start-1 col-end-3 row-start-1 row-end-1 hover:cursor-pointer'
              >
              {showProjectOne &&
                <div className='w-full p-4 text-white z-10 absolute bg-black bg-opacity-80 rounded-md md:w-1/3'>
                  <p className='text-left text-sm sm:text-[2px] overflow-hidden'>
                    Como parte do Centro Acadêmico de Ciência da Computação da Universidade Federal do Pará, desenvolvemos um projeto utilizando tecnologias modernas, incluindo ReactJS, NextJS e Node. Nosso objetivo era criar uma plataforma que pudesse fornecer informações importantes e recursos relevantes para a comunidade acadêmica de Ciência da Computação.
                  </p>
                </div>
              }
              <Image src={Site1} alt='Site' className='rounded-3xl col-start-1 col-end-3 row-start-1 row-end-1 hover:scale-[1.02] hover:blur-[2px]'/>
            </div>
            <div className='flex rounded-3xl bg-medium-gray row-start-2 justify-center items-center hover:scale-[1.02]'>
              <p className='font-details text-xs font-bold text-justify 2xl:text-xl lg:text-xl'>EM <br/> ANDAMENTO...</p>
            </div>
            <div className='flex rounded-3xl bg-medium-gray row-start-2 justify-center items-center hover:scale-[1.02]'>
              <p className='font-details text-xs font-bold text-justify 2xl:text-xl lg:text-xl'>EM <br/> ANDAMENTO...</p>
            </div>
            <div className='flex rounded-3xl bg-medium-gray col-start-3 row-start-1 row-end-3 justify-center items-center hover:scale-[1.02]'>
              <p className='font-details text-xs font-bold text-justify 2xl:text-xl lg:text-xl'>EM <br/> ANDAMENTO...</p>
            </div>
          </div>
        </section>
      </main>

      <footer className='flex justify-between items-center w-full h-32 bg-black px-5 2xl:px-44 md:px-36' id='footer'>
        <Image src={Logo} alt='Logo'></Image>
        <div className='text-center'>
          <div className='flex gap-x-2'>
            <a href="https://www.instagram.com/yonas.al_/" target={'_blank'}>
              <Image src={InstagramLogo} alt='Instagram' className='w-[20px] sm:w-[25px]'></Image>
            </a>
            <a href="https://twitter.com/yonas_al_" target={'_blank'}>
              <Image src={TwitterLogo} alt='Twitter' className='w-[20px] sm:w-[25px]'></Image>
            </a>
            <a href="https://www.tiktok.com/@y.0nas" target={'_blank'} className='ml-[-3px]'>
              <Image src={TiktokLogo} alt='Tiktok' className='w-[20px] sm:w-[25px]'></Image>
            </a>
          </div>
          <p className='text-white font-extralight text-base font-footer'>@
            <span className='underline'>yonas</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
