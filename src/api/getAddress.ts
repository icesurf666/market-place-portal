function getAddress(query: string) {
  return fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token acd71ed769c2cf22a4a62342aa5c0cb9f0cc0668'
    },
    body: JSON.stringify({query, count: 10})
  })
  .then(response => response.json());
}

export default getAddress