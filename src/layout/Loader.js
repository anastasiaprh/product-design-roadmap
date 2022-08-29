import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes["loader-box"]}>
      <div className={classes["sk-circle"]}>
        <div
          className={`${classes["sk-circle1"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle2"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle3"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle4"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle5"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle6"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle7"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle8"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle9"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle10"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle11"]} ${classes["sk-child"]}`}
        ></div>
        <div
          className={`${classes["sk-circle12"]} ${classes["sk-child"]}`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
