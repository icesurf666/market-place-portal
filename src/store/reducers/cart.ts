import { SIGNOUT_USER, UPDATE_CART, ADD_TO_CART, CLEAR_CART } from "../actions/actionTypes";

const initialState = {
  items: [],
};
declare interface CartState {
  items: any,
}


export default function authReducer(state: CartState = initialState, action: any): CartState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state, items: [ ...state.items, action.payload],
      }
    case UPDATE_CART:
      return {
        ...state, items: action.payload,
      }
    case CLEAR_CART:
      return {
        ...state, ...initialState,
      }
    case SIGNOUT_USER:
      return initialState
    default: return state
  }
}