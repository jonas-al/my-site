import React from 'react'
import Link from "next/link";

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
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true
            }
        },
        {
            breakpoint: 415,
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
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <Slider {...settings} >

            <div>
                <Card text='JavaScript' icon={JSIcon} />
            </div>

            <div>
                <Card text='HTML' icon={HTMLIcon} />
            </div>

            <div>
                <Card text='CSS' icon={CSSIcon} />
            </div>

            <div>
                <Card text='JavaScript' icon={JSIcon} />
            </div>

            <div>
                <Card text='React' icon={ReactIcon} />
            </div>

            <div>
                <Card text='C/C++' icon={CIcon} />
            </div>

            <div>
                <Card text='Python' icon={PythonIcon} />
            </div>

            <div>
                <Card text='React' icon={ReactIcon} />
            </div>

        </Slider>
      </div>
    );
  };

const SimpleSlide = () => {
  return (
    <div className='sm:px-8 lg:16 xl:px-28'>
        <Responsive />
    </div>
  )
}

export default SimpleSlide