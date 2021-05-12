import React, { useContext } from "react";
import { meal } from "../../../Types/Types";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

import cartCTX from "../../../store/cart-context";

const MealItem: React.FC<meal> = (props) => {
  const { addItem } = useContext(cartCTX)

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} mealId={props.id} mealPrice={props.price} />
      </div>
    </li>
  );
};

export default MealItem;
