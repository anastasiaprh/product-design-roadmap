import React from "react";

import classes from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={classes["banner"]}>
      <a
        href="https://www.youtube.com/@anauxuidesign"
        target="blank"
        className={classes["banner-content"]}
      >
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.4982 2.62364C23.2216 1.59039 22.4096 0.7784 21.3763 0.501811C19.5055 1.50211e-07 12 0 12 0C12 0 4.49456 1.50211e-07 2.62364 0.501811C1.59039 0.7784 0.778399 1.59039 0.501811 2.62364C1.50211e-07 4.49456 0 8.40039 0 8.40039C0 8.40039 1.50211e-07 12.3062 0.501811 14.1772C0.778399 15.2104 1.59039 16.0224 2.62364 16.2989C4.49456 16.8008 12 16.8008 12 16.8008C12 16.8008 19.5055 16.8008 21.3763 16.2989C22.4096 16.0224 23.2216 15.2104 23.4982 14.1772C24 12.3062 24 8.40039 24 8.40039C24 8.40039 23.998 4.49456 23.4982 2.62364Z" fill="#FF0000"/>
          <path d="M9.60156 12.0005L15.8367 8.4009L9.60156 4.80127V12.0005Z" fill="white"/>
        </svg>
        <span className={classes["banner-text-mobile"]}>Subscribe to my YouTube channel!</span>
        <span className={classes["banner-text"]}>Subscribe to my YouTube channel for videos about design best practices, guides, and more!</span>
      </a>
    </div>
  );
};
