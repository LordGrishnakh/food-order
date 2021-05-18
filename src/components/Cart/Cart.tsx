import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartCTX from "../../store/cart-context";
import CartItem from "./CartItem";
import { item } from "../../Types/Types";

const Cart: React.FC<{ onHideCart: () => void }> = (props) => {
  const {
    items,
    totalAmount: total,
    addItem,
    removeItem,
  } = useContext(cartCTX);

  const totalAmount = `$${total.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item: item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => props.onHideCart()}
          className={classes["button--alt"]}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
