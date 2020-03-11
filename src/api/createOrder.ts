import handleError from './error'
import defaultHeaders from './consts'

interface IParams {
  normalizeItems: any,
  user: number,
  phone_mobile: number,
  country: string,
  address: string,
  delivery_price: string,
}

function createOrder({ products, user, ...rest}: any) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/orders`, {
    method: 'POST',
    headers: defaultHeaders(),
    body: JSON.stringify({ products, user, ...rest }),
  })
  .then(handleError)
}

export default createOrder
