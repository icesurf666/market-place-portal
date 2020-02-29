import handleError from './error'
import defaultHeaders from './consts'

interface IParams {
  normalizeItems: any,
  user: number,
}

function createOrder({ products, user}: any) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/orders`, {
    method: 'POST',
    headers: defaultHeaders(),
    body: JSON.stringify({ products, user }),
  })
  .then(handleError)
}

export default createOrder
