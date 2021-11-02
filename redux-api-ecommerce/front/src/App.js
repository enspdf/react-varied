import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from "./pages/Home"
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  const user = true

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:category" component={ProductList} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App