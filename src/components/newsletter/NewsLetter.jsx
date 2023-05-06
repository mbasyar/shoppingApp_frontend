import React from "react";
import classes from "./newsLetter.module.css";
import { AiOutlineSend } from "react-icons/ai";

import newsletterIllustration from "../../assets/get-newsletter-updates.svg";

const NewsLetter = () => {
  return (
    <section id="contacts" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Get our lates offers</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder="Enter email...." />
          <AiOutlineSend className={classes.sendIcon} />
        </div>
        <img
          src={newsletterIllustration}
          className={classes.illustration}
          alt=""
        />
      </div>
    </section>
  );
};

export default NewsLetter;
