import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css'
import AlumniCard from '../cards/AlumniCard';

const AlumniSlider = ({heading}) => {


  // if(window.innerWidth<='1200' && window.innerWidth>='800'){
  //   setSlides(2)
  // }
  // else if(window.innerWidth<='800'){
  //   setSlides(1)
  // }

  var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:'10px',
        responsive:[
          {
            breakpoint:425,
            settings:{
              slidesToShow:2,
              centerMode:true,
              centerPadding:'20px'
            }
          },
          {
            breakpoint:500,
            settings:{
              slidesToShow:2,
              centerMode:true,
              centerPadding:'40px'
            }
          },
          {
            breakpoint:592,
            settings:{
              slidesToShow:2,
              centerMode:true,
              centerPadding:'40px'
            }
          },
          {
            breakpoint:660,
            settings:{
              slidesToShow:4,
              centerMode:true
            }
          },
        ]
      };

  return (
    < >
      <Slider {...settings} className='card-slider'>
      <div className='slider-item'>
        <AlumniCard/>
      </div>
      <div className='slider-item'>
        <AlumniCard/>
      </div>
      <div className='slider-item'>
        <AlumniCard/>
      </div>
      <div className='slider-item'>
        <AlumniCard/>
      </div>
      <div className='slider-item'>
        <AlumniCard/>
      </div>
      <div className='slider-item'>
        <AlumniCard/>
      </div>

      
    </Slider>
    </>
  )
}

export default AlumniSlider
