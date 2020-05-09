import { fetch } from 'utils/request'

const BASE_URL = 'https://test.youbaobao.xyz:18081'

const APP_ID = 'wx7890931dc5e138bf'

const APP_SECRET = '23d8235a176e4e63ddcb37f47e5757e6'

export function getHomeData(openId) {
  return fetch(`${BASE_URL}/book/home/v2`, {openId})
}

export function getRecommend() {
  return fetch(`${BASE_URL}/book/home/recommend/v2`)
}

export function getFreeRead() {
  return fetch(`${BASE_URL}/book/home/freeRead/v2`)
}

export function getHotBook() {
  return fetch(`${BASE_URL}/book/home/hotBook/v2`)
}

export function getOpenId(code) {
  return fetch(`${BASE_URL}/openId/get`, {
    appId: APP_ID,
    secret: APP_SECRET,
    code
  })
}

export function register(openId, userInfo) {
  return fetch(`${BASE_URL}/user/register`, {
    openId,
    platform: mpvuePlatform,
    ...userInfo
  }, 'post')
}

export function search(keyword, openId, page = 1, pageSize = 20) {
  return fetch(`${BASE_URL}/book/search`, {
    keyword,
    openId,
    page,
    pageSize
  })
}

export function bookDetail(fileName, openId) {
  return fetch(`${BASE_URL}/book/detail`, {
    fileName,
    openId
  })
}

export function hotSearch() {
  return fetch(`${BASE_URL}/book/hot-search`)
}

export function bookContents(fileName) {
  return fetch(`${BASE_URL}/book/contents`, {
    fileName
  })
}
