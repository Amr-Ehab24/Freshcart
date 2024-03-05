import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import Slider from "react-slick";
import { Helmet } from "react-helmet";


const ProductDetails= () =>{
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const[productDetails,setProductDetails]=useState({})
    const [loading ,setLoading]=useState(true)
  let {id}= useParams()
  async function getProductDetails(id){
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setProductDetails(data.data)
    setLoading(false)


  }
  useEffect(()=>{
    getProductDetails(id)
  },[])
  return <>
   {
    loading?<div>
             <BallTriangle
  height={100}
  width={100}
  radius={5}
  
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass="d-flex justify-content-center mt-5 text-light "
  visible={true}
  />
    </div>
  
  
   : 
             <>
             <Helmet>
                <meta charSet="utf-8" />
                <title>{productDetails.title}</title>
                
            </Helmet>
   
   
   
   <div className="row align-items-center">
    <div className="col-md-4">
    <Slider {...settings}>
   {productDetails.images.map(image => <img src={image} key={image} className="w-100" alt={productDetails.title}/>)}
</Slider>


    </div>
    <div className="col-md-8">
      <div className="details">
        <h3 className="h5">{productDetails.title}</h3>
        <p className="py-3">{productDetails.description}</p>
        <span className="text-main font-sm">{productDetails.category.name}</span>

        <div className="d-flex py-3 justify-content-between align-items-center">
        

                <span className="font-sm">{productDetails.price} EGP</span>
                <span className="font-sm">
                    <i className="fas fa-star rating-color me-1"></i>
                    {productDetails.ratingsAverage}</span>


            </div>
            <button className="btn bg-main text-main-light w-100 btn-small"> Add to Cart</button>

      </div>
    </div>
   </div>
   </>
}
  </>
  

  


  }
export default ProductDetails;