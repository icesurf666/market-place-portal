import castError from './error'
import defaultHeaders from './consts'

function fetchShop(id: number) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/shops/${id}`, {
    method: 'GET',
    headers: defaultHeaders(),
  })
  .then(castError)
  .then((res: any) => ({ data: res.data }))
}

export default fetchShop
