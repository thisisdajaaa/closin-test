import React from "react";
import classes from "./Button.module.css";

const WithIcon = ({ onClick, icon, title }) => {
  return (
    <button className={classes.btnIcon} onClick={onClick}>
      {icon}
      {title}
    </button>
  );
};

export { WithIcon };
