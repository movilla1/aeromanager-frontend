import { BASE_URI } from "./URI";
import axios from "axios";
/**
 * ApiCreateOrUpdateCall
 * @param {string} path api path to hit
 * @param {object} dataObject object to send as body in the request
 * @param {string} token security token
 * @returns promise with the execution result
 */
export const ApiCreateOrUpdateCall = (path, dataObject, token) => (
  axios.post(BASE_URI + path, dataObject, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
)

/**
 * ApiListCall
 * @param {string} path the api path to hit
 * @param {string} token the security token to use on the call
 * @returns promise with the result, on success it'll have an array with the items inside
 */
export const ApiListCall = (path, token) => (
  axios.get(BASE_URI + path, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
)

export const ApiDestroyCall = (path, token) => (
  axios.delete(BASE_URI + path, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
)
