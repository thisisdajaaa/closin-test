import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <h4 className={classes.homeTitle}>Home</h4>

      <div className={classes.homeGreetings}>
        <h5>Welcome to our marketplace!</h5>
        <p>We are glad that you are here.</p>
      </div>
    </section>
  );
};

export { Home };
