import React, { useContext } from "react";
import style from "./FeaturedProducts.module.css";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";
// import { WishContext } from "../context/WishContext";


export default function FeaturedProduct() {
    function getProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    }
    

    // Use useContext to get addTocart from CartContext
    const { addTocart } = useContext(CartContext);
   
    
    // const { addTowishlist } = useContext(WishContext); // Corrected destructuring

    async function PostToCart(id) {
        try {
            const { data } = await addTocart(id);
            console.log(data); // Just for debugging, you can remove this
            if (data && data.status === 'success') {
                toast.success(data.message);
            }
        } catch (error) {
            toast.error(error.message); // Use error.message instead of data.message
        }
    }

    // async function PostToWishlist(id) { // Corrected function name
    //     try {
    //         const { data } = await addTowishlist(id);
    //         console.log(data); // Just for debugging, you can remove this
    //         if (data && data.status === 'success') {
    //             toast.success(data.message);
    //         }
    //     } catch (error) {
    //         toast.error(error.message); // Use error.message instead of data.message
    //     }
    // }

    const { data, isLoading, isFetching, isError } = useQuery('featuredProducts', getProducts);

    return (
        <>
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
                                <Link to={`/ProductDetails/${product.id}`}>
                                    <img src={product.imageCover} className="w-100" alt="" />
                                    <span className="text-main font-sm">{product.category.name}</span>
                                    <h3 className="h6">{product.title.split(" ").splice(0, 2).join(" ")}</h3>
                                    <div className="d-flex py-3 justify-content-between align-items-center">
                                        <span className="font-sm">{product.price} EGP</span>
                                        <span className="font-sm">
                                            <i className="fas fa-star rating-color me-1"></i>
                                            {product.ratingsAverage}
                                        </span>
                                    </div>
                                </Link>
                                
                               <div className="row">
                                <div className="col-md-11">
                                <button onClick={() => PostToCart(product.id)} className="btn bg-main text-main-light w-100 btn-small">
                                    Add to Cart
                                </button>
                                </div>
                                <div className="col-md-1">
                                {/* <i className="fas fa-heart" onClick={handleAddToWishlist}></i> */}
                                </div>
                               
                                
                               </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
