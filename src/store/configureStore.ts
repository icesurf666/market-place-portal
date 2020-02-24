import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from 'store/reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootSaga from 'store/sagas'

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)
const storeEnhancers = [middlewareEnhancer]
const composedEnhancer = composeWithDevTools(...storeEnhancers)



export default () => {
    let store = createStore(
        persistedReducer,
        composedEnhancer,
      )
    let persistor = persistStore(store)
    sagaMiddleware.run(rootSaga)
    return { store, persistor }
  }
