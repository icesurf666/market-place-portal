import React, { useEffect } from 'react'
import { Container, CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'
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
import Home from 'pages/Home';
import Layout from 'components/Layout';


const App = () => {
  const theme = createMuiTheme({
    overrides: {
      MuiTableCell: {
        head: {
          fontSize: '1.1rem',
        },
      },
      MuiAppBar: {
        colorSecondary: {
            backgroundColor: '#000',
        },
      },
    },
  })
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Layout />
      </PersistGate>
    </Provider>
  );
}

export default App
