import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import styles from './Cart.module.css';

import CartItem from './CartItem/CartItem';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const {cart} = useSelector(state => state.shop);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    setTotalPrice(totalPrice);
    setTotalItems(totalItems);
  }, [cart, totalPrice, totalItems]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map(item => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
