import React from "react";
import classes from "./CardBody.module.css";

const CardBody = ({ firstName, lastName, country, team }) => {
  return (
    <div className={`${classes["driver_name-country-team"]}`}>
      <div className={classes["driver_name-container"]}>
        <div className={classes["driver_name-span"]}></div>
      </div>
    </div>
  );
};

export default CardBody;
