import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__content"]}>
        <span>Made with</span>
        <span className={classes["heart-ic"]}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0273 5.53908C17.7655 4.9329 17.3881 4.38359 16.916 3.92189C16.4436 3.45881 15.8866 3.09082 15.2754 2.8379C14.6416 2.57461 13.9617 2.43984 13.2754 2.44142C12.3125 2.44142 11.373 2.70509 10.5566 3.20314C10.3613 3.32228 10.1758 3.45314 10 3.59572C9.82422 3.45314 9.63867 3.32228 9.44336 3.20314C8.62695 2.70509 7.6875 2.44142 6.72461 2.44142C6.03125 2.44142 5.35938 2.57423 4.72461 2.8379C4.11133 3.09181 3.55859 3.45705 3.08398 3.92189C2.61132 4.38307 2.23375 4.93251 1.97266 5.53908C1.70117 6.16994 1.5625 6.83986 1.5625 7.52931C1.5625 8.1797 1.69531 8.85744 1.95898 9.54689C2.17969 10.1231 2.49609 10.7207 2.90039 11.3242C3.54102 12.2793 4.42187 13.2754 5.51562 14.2852C7.32812 15.959 9.12305 17.1152 9.19922 17.1621L9.66211 17.459C9.86719 17.5899 10.1309 17.5899 10.3359 17.459L10.7988 17.1621C10.875 17.1133 12.668 15.959 14.4824 14.2852C15.5762 13.2754 16.457 12.2793 17.0977 11.3242C17.502 10.7207 17.8203 10.1231 18.0391 9.54689C18.3027 8.85744 18.4356 8.1797 18.4356 7.52931C18.4375 6.83986 18.2988 6.16994 18.0273 5.53908Z"
              fill="#F783AC"
            />
          </svg>
        </span>
        <span>
          by{" "}
          <a
            href="https://www.linkedin.com/in/anastasia-prokhorova-a1b141119/"
            target="blank"
          >
            Anastasia
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/vladislav-prokhorov-07b54aab/"
            target="blank"
          >
            Vladislav
          </a>
        </span>
      </div>
      <div className={classes["footer__copyright"]}>
        <span>
          Copyright ©{" "}
          <span>
            <a href="https://product-design-roadmap.com/" target="blank">
              product-design-roadmap.com
            </a>
          </span>{" "}
          2023.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
