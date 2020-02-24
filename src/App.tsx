import React, { useEffect } from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from 'pages/Auth';
import Orders from 'pages/Orders'
import Products from 'pages/Products';
import CustomAppBar from 'components/CustomAppBar';
import Product from 'pages/Product';
import Shops from 'pages/Shops';
import { Provider, useSelector } from 'react-redux'
import configureStore from 'store'
import { PersistGate } from 'redux-persist/integration/react';
import Cart from 'pages/Cart';
import UserForm from 'components/UserForm';
import Shop from 'pages/Shop';
import { IUser } from 'react-app-env';
import { get } from 'lodash';
import PrivateRoute from 'components/PrivateRoute';
import { store, persistor } from 'store'


const App = () => {

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <CustomAppBar />
        <CssBaseline />
        <Container style={{paddingTop: '30px', paddingBottom: '50px'}}>
          <PrivateRoute path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/shops" component={Shops} />
          <Route path="/cart" component={Cart}><Cart /></Route>
          <Route path='/user' component={UserForm}><UserForm /></Route>
          <Route path='/shop/:id' component={Shop} />
          <Route path="/auth" exact component={Auth}></Route>
          <Route path="/orders" exact component={Orders}></Route>
        </Container>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App
