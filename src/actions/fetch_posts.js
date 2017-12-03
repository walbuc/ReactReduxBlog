import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
const ROOT_URL =  ''
const API_KEY = ''

export default function fetch_posts() {
  const request = axios.get(`${ ROOT_URL }/posts${ API_KEY }`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
