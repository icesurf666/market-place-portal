import castError from './error'
import defaultHeaders from './consts'

function fetchProducts() {
  return fetch(`/api/client/products`, {
    method: 'GET',
    headers: defaultHeaders(),
  },
  )
  .then(castError)
  .then((res: any) => ({ data: res.data }))
}

export default fetchProducts
