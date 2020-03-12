import React, { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store'
import Layout from 'components/Layout';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Layout />
      </PersistGate>
    </Provider>
  );
}

export default App
