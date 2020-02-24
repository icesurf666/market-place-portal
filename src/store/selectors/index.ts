import { createSelector } from 'reselect'
import get from 'lodash/get'
import { IStore } from 'store'
import { ICartItem } from 'react-app-env'

const storeSelector = (store: IStore): IStore => store

interface IReducerCart{
  items: ICartItem[],
}
export const cartSelector = createSelector(
  storeSelector,
  (store: IStore): IReducerCart => get(store, 'cart'),
)
