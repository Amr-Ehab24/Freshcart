import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import { CartContext } from "../context/CartContext";
import { BallTriangle } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getCartItems, deleteCartItems, updateCartItems } = useContext(
    CartContext
  );
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getItems() {
    let { data } = await getCartItems();
    console.log(data);
    setCart(data);
    setLoading(false);
  }

  useEffect(() => {
    getItems();
  }, []);

  async function deleteItem(id) {
    setLoading(true);
    let { data } = await deleteCartItems(id);
    console.log(data);
    setCart(data);
    setLoading(false);
  }

  async function updateItem(id, count) {
    if (count < 1) {
      setLoading(true);
      let { data } = await deleteCartItems(id);
      setCart(data);
      setLoading(false);
    } else {
      let { data } = await updateCartItems(id, count);
      console.log(data);
      setCart(data);
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Cart</title>
      </Helmet>
      <div className="bg-main-light p-2 mt-5">
        <h2>shopCart:</h2>
        {loading ? (
          <div className="loading">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass="d-flex justify-content-center mt-3 text-light"
              visible={true}
            />
          </div>
        ) : (
          <>
            {cart && (
              <>
                <p className="text-main"> NumberOfCartItems: {cart.numOfCartItems}</p>
                {cart.data && (
                  <>
                    <p className="text-main"> price: {cart.data.totalCartPrice} EGP</p>
                    {cart.data.products.map((product) => (
                      <div
                        key={product.product.id}
                        className="row border-bottom p-2 m-0 border-1 align-items-center"
                      >
                        <div className="col-md-1">
                          <div className="img">
                            <img
                              src={product.product.imageCover}
                              className="w-100"
                              alt={product.product.title}
                            />
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="item">
                            <h3 className="h6 fw-bold">{product.product.title.split(' ').slice(0,3).join(" ")}</h3>
                            <p className="text-main fw-bold"> price:{product.price} EGP</p>
                            <p>
                              <button className="btn p-0" onClick={() => deleteItem(product.product.id)}>
                                <i className="fas fa-trash-can text-danger pe-1"></i>
                                Remove
                              </button>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-1">
                          <div className="count">
                            <button onClick={() => updateItem(product.product.id, product.count + 1)} className="btn brder p-1">+</button>
                            <span className="mx-1">{product.count}</span>
                            <button onClick={() => updateItem(product.product.id, product.count - 1)} className="btn brder p-1">-</button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Link
                      to={cart.data ? `/shippingaddress/${cart.data._id}` : "/"}
                      className={`btn bg-main text-light m-3 ${cart.data ? "" : "disabled"}`}
                    >
                      Online Payment
                    </Link>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
