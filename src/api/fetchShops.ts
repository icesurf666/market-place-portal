import castError from './error'
import defaultHeaders from './consts'

function fetchShops(page?: string) {
  return fetch(
    !page
    ? `${process.env.REACT_APP_API_PATH}/api/client/shops`
    : `${process.env.REACT_APP_API_PATH}/api/client/shops?page=${page}`, {
    method: 'GET',
    headers: defaultHeaders(),
  },
  )
  .then(castError)
  .then((res: any) => ({ data: res.data, meta: res.meta }))
}

export default fetchShops
