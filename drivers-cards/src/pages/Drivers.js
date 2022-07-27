import React from "react";
import DriverCard from "../components/DriverCard";
import classes from "./Drivers.module.css";

const Drivers = () => {
  return (
    <div className={classes.wrapper}>
      <DriverCard />
    </div>
  );
};

export default Drivers;
