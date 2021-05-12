import React from 'react'
import { item } from "../Types/Types";

const CartContext = React.createContext({
  items: [] as item[],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {}
})

export default CartContext;