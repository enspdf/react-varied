import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";
import ProductDetails from "../components/layouts/ProductDetails";
import useProducts from "../hooks/useProducts";

const Search = () => {
  const router = useRouter();
  const {
    query: { q = "" },
  } = router;

  const { products } = useProducts("create");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = q.toLowerCase();
    const filter = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
      );
    });
    console.log(filter);

    setResult(filter);
  }, [q, products]);

  return (
    <div>
      <Layout>
        <div className="product-list">
          <div className="container">
            <ul className="bg-white">
              {result.map((product) => (
                <ProductDetails key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Search;
