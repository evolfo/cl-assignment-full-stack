import wretch from 'wretch'

const wretchHelper = wretch()
  // Set the base url
  .url("http://localhost:3001/api/v1/")

export { wretchHelper }