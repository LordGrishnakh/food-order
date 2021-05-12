import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import cartCtx from "../../store/cart-context"
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton: React.FC<{ onShowCart: () => void }> = (props) => {
  const { items } = useContext(cartCtx)

  const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0)

  return (
    <button onClick={() => props.onShowCart()} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
