export const getSongs = () => {
  return fetch('http://localhost:8080/api/v1/playlist')
  .then(response => response.json())
}
