import handleError from 'api/error'

interface ILeadParams {
  email: string,
  phone: string,
  description: string,
}

function leads({ email, phone, description }: ILeadParams) {
  return fetch(`${process.env.REACT_APP_API_PATH}/api/auth/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, description, phone }),
  })
  .then(handleError)
}

export default leads
