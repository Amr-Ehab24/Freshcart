import React, { useState } from "react";
import style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import Axios properly
import { BallTriangle } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false); // Move useState inside the functional component
  const [apiError,setApiError]=useState(null)
  let navigate = useNavigate()

  async function registerSubmit(values) {
    setLoading(true); // Update loading state using the setter function
    try {
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
      if (data.message === "success") {
        setLoading(false);
        navigate('/login')
      }
    } catch (error) {
      setApiError(error.response.data.message)
     
      setLoading(false); // Set loading state to false in case of an error
    }
  }

  let validationSchema = Yup.object({
    name: Yup.string().required("Name is Required").min(3, "Min length is 3").max(10, "Max length is 10"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required").matches(/^[A-Z][\w@ ]{5,8}$/, "Invalid Password ex:(Ahmed@123)"),
    rePassword: Yup.string().required("Re-Password is required").oneOf([Yup.ref("password")], "Password and Re-Password don't match"),
    phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/, "We need an Egyptian number")
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    validationSchema,
    onSubmit: registerSubmit
  });

  return (
    <div className="w-75 mx-auto py-4">
      <h2>Register Now: </h2>
      <form onSubmit={formik.handleSubmit}>
        
        {apiError?<div className="alert alert-danger">{apiError}</div>:null}
      <label htmlFor="name">Name:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="name" name="name" className="form-control mb-3" />
        {formik.errors.name && formik.touched.name && <div className="alert alert-danger py-2">{formik.errors.name}</div>}

        <label htmlFor="email">Email:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" name="email" className="form-control mb-3" />
        {formik.errors.email && formik.touched.email && <div className="alert alert-danger py-2">{formik.errors.email}</div>}

        <label htmlFor="password">Password:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="password" name="password" className="form-control mb-3" />
        {formik.errors.password && formik.touched.password && <div className="alert alert-danger py-2">{formik.errors.password}</div>}

        <label htmlFor="rePassword">Re-Password:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="rePassword" name="rePassword" className="form-control mb-3" />
        {formik.errors.rePassword && formik.touched.rePassword && <div className="alert alert-danger py-2">{formik.errors.rePassword}</div>}

        <label htmlFor="phone">Phone:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" id="phone" name="phone" className="form-control mb-3" />
        {formik.errors.phone && formik.touched.phone && <div className="alert alert-danger py-2">{formik.errors.phone}</div>}
        {loading?<button className="btn bg-main text-light" type="button"> 
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


 </button>:
        <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main text-light">Register</button>}
   <span className="ps-3">if you have already account ?</span>   <Link className="ps-1 text-main" to={'/Login'}>Login Now</Link>

      </form>

    </div>

  );
};

export default Register;
