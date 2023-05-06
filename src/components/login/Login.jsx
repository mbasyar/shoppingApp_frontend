import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import img from "../../assets/womaneating2.jpg";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const vLogin = async (values) => {
    try {
      const res = await fetch(`http://localhost:5000/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });
      
      const data = await res.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError("Wrong credentials! Try different ones");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  const formik = useFormik({
    // initial value
    initialValues: {
      email: "",
      password: "",
    },
    // validasi schema
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum password length is 6 characters")
        .matches(/[a-z]/g, "Must contain at least 1 lowercase letter")
        .matches(/[A-Z]/g, "Must contain at least 1 uppercase letter")
        .matches(/[0-9]/g, "Must contain at least 1 number")
        .matches(/^\S*$/, "Cannot contain spaces"),
    }),
    // submition
    onSubmit: vLogin,
  });

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={img} className={classes.leftImg} alt="woman eating" />
        </div>

        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.email}
              </div>
            )}
            <input
              name="password"
              type="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.password}
              </div>
            )}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={classes.submitBtn}
            >
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </button>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            {error && <div className={classes.errorMessage}>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
