import { fetch } from 'utils/request'

const BASE_URL = 'https://test.youbaobao.xyz:18081'

export function getHomeData(openId) {
  return fetch(`${BASE_URL}/book/home/v2`, {openId})
}
