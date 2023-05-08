import React from "react";
import classes from "./signup.module.css";

const Signup = () => {
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
