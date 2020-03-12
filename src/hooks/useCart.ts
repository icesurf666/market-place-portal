import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, updateCart } from 'store/actions'
import { ICartItem } from 'react-app-env'
import { cartSelector } from 'store/selectors'

interface ICart {
  items: ICartItem[]
  resetItems: (carts: ICartItem[]) => void
  addItem: (item: ICartItem) => void
  removeItem: (item: ICartItem) => void
  removeItemCount: (item: ICartItem) => void
  updateItem: (item: ICartItem) => void
  clear: () => void
}

function useCart(): ICart {
  const dispatch = useDispatch()
  const { items } = useSelector(cartSelector)
  const addItem = useCallback((item: ICartItem) => {
    const index = items.findIndex(cartItem => item.id === cartItem.id)
    if (index === -1) {
      dispatch(addToCart({ ...item, id: item.id }))
    } else {
      items[index].count += 1
      dispatch(updateCart(items))
    }
  }, [items])

  const updateItem = useCallback((item: ICartItem) => {
    const updatedItems = items.map(cartItem => {
      if (cartItem.id === item.id) return { ...item, id: cartItem.id }
      return cartItem
    })
    dispatch(updateCart(updatedItems))
  }, [items])

  const resetItems = useCallback((carts: Array<ICartItem>) => {
    dispatch(updateCart(carts.map((item) => ({
      ...item,
    }))))
  }, [])

  const removeItem = useCallback((item: ICartItem) => {
    const updatedCart = items.filter(cartItem => cartItem.id !== item.id)
    dispatch(updateCart(updatedCart))
  }, [items])

  const removeItemCount = useCallback((item: ICartItem) => {
    const index = items.findIndex(cartItem => item.id === cartItem.id)
    if (index === -1) {
      dispatch(addToCart({ ...item, id: item.id }))
    } else {
      if(items[index].count === 1) {
        return items[index].count = 1
      }
      items[index].count -= 1
      dispatch(updateCart(items))
    }
  }, [items])

  const clear = useCallback(() => {
    dispatch(clearCart())
  }, [])

  return {
    items,
    addItem,
    removeItem,
    updateItem,
    clear,
    resetItems,
    removeItemCount,
  }
}

export default useCart
