import React from "react";
import classes from "./header.module.css";
import LogoMenu from "./LogoMenu/LogoMenu";
import Profile from "./Profile/Profile";

function Header(props) {
  return (
    <div className={classes.header}>
      <LogoMenu />
      <Profile />
    </div>
  );
}

export default Header;