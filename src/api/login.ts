import handleError from 'api/error'

interface ILoginParams {
  email: string,
  password: string
}

function login({ email, password }: ILoginParams) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  .then(handleError)
}

export default login
