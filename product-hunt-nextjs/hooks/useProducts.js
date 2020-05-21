import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const useProduct = (order) => {
  const [products, setProducts] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  const getProducts = () => {
    firebase.db
      .collection("products")
      .orderBy(order, "desc")
      .onSnapshot(manageSnapshot);
  };

  function manageSnapshot(snapshot) {
    const allProducts = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setProducts(allProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};

export default useProduct;
