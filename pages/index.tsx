import React, { Component, useState, useEffect } from 'react';
import Image from 'next/image'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button  from '/components/Button'
import SimpleSlide  from '/components/SimpleSlide'
import Project from '/components/Project'

import GitIcon from '/assets/github-svgrepo-com.svg'
import LinkedinIcon from '/assets/linkedin-svgrepo-com.svg'
import People from '/assets/people_svg.svg'
import Logo from '/assets/logo.svg'
import InstagramLogo from '/assets/instagram-logo.svg'
import TwitterLogo from '/assets/twitter-logo.svg'
import TiktokLogo from '/assets/tiktok-logo.svg'
import Site1 from '/assets/site-1.svg'
import Site2 from '/assets/site-2.png'
import Site3 from '/assets/site-3.png'

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  const [stateMenu, setStateMenu] = useState(false);

  const handleClickMenu  = () => {
    setStateMenu(!stateMenu)
  }

  return (
    <div className='w-full absolute'>
      <header className='w-screen h-28 bg-black fixed z-10'>
        <div className="h-full flex px-10 justify-between items-center">
          <div>
            <a href='#' className="text-5xl sm:text-7xl font-heading font-bold text-white">YONAS.</a>
          </div>
          <div className="hidden md:block">
            <nav className="text-xl font-heading font-semibold text-white space-x-4" >
              <a
                onClick={() => scroll.scrollToTop({smooth:true, duration: 500})}
                className="p-1 rounded hover:bg-white hover:text-black"
              >
                home
              </a>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-200}
                className="p-1 rounded hover:bg-white hover:text-black"
              >
                projetos
              </Link>
              <a
                onClick={() => scroll.scrollToBottom({smooth:true, duration: 500})}
                className="p-1 rounded hover:bg-white hover:text-black"
              >
                contatos
              </a>
            </nav>
          </div>
          <div className="mobile-header md:hidden">
              <button type="button" onClick={handleClickMenu} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none hover:ring-2 hover:ring-white">

                {!stateMenu && <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"   viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff6ff" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}


                {stateMenu && <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff6ff" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>}
              </button>
          </div>
        </div>
      </header>

      {stateMenu && <div className='w-screen flex mt-24 justify-end'>
        <div className="w-1/2 fixed md:hidden space-y-1 px-2 pt-2 pb-3 sm:px-3 bg-black text-end rounded-bl-lg z-10">
          <a
            className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium"
            onClick={() => {scroll.scrollToTop({smooth:true, duration: 750}), setStateMenu(!stateMenu)}}
          >
            home
          </a>
          <Link
            to="projects"
            smooth={true}
            duration={750}
            offset={-250}
            className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium"
            onClick={() => setStateMenu(!stateMenu)}
          >
            projetos
          </Link>
          <a
            className="text-gray-300 hover:bg-soft-black hover:text-white block px-3 py-2 rounded-md text-white font-medium "
            onClick={() => {scroll.scrollToBottom({smooth:true, duration: 750}), setStateMenu(!stateMenu)}}
          >
            contatos
          </a>
        </div>
      </div>}

      <main className='w-screen'>
        <section className='h-[80vh] px-5 mt-32 justify-center w-full sm:mt-32  flex xl:justify-between items-center sm:px-20 gap-x-5' id='home'>
          <div className='bg-white max-w-[400px] rounded-3xl min-[450px]:max-w-mac-window-w' data-aos="fade-up">
            <div className='flex pl-7 h-10 items-center gap-x-3 rounded-tl-3xl rounded-tr-3xl bg-light-gray'>
              <div className='w-4 h-4 bg-red rounded-full'></div>
              <div className='w-4 h-4 bg-yellow rounded-full'></div>
              <div className='w-4 h-4 bg-green rounded-full'></div>
            </div>
            <div className='px-8 sm:px-12 flex flex-col py-8 gap-y-8'>
              <div className='flex flex-col gap-y-5 w-full'>
                <div>
                  <p className='text-xl sm:text-2xl text-gray font-body'>Oi, me chamo</p>
                  <h1 className='inline-block max-w-[172px] text-3xl sm:text-4xl sm:max-w-[207px] text-black font-body font-bold' id='typewriter'>JONAS :D</h1>
                  <p className='text-xl sm:text-2xl text-gray font-body'>Eu sou um desenvolvedor fullstack Junior.</p>
                </div>
                <p className='text-lg sm:text-xl text-black font-details'>
                  Seja muito bem-vindo(a) ao meu portfólio!
                </p>
                <p className='text-lg sm:text-xl text-black font-details hidden sm:block'>
                  Atualmente resido em Belém, capital do estado do Pará. Estou cursando o sexto semestre de Ciência da Computação na Universidade Federal do Pará.
                </p>
                <p className='text-lg sm:text-xl text-black font-details'>
                  <span
                  className='hidden sm:block'
                  >
                    Fico muito feliz que tenha reservado um pedacinho do seu tempo para conhecer mais sobre mim e meu trabalho.
                  </span>
                  Neste portfólio, você encontrará alguns dos projetos e experiências que adquiri ao longo de minha jornada acadêmica e profissional.
                </p>
                <p className='text-lg sm:text-xl text-black font-details'>{'Agradeço pela sua visita ❤️'}</p>
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
          
          <div className='hidden xl:block'>
            <Image src={People} alt='A people developer' className='w-fit rounded-lg'/>
          </div>
        </section>
        
        <section>
          <div className='w-full mt-20 overflow-x-visible'>
            <h1 className='text-center text-3xl font-details font-bold text-white mb-9'>Competências</h1>
            <SimpleSlide />
            <div className='w-full h-screen mt-[-480px] bg-cover bg-waves-500 
            2xl:bg-waves-1440
            xl:bg-waves-1280
            lg:bg-waves-1024
            md:bg-waves-768
            sm:bg-waves-640'></div>
          </div>
        </section>

        <Element
          name='projects'
          className='flex-col px-6 pb-32 bg-gradient-to-b from-[black_13.55%] via-[black_90%] to-[gray_200.53%]' id='projects'
        >
          <h1 className='text-center text-3xl font-details font-bold text-white mb-9'>Projetos pessoais</h1>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-2 justify-items-center gap-6'>
            <div className='max-w-[800px]'>
              <Project
                projectImage={Site1}
                description={'Como parte do Centro Acadêmico de Ciência da Computação da Universidade Federal do Pará, desenvolvemos um projeto utilizando tecnologias modernas, incluindo ReactJS, NextJS e Node. Nosso objetivo era criar uma plataforma que pudesse fornecer informações importantes e recursos relevantes para a comunidade acadêmica de Ciência da Computação.'}
                url={'https://lucent-longma-775719.netlify.app/'}
              />
            </div>
            <div className='max-w-[800px]'>
              <Project
                projectImage={Site2}
                description={'Projeto para os grupos de estudos e pesquisas Ligados ao GT09 - Trabalho e Educação da ANPEd. Criado com React, Next.js e Tailwind. Apresentamos informações sobre os grupos, os seus integrantes e os seus contatos. O objetivo deste projeto é fornercer informações relevantes dos grupos de estudo e pesquisa que estão distribuídos pelo território nacional.'}
                url={'https://gt-brasil.netlify.app/'}
              />
            </div>
            <div className='max-w-[800px]'>
              <Project
                projectImage={Site3}
                description={'Egressos Facomp: Desenvolvido em Vue 3 com o auxílio do Tailwind CSS. Utilizando tecnologias como Java e Spring, eu e os meus colegas de turma criamos uma plataforma para a direção da faculdade de computação da UFPA mapear os egressos. Desenvolvido durante a disciplina de Laboratório de Engenharia de Software, o site atende aos requisitos do cliente e permite um mapeamento eficiente dos ex-alunos da faculdade.'}
                url={'https://egressos.computacao.ufpa.br/'}
              />
            </div>
          </div>
        </Element>
      </main>

      <footer className='flex justify-between items-center w-full h-32 bg-black px-5 2xl:px-44 md:px-36' id='footer'>
        <Image src={Logo} alt='Logo' />
        <div className='text-center'>
          <div className='flex gap-x-2'>
            <a href="https://www.instagram.com/yonas.al_/" target={'_blank'} rel="noreferrer">
              <Image src={InstagramLogo} alt='Instagram' className='w-[20px] sm:w-[25px]' />
            </a>
            <a href="https://twitter.com/yonas_al_" target={'_blank'} rel="noreferrer">
              <Image src={TwitterLogo} alt='Twitter' className='w-[20px] sm:w-[25px]' />
            </a>
            <a href="https://www.tiktok.com/@y.0nas" target={'_blank'} className='ml-[-3px]' rel="noreferrer">
              <Image src={TiktokLogo} alt='Tiktok' className='w-[20px] sm:w-[25px]' />
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
