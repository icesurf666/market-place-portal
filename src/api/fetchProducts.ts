import castError from './error'
import defaultHeaders from './consts'

function fetchProducts() {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/products`, {
    method: 'GET',
    headers: defaultHeaders(),
  },
  )
  .then(castError)
  .then((res: any) => ({ data: res.data }))
}

export default fetchProducts
