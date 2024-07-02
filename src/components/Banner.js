import React from "react";

import classes from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={classes["banner"]}>
      <a
        href="https://anastasiaprokhorova.substack.com/"
        target="blank"
        className={classes["banner-content"]}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 4.57916H18.5V6.4016H5.5V4.57916ZM5.5 11.2267H18.5V19.421L11.9987 15.7745L5.5 19.421V11.2267ZM5.5 7.9029H18.5V9.72533H5.5V7.9029Z" fill="#FF6719"/>
        </svg>
        <span className={classes["banner-text-mobile"]}>Subscribe to my newsletter!</span>
        <span className={classes["banner-text"]}>Subscribe to my newsletter to receive posts about the design best practices.</span>
      </a>
    </div>
  );
};
