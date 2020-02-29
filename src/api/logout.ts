import handleError from '../api/error'

interface ILogoutParams {
  email: string,
  password: string
}

function logout() {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/auth/logout`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(handleError)
}

export default logout
