import React from "react";
import classes from "./CardBottom.module.css";

const CardBottom = ({ image, number }) => {
  return (
    <div className={`${classes["card_bottom"]}`}>
      <div className={`${classes["card_bg-pattern"]}`}>
        <p className={`${classes["driver_number"]}`}>{number}</p>
        <img
          src={image}
          className={`${classes["drive_img"]}`}
          alt="driver_image"
        />
      </div>
    </div>
  );
};

export default CardBottom;
