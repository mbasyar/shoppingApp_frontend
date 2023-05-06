import React, { useState } from "react";
import classes from "./cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {

  const {product} = useSelector((state) => state.cart)
  let totalPrice = 0
  product.map((product) => totalPrice += (productQuantity * productPrice))

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id))
  }

  const handleOrder = ()=> {
    if(product.length > 0){
      navigate ('/checkout')
    }
  }


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {product.length > 0 ? product.map((product) => (
              <div key={product._id} className={classes.product}>
                <div onClick={handleRemoveProduct} className={classes.closeBtn}><AiOutlineClose /></div>
                <img src={`http://localhost:5000/images/${product.img}`} className={classes.img} />
                <div className={classes.productData}>
                  <h3 className={classes.title}>{product.title}</h3>
                  <div className={classes.productAndQuantity}>
                    <span className={classes.quantity}>{product.quantity} x </span>
                    <span className={classes.price}><span>$</span>{product.price}</span>
                  </div>
                </div> 
              </div>
          )) : <h1 className={classes.noProducts}> No product in the cart. go shopping!</h1> }
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}> total product : {product.length}
          </div>
          <div className={subTotalCheckoutBtns}>
            <span className="subTotal"> subtotal : ${totalPrice}</span>
            <span onClick={handleOrder} disabled={product.length === 0} className={classes.orderNowBtn}> Order Now!</span>
          </div>
        </div>
      </div>
    </div>








  )
}
export default Cart;
