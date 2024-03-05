import React, { useContext } from "react";
import style from "./LayOut.module.css"
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Offline} from "react-detect-offline";
export default function LayOut() {


  let {setUserToken}=useContext(UserContext)
if (localStorage.getItem('userToken')) {
  setUserToken(localStorage.getItem('userToken'))
  
}
  return <>
    <NavBar />
    <div className="container">
    <Offline><div className="loading"><h2 className="fw-bolde text-danger">Only shown offline (surprise!)</h2></div></Offline>

      <Outlet></Outlet>
    </div>

    <Footer />

  </>

}
