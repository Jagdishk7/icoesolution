import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css'

const CardSlider = ({heading}) => {


  // if(window.innerWidth<='1200' && window.innerWidth>='800'){
  //   setSlides(2)
  // }
  // else if(window.innerWidth<='800'){
  //   setSlides(1)
  // }

  var settings = {
        dots: true,
        // infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,

        centerPadding:'20px',
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
              slidesToShow:3,
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
          {
            breakpoint:963,
            settings:{
              slidesToShow:5,
              centerMode:false
            }
          },
          {
            breakpoint:1200,
            settings:{
              slidesToShow:6,
              centerMode:false
            }
          }
        ]
      };

  return (
    < >
      <Slider {...settings} className='card-slider'>
      <div className='slider-item'>
        {/* <img src="assets/icoess-logo.png" alt="" /> */}
        <p>Full Stack Web Development</p>
      </div>
      <div className='slider-item'>
        {/* <img src="assets/icoess-logo.png" alt="" /> */}
        <p>Full Stack Web Development</p>
      </div>
      <div className='slider-item'>
        {/* <img src="assets/icoess-logo.png" alt="" /> */}
        <p>Full Stack Web Development</p>
      </div>
      <div className='slider-item'>
        {/* <img src="assets/icoess-logo.png" alt="" /> */}
        <p>Full Stack Web Development</p>
      </div>
      <div className='slider-item'>
        {/* <img src="assets/icoess-logo.png" alt="" /> */}
        <p>Full Stack Web Development</p>
      </div>

      
    </Slider>
    </>
  )
}

export default CardSlider
