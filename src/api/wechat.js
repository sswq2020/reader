import { getOpenId } from 'api/index'

export function getSetting(auth) {
  return new Promise((resolve, reject) => {
    mpvue.getSetting({
      success(res) {
        if (res.authSetting[`scope.${auth}`]) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  })
}

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    mpvue.getUserInfo({
      success(res) {
        const {userInfo} = res
        if (userInfo) {
          resolve(userInfo)
        } else {
          reject(res)
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  })
}
/** *设置微信存储数据**/
export function setStorageSync(key, data) {
  mpvue.setStorageSync(key, data)
}
/** *从微信存储中获得数据**/
export function getStorageSync(key) {
  return mpvue.getStorageSync(key)
}

/** *微信登陆,拿到code,返回promise**/
export function login() {
  return new Promise((resolve, reject) => {
    mpvue.login({
      success(res) {
        if (res && res.code) {
          resolve(res.code)
        } else {
          reject(res)
        }
      },
      fail(err) {
        console.log(err)
      }
    })
  })
}

/**
 * @description 获取用户的openId
 * */
export async function getUserOpenId() {
  try {
    const code = await login()
    const res = await getOpenId(code)
    const { data: { openid } } = res
    setStorageSync('openId', openid)
    return openid
  } catch (error) {
    console.log(error)
  }
}

export function showLoading(title) {
  mpvue.showLoading({
    title,
    mask: true
  })
}

export function hideLoading(title) {
  mpvue.hideLoading()
}

export function showToast(title, duration = 2000) {
  mpvue.showToast({
    title,
    duration
  })
}

export function showModal(title, content, successFn = () => {}, failFn = () => {}) {
  mpvue.showModal({
    title: title,
    content: content,
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
        successFn()
      } else if (res.cancel) {
        console.log('用户点击取消')
        failFn()
      }
    }
  })
}
