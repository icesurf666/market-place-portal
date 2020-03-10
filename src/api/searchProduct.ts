import handleError from 'api/error'
import defaultHeaders from './consts'

interface ISearchParams {
  q: string,
  section: string,
  page: number,
}
function searchProducts({ q, page }: ISearchParams) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/search?q=${q}&section=products&page=${page}`, {
    method: 'GET',
    headers: defaultHeaders(),
  })
  .then(handleError)
}

export default searchProducts
