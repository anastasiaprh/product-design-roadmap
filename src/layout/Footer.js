import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__content"]}>
        <div className={classes["footer__inner-content"]}>
          <p className={classes["footer__text"]}>
          Follow me to be updated on design best practices that will help you grow and improve every day.
          </p>
          <div className={classes["social-icons"]}>
              <a href="https://www.instagram.com/anastasiaprokhorova_design/" target="_blank">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#paint0_linear_0_181)"/>
                <path d="M20.9494 6.50977H11.0506C8.3159 6.50977 6.09114 8.73518 6.09114 11.4707V20.5293C6.09114 23.2648 8.3159 25.4903 11.0506 25.4903H20.9494C23.6841 25.4903 25.9089 23.2648 25.9089 20.5293V11.4707C25.9089 8.73518 23.6841 6.50977 20.9494 6.50977ZM7.84069 11.4707C7.84069 9.70046 9.2809 8.25983 11.0506 8.25983H20.9494C22.7191 8.25983 24.1593 9.70046 24.1593 11.4707V20.5293C24.1593 22.2996 22.7191 23.7402 20.9494 23.7402H11.0506C9.2809 23.7402 7.84069 22.2996 7.84069 20.5293V11.4707Z" fill="white"/>
                <path d="M16.0002 20.6135C18.5433 20.6135 20.6134 18.5439 20.6134 15.999C20.6134 13.454 18.5444 11.3845 16.0002 11.3845C13.4561 11.3845 11.3871 13.454 11.3871 15.999C11.3871 18.5439 13.4561 20.6135 16.0002 20.6135ZM16.0002 13.1356C17.5794 13.1356 18.8638 14.4204 18.8638 16.0001C18.8638 17.5797 17.5794 18.8645 16.0002 18.8645C14.4211 18.8645 13.1366 17.5797 13.1366 16.0001C13.1366 14.4204 14.4211 13.1356 16.0002 13.1356Z" fill="white"/>
                <path d="M21.0406 12.13C21.7254 12.13 22.2835 11.5728 22.2835 10.8867C22.2835 10.2006 21.7265 9.64337 21.0406 9.64337C20.3547 9.64337 19.7976 10.2006 19.7976 10.8867C19.7976 11.5728 20.3547 12.13 21.0406 12.13Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_0_181" x1="4.67505" y1="27.3249" x2="27.3249" y2="4.67617" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAD4F"/>
                <stop offset="0.35" stop-color="#DD2A7B"/>
                <stop offset="0.62" stop-color="#9537B0"/>
                <stop offset="1" stop-color="#515BD4"/>
                </linearGradient>
                </defs>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCLNgIi88swGcuktpPGbB6gQ" target="_blank">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#FF0209"/>
                <path d="M22.7919 23.0903C22.3152 23.142 21.8273 23.151 21.3595 23.1499C17.7112 23.1465 14.0628 23.1431 10.4155 23.1409C9.26761 23.1409 8.01739 23.1038 7.13031 22.3739C6.1308 21.5495 5.92281 20.1201 5.84186 18.8268C5.72943 17.0543 5.72043 15.2763 5.81262 13.5027C5.86322 12.5288 5.95203 11.5312 6.3714 10.6495C6.67271 10.0163 7.17528 9.44728 7.81838 9.14813C8.56605 8.80061 9.34857 8.86247 10.1536 8.86134C12.0806 8.8591 14.0077 8.85797 15.9348 8.85572C17.9383 8.85347 19.9429 8.85235 21.9464 8.8501C22.8931 8.8501 23.9095 8.86922 24.6819 9.41692C25.6791 10.1232 25.9501 11.4671 26.0749 12.6829C26.3054 14.922 26.3087 17.1848 26.0839 19.4239C25.9906 20.3473 25.8354 21.3235 25.2271 22.0241C24.6245 22.7191 23.7307 22.9868 22.793 23.0891L22.7919 23.0903Z" fill="white"/>
                <path d="M19.2627 16.0016L13.8256 12.8616V19.1416L19.2627 16.0016Z" fill="#FF0209"/>
                </svg>
              </a>
              <a href="https://anastasiaprokhorova.substack.com/" target="_blank">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#FF681A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99276 8H23.0072V9.96465H8.99276V8ZM8.99276 15.1662H23.0072V24L15.9986 20.069L8.99276 24V15.1662ZM8.99276 11.5831H23.0072V13.5478H8.99276V11.5831Z" fill="white"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/anastasiaprh/" target="_blank">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#007EBB"/>
                <path d="M7.63334 10.6366C7.21192 10.2454 7.00235 9.76103 7.00235 9.18478C7.00235 8.60852 7.21304 8.1029 7.63334 7.71051C8.05475 7.31924 8.59722 7.12305 9.26184 7.12305C9.92647 7.12305 10.4476 7.31924 10.8679 7.71051C11.2894 8.10178 11.4989 8.59395 11.4989 9.18478C11.4989 9.7756 11.2882 10.2454 10.8679 10.6366C10.4465 11.0279 9.9119 11.2241 9.26184 11.2241C8.61179 11.2241 8.05475 11.0279 7.63334 10.6366ZM11.1448 12.8811V24.877H7.35539V12.8811H11.1448Z" fill="#FEFFFC"/>
                <path d="M23.7592 14.0662C24.5852 14.9631 24.9977 16.1941 24.9977 17.7614V24.6653H21.3988V18.248C21.3988 17.4576 21.1937 16.8432 20.7847 16.406C20.3756 15.9688 19.8241 15.749 19.1337 15.749C18.4433 15.749 17.8919 15.9676 17.4828 16.406C17.0737 16.8432 16.8686 17.4576 16.8686 18.248V24.6653H13.2485V12.8476H16.8686V14.4149C17.2351 13.8925 17.7294 13.4799 18.3503 13.1761C18.9712 12.8722 19.6695 12.7209 20.4462 12.7209C21.8292 12.7209 22.9343 13.1693 23.7592 14.0662Z" fill="#FEFFFC"/>
                </svg>
              </a>
            </div>
        </div>
        <div className={classes["footer__text-notice"]}>
          <div className={classes["made-with"]}>
            <span>Made with</span>
            <span className={classes["heart"]}>❤️</span>
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
          <div className={classes["copyright"]}>
            <span>© 2025 <span>product-design-roadmap.com</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
