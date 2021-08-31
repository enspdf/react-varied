import styles from './Products.module.css';

import {useSelector} from 'react-redux';

import Product from './Product/Product';

const Products = () => {
  const {products} = useSelector(state => state.shop);

  return (
    <div className={styles.products}>
      {products.map(product => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Products;
