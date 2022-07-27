import React from "react";
import DriverCard from "../components/DriverCard";
import classes from "./DriversPage.module.css";

const DriversPage = () => {
  return (
    <div className={classes.wrapper}>
      <DriverCard />
    </div>
  );
};

export default DriversPage;
