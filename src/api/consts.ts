import pickBy from 'lodash/pickBy'

function defaultHeaders(params: object = {}): any {
  const token = localStorage.getItem('token')
  return pickBy({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...params,
  })
}

export default defaultHeaders
