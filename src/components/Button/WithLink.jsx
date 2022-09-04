import React from "react";
import { ReactComponent as ChevronIcon } from "../../assets/svg/chevron.svg";
import classes from "./Button.module.css";

const WithLink = ({ href, title }) => {
  return (
    <a href={href} className={classes.btnLink}>
      {title}
      <ChevronIcon />
    </a>
  );
};

export { WithLink };
