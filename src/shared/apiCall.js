import { BASE_URI } from "./URI";

export const ApiCreateOrUpdateCall = (path, dataObject, token) => (
  fetch(BASE_URI + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(dataObject)
  })
)

export const ApiDestroyCall = (path, token) => (
  fetch(BASE_URI + path, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
)
