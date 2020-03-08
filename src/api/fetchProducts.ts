import castError from './error'
import defaultHeaders from './consts'

function fetchProducts(page?: string) {
  return fetch(!page ? `${process.env.REACT_APP_API_PATH}/api/client/products` : `${process.env.REACT_APP_API_PATH}/api/client/products?page=${page}`, {
    method: 'GET',
    headers: defaultHeaders(),
  },
  )
  .then(castError)
  .then((res: any) => ({ data: res.data, meta: res.meta }))
}

export default fetchProducts
