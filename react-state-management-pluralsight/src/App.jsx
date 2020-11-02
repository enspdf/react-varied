import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function App() {
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
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route exact path="/:category" component={Products} />
              <Route path="/:category/:id" component={Detail} />
            </Switch>
          </Router>
        </main>
      </div>
      <Footer />
    </>
  );
}
