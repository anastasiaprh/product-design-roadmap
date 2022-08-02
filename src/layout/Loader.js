import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={classes["loader-box"]}>
      <div className={classes.loader}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
