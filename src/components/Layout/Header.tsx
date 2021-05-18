import React from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header: React.FC<{ onShowCart: () => void }> = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="background meal" />
      </div>
    </>
  );
};

export default Header;
