import React from "react";
import classes from "./CardBottom.module.css";

const CardBottom = ({ image, number, hex }) => {
  return (
    <div className={`${classes["card_bottom"]}`}>
      <div className={`${classes["card_bg-pattern"]}`}>
        <p
          className={`${classes["driver_number"]}`}
          style={{ color: `${hex}` }}
        >
          {number}
        </p>
        <div className={`${classes["driver_img-container"]}`}>
          <img
            src={image}
            className={`${classes["driver_img"]}`}
            alt="driver_image"
          />
        </div>
      </div>
    </div>
  );
};

export default CardBottom;
