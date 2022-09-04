import React from "react";
import { Sidebar } from "../Sidebar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Sidebar />
      {children}
    </div>
  );
};

export { Layout };
