import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './components/context/UserContext.js';
import CartContextProvider from './components/context/CartContext.js';
import { QueryClient, QueryClientProvider } from 'react-query';
 let queryClient =new QueryClient()
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
  <UserContextProvider>
  <QueryClientProvider client={queryClient}>
    <App />
</QueryClientProvider>
  </UserContextProvider>
    </CartContextProvider> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
