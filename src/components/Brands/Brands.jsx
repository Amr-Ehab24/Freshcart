import React from "react";
import style from "./Brands.module.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useQuery } from "react-query";
import { BallTriangle } from "react-loader-spinner";


const Brands= () =>{

  function getBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
}

const { data, isLoading, isFetching, isError } = useQuery('featuredBrands', getBrands);



  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
                
            </Helmet>




            {isLoading ? (
                <div>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass="d-flex justify-content-center mt-5 text-light"
                        visible={true}
                    />
                </div>
            ) : (
                <div className="row gy-4">
                    {data?.data.data.map(product => (
                        <div key={product.id} className="col-lg-3">
                            <div className="product p-2">
                               
                                    <img src={product.image} className="w-100" alt="" />
                                    
                                    {/* <h3 className="h6">{product.title.split(" ").splice(0, 2).join(" ")}</h3> */}
                                    
                               
                               
                            </div>
                        </div>
                    ))}
                </div>
            )}
  
  </>;
}
export default Brands;