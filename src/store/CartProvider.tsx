import React, { useReducer } from "react";
import { item } from "../Types/Types";
import CartContext from "./cart-context";

type action = {
  type: "ADD_ITEM" | "REMOVE_ITEM";
  item?: item;
  id?: string;
};

const defaultCartState: { items: item[]; totalAmount: number } = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: typeof defaultCartState, action: action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items, action.item] as item[];
    const updatedTotalAmount =
      state.totalAmount + action.item!.price * action.item!.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider: React.FC = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
