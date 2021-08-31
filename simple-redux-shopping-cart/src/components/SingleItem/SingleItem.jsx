import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../redux/Shopping/shopping-actions';

import styles from './SingleItem.module.css';

const SingleItem = () => {
  const dispatch = useDispatch();
  const {currentItem} = useSelector(state => state.shop);
  const handleAddToCart = id => dispatch(addToCart(id));

  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={currentItem.image}
        alt={currentItem.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{currentItem.title}</p>
        <p className={styles.details__description}>{currentItem.description}</p>
        <p className={styles.details__price}>$ {currentItem.price}</p>

        <button
          onClick={() => handleAddToCart(currentItem.id)}
          className={styles.details__addBtn}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
