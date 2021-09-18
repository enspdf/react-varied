import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import ProductDetails from './components/ProductDetails';
import Login from './components/layout/Login';


const App = () => {
  return (
    <Router>
      <Navigation />
      <Header />
      <Route path="/" exact>
        <Content />
      </Route>
      <Route path="/product/:id" exact>
        <ProductDetails />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
