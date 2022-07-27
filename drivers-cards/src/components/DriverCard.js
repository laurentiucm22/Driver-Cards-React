import React from "react";
import mockData from "../constants/mockData";
import CardBody from "./CardBody";
import CardBottom from "./CardBottom";
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
        (
          // prettier-ignore
          { number, points, firstName, lastName, country, team, hex, image},
          index
        ) => {
          return (
            <div key={number} className={classes.container}>
              <div className={`${index <= 2 && classes.top3} ${classes.card}`}>
                <CardTop place={index} points={points} hex={hex} />
                <CardBody
                  firstName={firstName}
                  lastName={lastName}
                  country={country}
                  team={team}
                  hex={hex}
                />
                <CardBottom image={image} number={number} hex={hex} />
              </div>
            </div>
          );
        }
      )}
    </React.Fragment>
  );
};

export default DriverCard;
