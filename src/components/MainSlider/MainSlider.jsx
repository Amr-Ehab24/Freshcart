import React from "react";
import style from "./MainSlider.module.css"
import slide1 from '../../assests/images/slider-image-3.jpeg'
import slide2 from '../../assests/images/slider-image-2.jpeg'
import slide3 from '../../assests/images/slider-image-1.jpeg'
import img1 from  '../../assests/images/grocery-banner.png'
import img2 from '../../assests/images/grocery-banner-2.jpeg'
import Slider from "react-slick";

export  default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return <>
  <div className="row my-3 gx-0">
    <div className="col-md-9">
        <Slider {...settings}>
            <img src={slide1} height={400} className="w-100" alt="" />
            <img src={slide2}   height={400} className="w-100" alt="" />
            <img src={slide3}   height={400} className="w-100" alt="" />
        </Slider>
    </div>
    <div className="col-md-3">
        <div className="img">
            <img src={img1} className="w-100" height={200} alt="" />
            <img src={img2} className="w-100" height={200} alt="" />
            
        </div>
    </div>
  </div>
  
  
  
  </>;
}