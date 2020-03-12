import handleError from 'api/error'

interface ILeadParams {
  email: string,
  phone: string,
  description: string,
  name: string,
  password: string,
  c_password: string,

}

function leads({ email, phone, description, name, password, c_password }: ILeadParams) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/auth/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, description, phone, name, password, c_password }),
  })
  .then(handleError)
}

export default leads
