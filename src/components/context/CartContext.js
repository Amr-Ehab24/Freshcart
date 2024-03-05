import axios from "axios";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
    let headers = {
        token: localStorage.getItem('userToken')
    }

    function addTocart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId
        }, {
            headers
        })
        .then((response) => response)
        .catch((err) => err);
    }
    function CheckOutSession(cartId,ShippingAddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
            ShippingAddress
        }, {
            headers
        })
        .then((response) => response)
        .catch((err) => err);
    }

    function getCartItems(productId) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, 
         {
            headers
        })
        .then((response) => response)
        .catch((err) => err);
    }
    function deleteCartItems(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
         {
            headers
        })
        .then((response) => response)
        .catch((err) => err);
    }
    function updateCartItems(productId, count) { // Accept count as a parameter
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
         {
            count // Pass count in the request body
        }, {
            headers
        })
        .then((response) => response)
        .catch((err) => err);
    }
    
    return (
        <CartContext.Provider value={{ addTocart ,getCartItems,deleteCartItems,updateCartItems,CheckOutSession}}>
    {props.children}
</CartContext.Provider>

    );
}
