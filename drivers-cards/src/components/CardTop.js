import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./CardTop.module.css";

const CardTop = ({ place, points }) => {
  const [incrementPoints, setIncrementPoints] = useState(points);

  const addPoints = () => {
    setIncrementPoints(incrementPoints + 1);
  };

  return (
    <div className={`${classes["card_top"]}`}>
      <p className={`${classes["driver_place"]}`}>{place + 1}</p>
      <div className={`${classes["points_container"]}`}>
        <div>
          <p className={`${classes["driver_points"]}`}>{incrementPoints}</p>
          <p className={`${classes["driver_points-text"]}`}>PTS</p>
        </div>
        <Button className={`${classes["points_btn"]}`} onClick={addPoints}>
          Add Point
        </Button>
      </div>
    </div>
  );
};

export default CardTop;
