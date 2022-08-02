import React from "react";

import { LinkToResource } from "./LinkToResource";
import classes from "./ListOfLinks.module.css";

export const ListOfLinks = (props) => {
  const { links } = props;
  return (
    <div className={classes.resources}>
      <hr></hr>
      <h3>Resources</h3>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <LinkToResource
                icon={link.iconType}
                title={link.title}
                href={link.href}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
