import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as MarketPlaceIcon } from "../../assets/svg/marketplace.svg";
import { sidebarData } from "./data";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={classes.navMenu}>
      <ul className={classes.navMenuItems}>
        {sidebarData.map((item, index) => {
          return (
            <li key={index} className={classes.navText}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : ""
                }
              >
                {item.title === "Home" ? <HomeIcon /> : <MarketPlaceIcon />}
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Sidebar };
