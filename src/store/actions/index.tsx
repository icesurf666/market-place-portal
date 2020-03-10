import { UPDATE_USER, SIGNOUT_USER, SIGNIN_USER, SIGNUP_USER, ADD_TO_CART, CLEAR_CART, UPDATE_CART, CHANGE_THEME } from "./actionTypes";
import { IUser, ICartItem } from "react-app-env";


interface ReduxAction {
  type: string,
  payload?: any,
}

export interface ISignUpAction {
  readonly type: typeof SIGNUP_USER
  readonly payload: IUser
}

export interface ISignInAction {
  readonly type: typeof SIGNIN_USER
  readonly payload: IUser
}

export interface IUpdateUserAction {
  readonly type: typeof UPDATE_USER
  readonly payload: IUser
}

export interface ISignOutAction {
  readonly type: typeof SIGNOUT_USER
}

export interface IAddToCartAction {
  readonly type: typeof ADD_TO_CART
  readonly payload: ICartItem
}

export interface IClearCartAction {
  readonly type: typeof CLEAR_CART
}

export interface IUpdateCartAction {
  readonly type: typeof UPDATE_CART
  readonly payload: Array<ICartItem>
}


export function setUserAfterSignUp(user: IUser): ISignUpAction {
  return {
    type: SIGNUP_USER,
    payload: user,
  }
}

export function setUserAfterUpdate(user: IUser): IUpdateUserAction {
  return {
    type: UPDATE_USER,
    payload: user,
  }
}

export function setUserAfterSignIn(user: IUser): ISignInAction {
  console.log(user)
  return {
    type: SIGNIN_USER,
    payload: user,
  }
}

export function signOutUser(): ISignOutAction {
  return {
    type: SIGNOUT_USER,
  }
}

export function addToCart(item: ICartItem): IAddToCartAction {
  return {
    type: ADD_TO_CART,
    payload: item,
  }
}

export function clearCart(): IClearCartAction {
  return {
    type: CLEAR_CART,
  }
}

export function updateCart(items: Array<ICartItem>): IUpdateCartAction {
  return {
    type: UPDATE_CART,
    payload: items,
  }
}

export const changeTheme = (theme: any) => ({
    type: CHANGE_THEME,
    payload: theme,
});
