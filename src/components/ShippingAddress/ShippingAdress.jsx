import React, { useContext } from "react";
import style from './ShippingAddress.module.css'
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function ShippingAdress() {
  let { CheckOutSession } = useContext(CartContext);
  let { cartId } = useParams();

  const checkOut = async (values) => {
   try {
     const { data } = await CheckOutSession(cartId, values);
     console.log(data);
     if (data && data.status === 'success') {
       window.location.href = data.session.url;
     }
   } catch (error) {
     console.error("Error checking out:", error);
   }
 };
 

  let formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: ''
    }, 
    onSubmit: checkOut
  });

  return (
    <div className="w-75 mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">Details</label>
        <input onChange={formik.handleChange} type="text" id="details" name="details" className="form-control mb-3"/>
        <label htmlFor="phone">Phone</label>
        <input onChange={formik.handleChange} type="tel" id="phone" name="phone" className="form-control mb-3"/>
        <label htmlFor="city">City</label>
        <input onChange={formik.handleChange} type="text" id="city" name="city" className="form-control mb-3"/>
        <button className="btn bg-main p-2 text-light" type="submit">CheckOut</button>
      </form>
    </div>
  );
}
