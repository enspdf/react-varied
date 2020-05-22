import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const useProducts = (order) => {
  const [products, setProducts] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getProducts = () => {
      firebase.db
        .collection("products")
        .orderBy(order, "desc")
        .onSnapshot(manageSnapshot);
    };

    getProducts();
  }, []);

  function manageSnapshot(snapshot) {
    const allProducts = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setProducts(allProducts);
  }

  return {
    products,
  };
};

export default useProducts;
