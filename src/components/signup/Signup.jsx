import React, { useState } from "react";
import classes from "./signup.module.css";
import {Link, useNavigate} from "react-router-dom";
import classes from './signup.module.css';
import img from '../../assets/womaneating.jpg'
import { useDispatch } from "react-redux";

const Signup = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handleSignup = async(e) => {
    e.prevenDefault()
    try {
      const res= await fetch('http://localhost:5000/auth/register', {
        headers : {
          "Content-Type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify({userName, email, password})
        
      })
      const data = await res.json()
      dispatchEvent(register(data))
      navigate('/')
    }
    catch (error)
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 3000);
  }

  return (
  <div className={classes.signUpContainer}>
    <div className={classes.signUpWrapper}>
      <div className={classes.leftSide}>
        <img src={img} className={classes.leftImg} />
      </div>
      <div className={classes.signUpRightSide}>
        <h2 className={classes.title}>sign up</h2>
        <form onSubmit={handleSignup} className={classes.signUpForm}>
          <input type="text" placeholder="type user name" onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="type email address" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="type password" onChange={(e) => setPassword(e.target.value)} />
          <button className={classes.submitBtn}> sign up</button>
          <p>already have an account ? <Link to='/login'>Login </Link></p>
        </form>
        {
          error && (
            <div className={classes.errorMessage}>
              wrong credentials
            </div>
          )
        }
      </div>
    </div>
  </div>
  );
};

export default Signup;
