import React from "react";
import mockData from "../constants/mockData";
import CardBody from "./CardBody";
import CardTop from "./CardTop";
import classes from "./DriverCard.module.css";

const DriverCard = () => {
  const sortData = mockData.sort((a, b) => {
    return b.points - a.points;
  });
  // Ask why does he know how to sort before I add the sortedData in JSX
  return (
    <React.Fragment>
      {sortData.map(
        ({ number, points, firstName, lastName, country, team }, index) => {
          return (
            <div key={number} className={classes.container}>
              <div className={classes.card}>
                <CardTop place={index} points={points} />
                <CardBody
                  firstName={firstName}
                  lastName={lastName}
                  country={country}
                  team={team}
                />
              </div>
            </div>
          );
        }
      )}
    </React.Fragment>
  );
};

export default DriverCard;