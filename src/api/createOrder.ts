import handleError from './error'
import defaultHeaders from './consts'
import { ICartItem } from 'react-app-env'

interface IParams {
  normalizeItems: any,
  user: number,
}

function createOrder({ products, user}: any) {
  return fetch(`/api/client/orders`, {
    method: 'POST',
    headers: defaultHeaders(),
    body: JSON.stringify({ products, user }),
  })
  .then(handleError)
}

export default createOrder
