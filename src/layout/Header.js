import React from "react";
import { Fragment } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes["header-content"]}>
          <h1>🦄 Product Design Roadmap</h1>
        </div>
        <div className={classes["header-background"]}></div>
      </header>
    </Fragment>
  );
};

export default Header;
