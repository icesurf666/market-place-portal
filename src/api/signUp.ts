import handleError from './error'

interface ILoginParams {
  login: string,
  password: string,
  c_password: string,
  email: string,
}

function signUp({ login, password, c_password, email }: ILoginParams) {
  return fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: login, password, email, c_password }),
  })
  .then(handleError)
}

export default signUp
