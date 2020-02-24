import castError from './error'
import defaultHeaders from './consts'

function fetchOrders(page?: string) {
  return fetch(!page ? `/api/client/orders` : `/api/client/orders?page=${page}`, {
    method: 'GET',
    headers: defaultHeaders(),
  },
  )
  .then(castError)
  .then((res: any) => ({ data: res.data, meta: res.meta }))

}

export default fetchOrders
