import { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./styles";
import { popularProducts } from "../../data";
import Product from "../Product";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product key={item._id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
