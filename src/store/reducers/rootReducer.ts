import {combineReducers} from 'redux'

import authReducer from "./auth"
import cartReducer from './cart'
import themeReducer from './themeReducer'

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  themeReducer: themeReducer,
})