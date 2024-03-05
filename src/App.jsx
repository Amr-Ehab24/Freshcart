import logo from './logo.svg';
import './App.css';

import LayOut from "./components/LayOut/LayOut"
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Categories from "./components/Categories/Categories"
import Brands from "./components/Brands/Brands"
import Cart from "./components/Cart/Cart"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import NotFound from "./components/NotFound/NotFound"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  {UserContext } from './components/context/UserContext';
import UserContextProvider from './components/context/UserContext';

import { useContext} from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Toaster } from 'react-hot-toast';
import { ShippingAdress } from './components/ShippingAddress/ShippingAdress';
// import { WishList } from './components/WishList/WishList';
import WishList from './components/WishList/WishList';



function App() {


 const routes = createBrowserRouter([

  {path:"",element:<LayOut/>,children:[
    {index: true,element:<ProtectedRoute><Home/> </ProtectedRoute>},
    {path:"products",element:<ProtectedRoute><Products/> </ProtectedRoute>},
    {path:"categories",element:<ProtectedRoute><Categories/> </ProtectedRoute>},
    {path:"brands",element:<ProtectedRoute><Brands/> </ProtectedRoute>},
    {path:"productDetails/:id",element:<ProtectedRoute><ProductDetails/> </ProtectedRoute>},
    {path:"cart",element:<ProtectedRoute><Cart/> </ProtectedRoute>},
    {path:"shippingaddress/:cartId",element:<ProtectedRoute><ShippingAdress/> </ProtectedRoute>},
    
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"*",element:<NotFound/>}
  ]}
])




  return (
   <>
  
    <UserContextProvider>
      
    <RouterProvider router={routes}></RouterProvider>
    <Toaster/>

    </UserContextProvider>

    </>
   
  );
}

export default App;
