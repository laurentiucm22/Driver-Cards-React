import React from "react";
import classes from "./CardBody.module.css";
import Flag from "react-world-flags";

const CardBody = ({ firstName, lastName, country, team, hex }) => {
  return (
    <React.Fragment>
      <div className={`${classes["driver_name-country-team"]}`}>
        <div className={`${classes["driver_name-container"]}`}>
          <span
            className={`${classes["driver_name-span"]}`}
            style={{ backgroundColor: `${hex}` }}
          ></span>
          <div className={`${classes["driver_name"]}`}>
            <h3 className={`${classes["driver_first-name"]}`}>{firstName}</h3>
            <h2 className={`${classes["driver_last-name"]}`}>{lastName}</h2>
          </div>
        </div>
        <div className={`${classes["driver_country"]}`}>
          <div className={`${classes["driver_flag"]}`}>
            <Flag height="35" code={country} />
          </div>
        </div>
      </div>
      <div className={`${classes["driver_team-container"]}`}>
        <h3 className={`${classes["driver_team"]}`}>{team}</h3>
      </div>
    </React.Fragment>
  );
};

export default CardBody;
