import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();
  let{setUserToken}=useContext(UserContext)

  async function loginSubmit(values) {
    setLoading(true);
    try {
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values);
      if (data.message === "success") {
        setLoading(false);
        localStorage.setItem("userToken",data.token)
        setUserToken(data.token)
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        setApiError(error.response.data.message);
      } else {
        setApiError("An error occurred while communicating with the server.");
      }
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required").matches(/^[A-Z][\w@ ]{5,8}$/, "Invalid Password ex:(Ahmed@123)"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: loginSubmit
  });

  return (
    <div className="w-75 mx-auto py-4">
      <h2>Login Now:</h2>
      <form onSubmit={formik.handleSubmit}>
        {apiError && <div className="alert alert-danger">{apiError}</div>}
        
        <label htmlFor="email">Email:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" name="email" className="form-control mb-3" />
        {formik.errors.email && formik.touched.email && <div className="alert alert-danger py-2">{formik.errors.email}</div>}
        
        <label htmlFor="password">Password:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="password" name="password" className="form-control mb-3" />
        {formik.errors.password && formik.touched.password && <div className="alert alert-danger py-2">{formik.errors.password}</div>}
        
        {loading ?
          <button className="btn bg-main text-light" type="button">
            <BallTriangle
              height={30}
              width={30}
              radius={5}
              color="#fff"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </button> :
          <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main text-light">Login</button>
        
        }
       <span className="ps-3">if you dont have account?</span> <Link className="ps-1 text-main" to={'/Register'}>Register Now</Link>
      </form>
    </div>
  );
};

export default Login;
