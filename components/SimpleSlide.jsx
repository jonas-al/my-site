import React from 'react'

import Slider from "react-slick";
import Card from './Card';

import CIcon from '../assets/c-plus-plus-svgrepo-com.svg'
import CSSIcon from '../assets/css-file-format-with-brackets-svgrepo-com.svg'
import HTMLIcon from '../assets/html-svgrepo-com.svg'
import JSIcon from '../assets/js-icon.svg'
import PythonIcon from '../assets/python-language-logotype-svgrepo-com.svg'
import ReactIcon from '../assets/react-svgrepo-com.svg'

const Responsive = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true
          }
        },
        {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true
            }
        },
        {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true
            }
        },
      ]
    };
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <Slider {...settings} >
            <div>
                <Card 
                  label='JS'
                  text={'Uma linguagem de programação de alto nível e dinâmica, utilizada principalmente para desenvolvimento web e front-end.'}
                  icon={JSIcon} 
                />
            </div>

            <div>
                <Card 
                  label='HTML'
                  text={'HTML, ou Hypertext Markup Language, é uma linguagem de marcação utilizada para criar documentos que podem ser exibidos em um navegador da web.'}
                  icon={HTMLIcon} 
                />
            </div>

            <div>
                <Card 
                  label='CSS'
                  text={'CSS, ou Cascading Style Sheets, é uma linguagem de estilo utilizada para definir a aparência e o layout de documentos HTML.'}
                  icon={CSSIcon} 
                />
            </div>

            <div>
                <Card 
                  label='JS' 
                  text={'Uma linguagem de programação de alto nível e dinâmica, utilizada principalmente para desenvolvimento web e front-end.'}
                  icon={JSIcon} 
                />
            </div>

            <div>
                <Card 
                  label='React' 
                  text={'Uma biblioteca de JavaScript de código aberto utilizada para construir interfaces de usuário (UI).'}
                  icon={ReactIcon} 
                />
            </div>

            <div>
                <Card 
                  label='C/C++' 
                  text={'C++ é uma linguagem de programação de alto nível, compilada e orientada a objetos. Amplamente utilizada para desenvolvimento de sistemas.'}
                  icon={CIcon} 
                />
            </div>

            <div>
                <Card 
                  label='Python'
                  text={'Uma linguagem de programação de alto nível. Amplamente utilizada para desenvolvimento web, científico, AI, entre outros.'}
                  icon={PythonIcon} 
                />
            </div>

            <div>
                <Card 
                  label='React'
                  text={'Uma biblioteca de JavaScript de código aberto utilizada para construir interfaces de usuário (UI).'}
                  icon={ReactIcon} 
                />
            </div>

        </Slider>
      </div>
    );
  };

const SimpleSlide = () => {
  return (
    <div className='sm:px-8 lg:16 xl:px-20'>
        <Responsive />
    </div>
  )
}

export default SimpleSlide