// import axios from "axios";
// import { createContext } from "react";

// export const WishContext = createContext();

// export default function WishContextProvider(props) {
//   let headers = {
//     token: localStorage.getItem("userToken")
//   };

//   function addToWishlist(productId) {
//     return axios
//       .post(
//         `https://ecommerce.routemisr.com/api/v1/wishlist/add`,
//         {
//           productId
//         },
//         {
//           headers
//         }
//       )
//       .then((response) => response)
//       .catch((err) => err);
//   }

//   function removeFromWishlist(productId) {
//     return axios
//       .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/remove/${productId}`, {
//         headers
//       })
//       .then((response) => response)
//       .catch((err) => err);
//   }

//   function getWishlistItems() {
//     return axios
//       .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
//         headers
//       })
//       .then((response) => response)
//       .catch((err) => err);
//   }

//   return (
//     <WishContext.Provider
//       value={{ addToWishlist, removeFromWishlist, getWishlistItems }}
//     >
//       {props.children}
//     </WishContext.Provider>
//   );
// }
