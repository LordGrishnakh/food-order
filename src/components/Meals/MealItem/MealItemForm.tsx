import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm: React.FC<{ mealId: string; mealPrice: number; onAddToCart: (amount: number) => void }> = (
  props
) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef<HTMLInputElement>(null);

  const addToCartHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current!.value;

    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(+enteredAmount)
  };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.mealId,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <p style={{ color: "red" }}>Please enter a valid number!</p>
      )}
    </form>
  );
};

export default MealItemForm;
