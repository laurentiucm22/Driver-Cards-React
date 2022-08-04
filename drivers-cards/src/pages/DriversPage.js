import React, { useState } from "react";
import DriverCard from "../components/DriverCard";
import classes from "./DriversPage.module.css";
import { BsSearch } from "react-icons/bs";

const DriversPage = ({ mockData }) => {
  const [driversList, setDriversList] = useState(mockData);
  const [searchDriver, setSearchDriver] = useState("");

  const sortingDriverList = () => {
    return driversList.sort((a, b) => {
      return b.points - a.points;
    });
  };

  const incrementingDriverPoints = (number) => {
    let findDriverArr = [...mockData];
    console.log(findDriverArr);
    let findDriver = findDriverArr.find((el) => {
      return el.number === number;
    });
    findDriver.points = findDriver.points + 1;
    setDriversList(findDriverArr);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes["driver_search-container"]}>
        <input
          type="search"
          placeholder="Search driver"
          className={classes["driver_search-input"]}
          value={searchDriver}
          onChange={(event) => setSearchDriver(event.target.value)}
        />
        <BsSearch className={classes["search_icon"]} />
      </div>
      {sortingDriverList().map(
        (
          { number, points, firstName, lastName, country, team, hex, image },
          index
        ) => {
          return (
            <DriverCard
              mockData={mockData}
              handleSortData={sortingDriverList}
              incrementingDriverPoints={incrementingDriverPoints}
              data={driversList}
              number={number}
              points={points}
              firstName={firstName}
              lastName={lastName}
              country={country}
              team={team}
              hex={hex}
              image={image}
              index={index}
              key={number}
            />
          );
        }
      )}
    </div>
  );
};

export default DriversPage;
