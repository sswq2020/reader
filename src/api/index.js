import { fetch } from 'utils/request'

const BASE_URL = 'https://test.youbaobao.xyz:18081'

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
