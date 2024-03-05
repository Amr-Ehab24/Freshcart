import React, { useContext } from "react";
import style from "./NavBar.module.css"
import logo from "../../assests/images/freshcart-logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function NavBar() {
  let {userToken,setUserToken}=useContext(UserContext)
  let navigate =useNavigate()
  function logOut(params) {
    localStorage.removeItem('userToken')

    setUserToken(null)
    navigate('/Login')
   
    
  }
  return<><nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to={'/'}>
    <img src={logo} alt="Freshcart" />
    
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
        

        {userToken!=null?<>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" to={"/"}> <i class="fa-solid fa-house"></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"cart"}> <i class="fa-solid fa-cart-shopping"></i> Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"categories"}> <i class="fa-solid fa-list"></i> categories</Link>
        </li>
        
      
        <li className="nav-item">
          <Link className="nav-link" to={"brands"}> <i class="fa-solid fa-certificate"></i> Brands</Link>
        </li>
      
          </ul>
          </>
          :" "
        
        
        
        }
       
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item d-flex align-items-center">
          <i className="fab fa-facebook me-2"></i>
          <i className="fab fa-twitter me-2"></i>
          <i className="fab fa-instagram me-2"></i>

          <i className="fab fa-youtube me-2"></i>
          
        </li>
        {userToken!=null?<>
          <li class="nav-item d-flex align-items-center ms-1">
          <span  onClick={logOut} class="nav-span cursor-pointer text-danger">LogOut</span>
        </li>
      
        
        
        </>:<>
        <li class="nav-item">
          <Link class="nav-link" to={"register"}>Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"login"}>Login</Link>
        </li>
        
        </>}
      
      
      
          </ul>
        
      
      
    </div>
  </div>
</nav>
  
  </>
  
}
