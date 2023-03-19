import React from "react";

import classes from "./YoutubeBanner.module.css";

export const YoutubeBanner = () => {
  return (
    <div className={classes["youtube-banner"]}>
      <a
        href="https://www.youtube.com/@anauxuidesign"
        target="blank"
        className={classes["banner-content"]}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 25 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m23.998 3.2232c-0.2766-1.0332-1.0886-1.8452-2.1219-2.1218-1.8708-0.50181-9.3763-0.50181-9.3763-0.50181s-7.5054 1e-6 -9.3764 0.50181c-1.0332 0.27659-1.8452 1.0886-2.1218 2.1218-0.50181 1.8709-0.50181 5.7768-0.50181 5.7768s0 3.9058 0.50181 5.7768c0.27659 1.0332 1.0886 1.8452 2.1218 2.1218 1.8709 0.5018 9.3764 0.5018 9.3764 0.5018s7.5055 0 9.3763-0.5018c1.0333-0.2766 1.8453-1.0886 2.1219-2.1218 0.5018-1.871 0.5018-5.7768 0.5018-5.7768s-2e-3 -3.9058-0.5018-5.7768z"
            fill="#f00"
          />
          <path
            d="m10.102 12.6 6.2351-3.5996-6.2351-3.5996v7.1992z"
            fill="#fff"
          />
        </svg>
        <span>Check out my new YouTube channel!</span>
        <span className={classes.hidden}>
          {" "}
          Subscribe for videos about UX/UI design insights and tips.
        </span>
      </a>
    </div>
  );
};
