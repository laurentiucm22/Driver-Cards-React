import React, { useState } from "react";
import DriverCard from "../components/DriverCard";
import classes from "./DriversPage.module.css";
import { BsSearch } from "react-icons/bs";

const DriversPage = ({ mockData }) => {
  const [dataSort, setDataSort] = useState(mockData);
  const [searchDriver, setSearchDriver] = useState("");

  const handleSortData = () => {
    return dataSort.sort((a, b) => {
      return b.points - a.points;
    });
  };

  const handleIncrement = (number) => {
    let findDriverArr = [...mockData];
    let findDriver = findDriverArr.find((el) => {
      return el.number === number;
    });
    findDriver.points = findDriver.points + 1;
    setDataSort(findDriverArr);
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
      <DriverCard
        mockData={mockData}
        handleSortData={handleSortData}
        handleIncrement={handleIncrement}
        data={dataSort}
      />
    </div>
  );
};

export default DriversPage;
