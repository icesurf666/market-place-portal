async function handleError(res: Response) {
  const data = await res.json()
  if (data.errors) {
    throw new Error(data.errors[0].title)
  }
  return data
}

export default handleError
