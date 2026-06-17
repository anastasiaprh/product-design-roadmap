import React from "react";

import classes from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={classes["banner"]}>
      <a
        href="https://www.uicomponentsbook.com/"
        target="blank"
        className={classes["banner-content"]}
      >
        <svg width="37" height="22" viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="37" height="22" rx="11" fill="#C8D0FF"/>
          <path d="M12.6939 7.72727V15H11.522L8.09517 10.0462H8.0348V15H6.71733V7.72727H7.89631L11.3196 12.6847H11.3835V7.72727H12.6939ZM14.6294 15V7.72727H19.3596V8.83168H15.9469V10.8061H19.1145V11.9105H15.9469V13.8956H19.388V15H14.6294ZM22.7342 15L20.6816 7.72727H22.0985L23.4089 13.0717H23.4764L24.8755 7.72727H26.1646L27.5673 13.0753H27.6312L28.9416 7.72727H30.3585L28.3059 15H27.0062L25.5502 9.89702H25.4934L24.0339 15H22.7342Z" fill="#1A2557"/>
        </svg>
        <span className={classes["banner-text"]}>We’ve published the UI Components Book. <span className={classes["banner-text--underlined"]}>Check it out!</span></span>
      </a>
    </div>
  );
};
