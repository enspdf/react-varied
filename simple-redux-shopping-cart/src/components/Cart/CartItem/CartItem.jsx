import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {
  removeFromCart,
  adjustQty,
} from '../../../redux/Shopping/shopping-actions';
import styles from './CartItem.module.css';

const CartItem = ({itemData}) => {
  const [input, setInput] = useState(itemData.qty);
  const dispatch = useDispatch();
  const handleRemoveFromCart = id => dispatch(removeFromCart(id));
  const handleOnChange = e => {
    setInput(e.target.value);
    dispatch(adjustQty(itemData.id, e.target.value));
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={itemData.image}
        alt={itemData.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{itemData.title}</p>
        <p className={styles.details__desc}>{itemData.description}</p>
        <p className={styles.details__price}>$ {itemData.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={handleOnChange}
          />
        </div>
        <button
          onClick={() => handleRemoveFromCart(itemData.id)}
          className={styles.actions__deleteItemBtn}>
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
