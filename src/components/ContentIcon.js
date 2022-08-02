import React from "react";

import { videoIcon, articleIcon, bookIcon } from "./icons/contentIconsSVG";
import classes from "./ContentIcon.module.css";

const icons = {
  article: articleIcon,
  video: videoIcon,
  book: bookIcon,
};

const ContentIcon = (props) => {
  const { icon } = props;
  const currentIcon = icons[icon];
  return <div className={classes.icon}>{currentIcon}</div>;
};

export default ContentIcon;
