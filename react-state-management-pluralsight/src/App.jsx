import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch {
      console.error("The cart could not be parsed into JSON.");

      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(id, sku) {
    setCart((items) => {
      const itemInCart = items.find((i) => i.sku === sku);

      if (itemInCart) {
        return items.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  function updateQuantity(sku, quantity) {
    setCart((items) => {
      return quantity === 0
        ? items.filter((i) => i.sku !== sku)
        : items.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    });
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <>
      <div className="content">
        <main>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <h1>Welcome to Carved Rock Fitness</h1>
              </Route>
              <Route
                path="/cart"
                component={() => (
                  <Cart cart={cart} updateQuantity={updateQuantity} />
                )}
              />
              <Route
                path="/checkout"
                component={() => <Checkout cart={cart} emptyCart={emptyCart} />}
              />
              <Route exact path="/:category" component={Products} />
              <Route
                path="/:category/:id"
                component={() => <Detail addToCart={addToCart} />}
              />
            </Switch>
          </Router>
        </main>
      </div>
      <Footer />
    </>
  );
}
