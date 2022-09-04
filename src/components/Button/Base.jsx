import React from "react";
import classes from "./Button.module.css";

const Base = ({ onClick, title }) => {
  return (
    <button className={classes.btnBase} onClick={onClick}>
      {title}
    </button>
  );
};

export { Base };
