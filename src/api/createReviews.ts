import handleError from './error'
import defaultHeaders from './consts'

interface IParams {
  product_id: number,
  comment: string,
  rating: number,
}

function createReview({ product_id, comment, rating }: IParams) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/reviews`, {
    method: 'POST',
    headers: defaultHeaders(),
    body: JSON.stringify({ product_id, comment, rating }),
  })
  .then(handleError)
}

export default createReview
