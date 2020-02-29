import handleError from './error'
import defaultHeaders from './consts'

function fetchProduct(id: number) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/products/${id}`, {
    method: 'GET',
    headers: defaultHeaders(),
  })
  .then(handleError)
  .then((res: any) => ({data: res.data}))
}

export default fetchProduct
