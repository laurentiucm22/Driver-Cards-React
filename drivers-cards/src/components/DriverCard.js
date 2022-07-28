import React, { useState } from "react";
import mockData from "../constants/mockData";
import CardBody from "./CardBody";
import CardBottom from "./CardBottom";
import CardTop from "./CardTop";
import classes from "./DriverCard.module.css";

const DriverCard = () => {
  const [dataSort, setDataSort] = useState(mockData);

  const handleSortData = () => {
    return dataSort.sort((a, b) => {
      return b.points - a.points;
    });
  };

  const handleIncrement = (number) => {
    let newArr = [...mockData];
    let test = newArr.find((el) => {
      return el.number === number;
    });
    test.points = test.points + 1;
    setDataSort(newArr);
  };

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
                  data={dataSort}
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
