import React from "react";
import style from "./Categories.module.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useQuery } from "react-query";
import { BallTriangle } from "react-loader-spinner";
BallTriangle


const Categories= () =>{


  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
}
const { data, isLoading, isFetching, isError } = useQuery('featuredCategories', getCategories);

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>categories</title>
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
                        <div key={product.id} className="col-lg-4">
                            <div className="product p-2">
                               
                                    <img src={product.image} height={400} className="w-100" alt="" />
                                    
                                    <h3 className="text-main fw-bold text-center">{product.name}</h3>
                                    
                               
                               
                            </div>
                        </div>
                    ))}
                </div>
            )}
  
  
  </>;
}
export default Categories;