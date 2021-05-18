import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import cartCtx from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton: React.FC<{ onShowCart: () => void }> = (props) => {
  const [bump, setBump] = useState(false);
  const { items } = useContext(cartCtx);

  const numberOfCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${bump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBump(true);

    const timer = setTimeout(() => {
      setBump(false);
    }, 30);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={() => props.onShowCart()} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
