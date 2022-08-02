import React from "react";
import ContentIcon from "./ContentIcon";

import classes from "./LinkToResource.module.css";

export const LinkToResource = (props) => {
  const { icon, title, href } = props;
  return (
    <a href={href} target="_blank" className={classes.link}>
      <ContentIcon icon={icon} />
      <p className={classes["link-title"]}>{title}</p>
    </a>
  );
};
