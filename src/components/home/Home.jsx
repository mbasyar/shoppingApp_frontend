import React from "react";
import classes from "./home.module.css";

import ilustration1 from "../../assets/male-delivery-guy-riding-scooter.svg";
import ilustration2 from "../../assets/delivery-location.svg";
import ilustration3 from "../../assets/deliveryman-with-pizza.svg";

import Hero from "../hero/Hero";
import Foods from "../foods/Foods";
import NewsLetter from "../newsletter/NewsLetter";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}>Always on time</h2>
          </div>

          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={ilustration1} alt="" className={classes.firstImg} />
              <h3>Our delivery guy is always on time</h3>
            </div>

            <div className={classes.deliveryInfo}>
              <img src={ilustration2} alt="" className={classes.secondImg} />
              <h3>He works very hard</h3>
            </div>

            <div className={classes.deliveryInfo}>
              <img src={ilustration3} alt="" className={classes.thirdImg} />
              <h3>He is friendly and social</h3>
            </div>
          </div>
        </div>

        <Foods />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
