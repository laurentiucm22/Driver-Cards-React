import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={`${classes["f1_title-container"]}`}>
      <h1 className={classes["f1_title"]}>F1 Drivers 2022</h1>
    </div>
  );
};

export default Title;
