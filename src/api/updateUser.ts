import handleError from './error'
import defaultHeaders from './consts'

interface IParams {
  id: number,
  login: string,
  password: string,
  email: string,
}

function updateUser({ id, login, password, email }: IParams) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/client/users/${id}`, {
    method: 'PUT',
    headers: defaultHeaders(),
    body: JSON.stringify({ id, name: login, password, email }),
  })
  .then(handleError)
}

export default updateUser
