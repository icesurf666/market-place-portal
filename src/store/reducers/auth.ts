import { SIGNUP_USER, SIGNIN_USER, UPDATE_USER, SIGNOUT_USER } from "../actions/actionTypes";
import { AnyAction } from "redux";
import { IUser } from "react-app-env";

const initialState = {
  user: null,
  isAuth: null,
};
declare interface UserState {
  user: IUser | null,
  isAuth: boolean | null,
}


export default function authReducer(state: UserState = initialState, action: any): UserState {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, user: action.payload, isAuth: true }
    case SIGNIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      }
    case UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.payload}, ...action.payload }
      
    case SIGNOUT_USER:
      return {
        ...initialState,
      }
    default:
        return state
  }
}