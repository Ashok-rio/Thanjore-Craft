import React from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductAll from './components/Product/ProductAll';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Payment from './components/Payments/Payment';
import Home from './components/Home/Home';
import Orders from './components/Order/Order';
import OrderOne from './components/Order/OrderOne';
import Address from './components/Address/Address'
import AddAddress from './components/Address/addAddress'
import EditAddress from './components/Address/EditAddress'
import Profile from './components/Profile/profile'

const App = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/product'} component={ProductAll} />
      <Route exact path={'/product/:id'} component={Product} />
      <Route exact path={'/cart'} component={Cart} />
      <Route exact path={'/payment'} component={Payment} />
      
      <Route exact path={'/address'} component={Address}/>
      <Route exact path={'/addaddress'} component={AddAddress}/>
      <Route exact path={'/address/edit/:id'} component={EditAddress} />
      
      <Route exact path={'/order'} component={Orders} />
      <Route exact path={'/order/:id'} component={OrderOne} />
      <Route exact path={'/user/profile'} component={Profile} />
      
    </Router>
  );
}

export default App;
