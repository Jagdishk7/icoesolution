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
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        responsive:[
          {
            breakpoint:425,
            settings:{
              slidesToShow:1,
              centerMode:true,
              centerPadding:'20px'
            }
          },
          {
            breakpoint:592,
            settings:{
              slidesToShow:1,
              centerMode:true,
              centerPadding:'40px'
            }
          },
          {
            breakpoint:660,
            settings:{
              slidesToShow:1,
              centerMode:true
            }
          },
          {
            breakpoint:963,
            settings:{
              slidesToShow:2,
              centerMode:false
            }
          },
          {
            breakpoint:1200,
            settings:{
              slidesToShow:3,
              centerMode:false
            }
          }
        ]
      };

  return (
    <div >
      <Slider {...settings} className='card-slider'>
      <div>
        <img src="assets/icoess-logo.png" alt="" />
      </div>
      <div>
        <img src="assets/icoess-logo.png" alt="" />
      </div>
      <div>
        <img src="assets/icoess-logo.png" alt="" />
      </div>
      <div>
        <img src="assets/icoess-logo.png" alt="" />
      </div>
      <div>
        <img src="assets/icoess-logo.png" alt="" />
      </div>
    </Slider>
    </div>
  )
}

export default CardSlider
