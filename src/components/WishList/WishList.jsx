// import React, { useContext, useEffect, useState } from "react";
// import { WishContext } from "../context/WishContext";

// const Wishlist = () => {
//   const { wishlist, getWishlistItems, addToWishlist } = useContext(WishContext);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getWishlistItems();
//   }, []);

//   return (
//     <>
//       <div className="bg-main-light p-2 mt-5">
//         <h2>Wishlist:</h2>
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <>
//             {wishlist.length === 0 ? (
//               <p>Your wishlist is empty.</p>
//             ) : (
//               <div className="row gy-4">
//                 {wishlist.map((item) => (
//                   <div key={item.id} className="col-lg-3">
//                     <div className="product p-2">
//                       <img src={item.image} className="w-100" alt={item.title} />
//                       <h3 className="h6">{item.title.split(" ").slice(0, 2).join(" ")}</h3>
//                       <p className="font-sm">{item.price} EGP</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Wishlist;
