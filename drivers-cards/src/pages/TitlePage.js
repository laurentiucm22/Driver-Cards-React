import React from "react";
import Title from "../components/Title";
import classes from "./TitlePage.module.css";

const TitlePage = () => {
  return (
    <div className={`${classes["title_page"]}`}>
      <Title />
    </div>
  );
};

export default TitlePage;
