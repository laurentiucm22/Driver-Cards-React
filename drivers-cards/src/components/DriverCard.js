import React from "react";
import CardBody from "./CardBody";
import CardBottom from "./CardBottom";
import CardTop from "./CardTop";
import classes from "./DriverCard.module.css";

const DriverCard = ({ handleSortData, data, handleIncrement }) => {
  return (
    <React.Fragment>
      {handleSortData().map(
        (
          // prettier-ignore
          { number, points, firstName, lastName, country, team, hex, image},
          index
        ) => {
          return (
            <div key={number} className={classes.container}>
              <div
                className={`${index <= 2 && classes.top3} ${classes.card}`}
                style={{ "--custom-color": hex }}
              >
                <CardTop
                  place={index}
                  points={points}
                  hex={hex}
                  data={data}
                  onIncrementPoints={handleIncrement}
                  number={number}
                />
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
