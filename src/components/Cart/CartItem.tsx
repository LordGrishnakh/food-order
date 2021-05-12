import { item } from '../../Types/Types';
import classes from './CartItem.module.css';

type cartItemProps = {
  price: number;
  name: string;
  amount: number;
  onRemove: (id: string)=>void;
  onAdd: (item: item)=>void
}

const CartItem: React.FC<cartItemProps> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>props.onRemove}>−</button>
        <button onClick={()=>props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
