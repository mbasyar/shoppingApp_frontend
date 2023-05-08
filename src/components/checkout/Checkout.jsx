import React from "react";
import classes from "./checkout.module.css";
import { useSelector } from "react-redux";

const Checkout = () => {

  const {product} = useSelector((state)=> state.cart)
  let totalPrice = 0
  product.map((product)=> totalPrice += (product.quantity * product.price))
  return (
   <div className={classes.container}>
    <div className={classes.wrapper}>
      <h2>your order is successful</h2>
      <p>expect it in 1 hour</p>
      <span>total price : {totalPrice}</span>
    </div>
   </div>
  );
};

export default Checkout;
