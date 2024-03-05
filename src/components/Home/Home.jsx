import React from "react";
import style from "./Home.module.css";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import {Helmet} from "react-helmet";



export default  function Home() {

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Frech cart</title>
               
            </Helmet>
  <MainSlider/>
  <CategoriesSlider/>
  <FeaturedProduct/>
  </>;
}

  

