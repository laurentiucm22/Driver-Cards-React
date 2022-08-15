import React, { useRef, useState } from "react";
import DriverCard from "../components/DriverCard";
import classes from "./DriversPage.module.css";
import { BsSearch } from "react-icons/bs";

const DriversPage = ({ mockData }) => {
  const [driversList, setDriversList] = useState(mockData);
  const inputRef = useRef();

  const sortingDriverList = () => {
    return [...driversList].sort((a, b) => {
      return b.points - a.points;
    });
  };

  const incrementingDriverPoints = (number) => {
    let findDriverArr = [...mockData];
    let findDriver = findDriverArr.find((el) => {
      return el.number === number;
    });
    // .points++;
    // console.log(findDriver);
    findDriver.points = findDriver.points + 1;
    setDriversList(findDriverArr);
  };

  const handleSeachDrivers = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    const splitedSearchValue = searchValue.split(" ");

    const result = [...mockData].filter((driver) => {
      const driverFirstName = driver.firstName.toLowerCase();
      const driverLastName = driver.lastName.toLowerCase();
      return (
        // prettier-ignore
        (driverFirstName.includes(searchValue) || driverLastName.includes(searchValue)) || (splitedSearchValue.includes(driverFirstName) || splitedSearchValue.includes(driverLastName))
      );
    });

    if (result.length > 0) {
      setDriversList([...result]);
    }
    if (result.length === 0) {
      setDriversList([]);
    }
    if (!searchValue) {
      setDriversList([...mockData]);
    }
  };

  const onStartSearch = () => {
    inputRef.current.focus();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes["driver_search-container"]}>
        <input
          type="search"
          placeholder="Search driver"
          className={classes["driver_search-input"]}
          onChange={handleSeachDrivers}
          ref={inputRef}
        />
        <BsSearch className={classes["search_icon"]} onClick={onStartSearch} />
      </div>
      {driversList.length === 0 && (
        <span className={classes["search_no-result"]}>No result found...</span>
      )}
      {sortingDriverList().map(
        (
          { number, points, firstName, lastName, country, team, hex, image },
          index
        ) => {
          return (
            <DriverCard
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
