/// <reference types="react-scripts" />
export declare interface IShop {
  id: number,
  name: string,
  description: string,
  logo: string,
}

interface ISrc {
  src: string,
}
export declare interface IProduct {
  id: number,
  name: string,
  description: string,
  shop: IShop,
  logo: string,
  gallery: ISrc[],
  price: number,
  currency: ICurrency,
  weight?: number,
}

export declare interface ICurrency {
  id: number,
  code: string,
  name: string,
}

export declare interface IUser {
  id: number,
  name: string,
  email: string,
  logo: string,
  token: string,
  roles: string[],
  role: string,
}

export declare interface ICart {
  id: number,
  name: string,
  price: number,
  count: number,
}

declare interface ICartItem {
  id: number,
  product: IProduct,
  count: number,
  status?: string,
  total_price?: number,
}