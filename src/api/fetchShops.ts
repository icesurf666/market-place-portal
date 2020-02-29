import castError from './error'
import defaultHeaders from './consts'

function fetchShops() {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/shops`, {
    method: 'GET',
    headers: defaultHeaders(),
  },
  )
  .then(castError)
  .then((res: any) => ({ data: res.data }))
}

export default fetchShops
