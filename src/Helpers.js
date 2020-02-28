export const ApiUrl = "https://apitndati.com/v003/public/"

export async function callApi(path, body = {}, method = "GET") {
  let token = JSON.parse(localStorage.getItem('user')).access_token || ''
  let rtoken = JSON.parse(localStorage.getItem('user')).refresh_token || ''
  return fetch(`${ApiUrl}${path}${convertToQuery(body)}`, {
    method,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + token,
      'Accept': '*/*'
    },
  })
    .then(val => val.json())
    .catch(error => {
      return {
        error
      }
    })
}

export async function callApiWithBody(path, body = {}, method = "POST") {
  let token = JSON.parse(localStorage.getItem('user')).access_token || ''
  let rtoken = JSON.parse(localStorage.getItem('user')).refresh_token || ''
  return fetch(`${ApiUrl}${path}`, {
    method,
    headers: {
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + token
    },
    body: body
  })
    .then(val => val.json()
    )
    .catch(error => {
      console.log(error, path)
      return {
        error
      }
    })
}
export function convertToQuery(obj) {
  return '?' + Object.keys(obj).map(x => `${encodeURIComponent(x)}=${encodeURIComponent(obj[x])}`).join('&')}